// Variables globales para el manejo del chat
let isSearching = false;

// Función original para manejar clicks en los botones
function handleChat(option) {
  if(option === "GuiaPasos") window.open("/guia-paso-a-paso");
}

// Funciones para ocultar y mostrar el chat
function hideChat() {
  const miniChat = document.getElementById('mini-chat');
  const showChatBtn = document.getElementById('show-chat-btn');
  
  miniChat.classList.add('hidden');
  setTimeout(() => {
    showChatBtn.classList.add('visible');
  }, 300);
}

function showChat() {
  const miniChat = document.getElementById('mini-chat');
  const showChatBtn = document.getElementById('show-chat-btn');
  
  showChatBtn.classList.remove('visible');
  setTimeout(() => {
    miniChat.classList.remove('hidden');
  }, 100);
}

// Función para validar cédula panameña
function validateCedula(cedula) {
  // Remover espacios y guiones
  const cleanCedula = cedula.replace(/[\s-]/g, '');
  
  // Verificar si es solo números y tiene longitud apropiada (6-12 dígitos)
  if (!/^\d{6,12}$/.test(cleanCedula)) {
    return false;
  }
  
  return true;
}

// Función para mostrar indicador de carga
function showLoading() {
  const chatBody = document.getElementById('mini-chat-body');
  const loadingDiv = document.createElement('div');
  loadingDiv.className = 'loading-indicator';
  loadingDiv.id = 'loading-indicator';
  loadingDiv.innerHTML = '<span>🔍 Buscando documentos disponibles...</span>';
  
  const inputContainer = document.getElementById('chat-input-container');
  chatBody.insertBefore(loadingDiv, inputContainer);
  
  scrollToBottom();
}

// Función para ocultar indicador de carga
function hideLoading() {
  const loadingIndicator = document.getElementById('loading-indicator');
  if (loadingIndicator) {
    loadingIndicator.remove();
  }
}

// Función para hacer scroll al final del chat
function scrollToBottom() {
  const chatBody = document.getElementById('mini-chat-body');
  setTimeout(() => {
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 100);
}

// Función principal para enviar mensaje y buscar documentos
async function sendMessage() {
  if (isSearching) return;

  const input = document.getElementById('chat-input');
  const cedula = input.value.trim();
  
  if (!cedula) {
    displayMessage('Por favor, ingresa tu número de cédula.', 'bot', 'error-message');
    return;
  }

  if (!validateCedula(cedula)) {
    displayMessage('Por favor, ingresa un número de cédula válido (solo números, 6-12 dígitos).', 'bot', 'error-message');
    return;
  }

  // Limpiar resultados anteriores
  clearPreviousResults();

  // Mostrar mensaje del usuario
  displayMessage(`Buscando documentos para cédula: ${cedula}`, 'user');
  
  // Limpiar input y mostrar loading
  input.value = '';
  isSearching = true;
  showLoading();
  
  try {
    // Buscar documentos usando el mismo endpoint que tu componente React
    const documents = await searchDocuments(cedula);
    
    hideLoading();
    
    // Mostrar solo los documentos que realmente existen
    await displayDocuments(documents, cedula);
    
  } catch (error) {
    console.error('Error al buscar documentos:', error);
    hideLoading();
    const errorMessage = error.message || 'Error al consultar los documentos. Por favor, verifica tu conexión e intenta nuevamente.';
    displayMessage(errorMessage, 'bot', 'error-message');
  } finally {
    isSearching = false;
  }
}

// Función para limpiar resultados anteriores
function clearPreviousResults() {
  const chatBody = document.getElementById('mini-chat-body');
  const sections = chatBody.querySelectorAll('.documents-section');
  sections.forEach(section => section.remove());
  
  const messages = chatBody.querySelectorAll('.success-message, .error-message, .info-message, .user-message, .bot-message');
  messages.forEach(message => {
    // Solo remover mensajes que no sean de bienvenida
    if (!message.classList.contains('chat-message') || !message.querySelector('.welcome-title')) {
      message.remove();
    }
  });
}

// Función para buscar documentos con múltiples formatos de cédula
async function searchDocuments(cedula) {
  const originalCedula = cedula.trim();
  const cleanCedula = cedula.replace(/[\s-]/g, '');
  
  // Lista de formatos de cédula a probar
  const cedulaFormats = [
    originalCedula,        // Formato original
    cleanCedula,          // Sin espacios ni guiones  
    cleanCedula.replace(/^(\d)(\d{3})(\d{3})$/, '$1-$2-$3'), // Formato X-XXX-XXX
    cleanCedula.replace(/^(\d{2})(\d{3})(\d{3})$/, '$1-$2-$3'), // Formato XX-XXX-XXX
  ].filter(format => format && format !== originalCedula); // Remover duplicados
  
  cedulaFormats.unshift(originalCedula); // Poner el original primero
  
  try {
    console.log(`Probando formatos de cédula:`, cedulaFormats);
    
    // Probar cada formato hasta encontrar documentos
    for (const formatoActual of cedulaFormats) {
      console.log(`Buscando con formato: ${formatoActual}`);
      
      const response = await fetch('https://relaticpanama.org/api/member_search.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cedula_dni: formatoActual }),
      });

      if (!response.ok) {
        console.log(`Error HTTP ${response.status} con formato: ${formatoActual}`);
        continue;
      }

      const data = await response.json();
      
      console.log(`Respuesta para ${formatoActual}:`, data);

      if (data.success) {
        const totalDocs = (data.carnets?.length || 0) + (data.certificates?.length || 0) + (data.letters?.length || 0);
        
        console.log(`Documentos encontrados con ${formatoActual}:`, {
          carnets: data.carnets?.length || 0,
          certificates: data.certificates?.length || 0,
          letters: data.letters?.length || 0,
          total: totalDocs
        });

        // Si encontramos documentos, devolver inmediatamente
        if (totalDocs > 0) {
          return {
            carnets: data.carnets || [],
            certificates: data.certificates || [],
            letters: data.letters || [],
            formatoUsado: formatoActual
          };
        }
      }
    }
    
    // Si llegamos aquí, no se encontraron documentos con ningún formato
    throw new Error('No se encontraron documentos para esta cédula con ningún formato.');
    
  } catch (error) {
    console.error('Error al buscar documentos:', error);
    throw error;
  }
}

// Función para mostrar los documentos encontrados
async function displayDocuments(documents, cedula) {
  const totalDocuments = (documents.carnets?.length || 0) + (documents.certificates?.length || 0) + (documents.letters?.length || 0);
  
  if (totalDocuments === 0) {
    displayMessage('No se encontraron documentos disponibles para esta cédula.', 'bot', 'info-message');
    return;
  }

  // Mensaje de confirmación
  const plural = totalDocuments > 1 ? 's' : '';
  displayMessage(`✅ Se encontraron ${totalDocuments} documento${plural} disponible${plural} para la cédula ${cedula}.`, 'bot', 'success-message');

  // Crear secciones solo para los tipos que tienen documentos
  if (documents.certificates && documents.certificates.length > 0) {
    createDocumentSection('certificados', '📋 Certificados Disponibles', documents.certificates, 'certificado');
  }

  if (documents.carnets && documents.carnets.length > 0) {
    createDocumentSection('carnets', '🆔 Carnets Disponibles', documents.carnets, 'carnet');
  }

  if (documents.letters && documents.letters.length > 0) {
    createDocumentSection('cartas', '📄 Cartas de Aceptación Disponibles', documents.letters, 'carta');
  }

  scrollToBottom();
}

// Función para crear una sección de documentos
function createDocumentSection(cssClass, title, documents, documentType) {
  const chatBody = document.getElementById('mini-chat-body');
  const inputContainer = document.getElementById('chat-input-container');
  
  // Crear contenedor de sección
  const sectionDiv = document.createElement('div');
  sectionDiv.className = 'documents-section';
  
  // Título de la sección
  const titleDiv = document.createElement('div');
  titleDiv.className = 'section-title';
  titleDiv.textContent = title;
  sectionDiv.appendChild(titleDiv);
  
  // Crear botones para cada documento
  documents.forEach((doc, index) => {
    const button = document.createElement('button');
    button.className = `chat-button ${cssClass}`;
    
    // Determinar el nombre a mostrar según el tipo de documento
    let displayName = '';
    let additionalInfo = '';
    
    if (documentType === 'carnet') {
      displayName = doc.nombre_completo || 'Carnet';
      if (doc.cargo_rol) {
        additionalInfo = `Cargo: ${doc.cargo_rol}`;
      }
      if (doc.tipo_membresia && doc.tipo_membresia !== 'MIEMBRO INVESTIGADOR') {
        additionalInfo = additionalInfo ? `${additionalInfo} - ${doc.tipo_membresia}` : doc.tipo_membresia;
      }
    } else if (documentType === 'certificado') {
      displayName = doc.concepto || 'Certificado';
      if (doc.fecha_emision) {
        additionalInfo = `Emitido: ${doc.fecha_emision}`;
      }
    } else if (documentType === 'carta') {
      // Para cartas, usar participante en lugar de nombre_completo
      displayName = doc.participante || 'Carta de Aceptación';
      if (doc.tipo_constancia) {
        additionalInfo = `Tipo: ${doc.tipo_constancia}`;
      }
      if (doc.fecha_expedicion) {
        additionalInfo = additionalInfo ? `${additionalInfo} - ${doc.fecha_expedicion}` : `Fecha: ${doc.fecha_expedicion}`;
      }
    }
    
    // Truncar el nombre si es muy largo
    const truncatedName = displayName.length > 35 ? displayName.substring(0, 35) + '...' : displayName;
    const truncatedInfo = additionalInfo.length > 50 ? additionalInfo.substring(0, 50) + '...' : additionalInfo;
    
    // Crear el contenido del botón con texto de descarga claro
    button.innerHTML = `
      <div style="display: flex; align-items: center; width: 100%;">
        <div style="flex: 1;">
          <div style="font-weight: 600; margin-bottom: 4px;">${truncatedName}</div>
          ${additionalInfo ? `<div style="font-size: 12px; color: #64748b;">${truncatedInfo}</div>` : ''}
        </div>
        <div style="margin-left: 12px; padding: 8px 12px; background: #005eff; color: white; border-radius: 4px; font-size: 12px; font-weight: 500;">
          DESCARGAR
        </div>
      </div>
    `;
    
    // Evento de click para descargar usando el mismo patrón que tu componente
    button.addEventListener('click', async function() {
      try {
        console.log(`Descargando ${documentType} ID: ${doc.id}`);
        
        // Deshabilitar botón durante descarga
        button.disabled = true;
        button.innerHTML = `
          <div style="display: flex; align-items: center; width: 100%;">
            <div style="flex: 1;">
              <div style="font-weight: 600; margin-bottom: 4px;">${truncatedName}</div>
              <div style="font-size: 12px; color: #64748b;">Descargando...</div>
            </div>
            <div style="margin-left: 12px; padding: 8px 12px; background: #cbd5e1; color: #64748b; border-radius: 4px; font-size: 12px; font-weight: 500;">
              DESCARGANDO...
            </div>
          </div>
        `;
        
        // Usar los mismos endpoints que tu componente React
        let downloadUrl = '';
        if (documentType === 'carnet') {
          downloadUrl = `https://relaticpanama.org/verify_carnet.php?id=${doc.id}`;
        } else if (documentType === 'certificado') {
          downloadUrl = `https://relaticpanama.org/verify_certificate.php?id=${doc.id}`;
        } else if (documentType === 'carta') {
          downloadUrl = `https://relaticpanama.org/verify_letter.php?id=${doc.id}`;
        }
        
        // Abrir en nueva pestaña (mismo comportamiento que tu componente)
        window.open(downloadUrl, '_blank');
        
        // Mostrar mensaje de confirmación
        displayMessage(`📥 Descarga iniciada: ${displayName}`, 'bot', 'success-message');
        
      } catch (error) {
        console.error(`Error al descargar ${documentType}:`, error);
        displayMessage(`❌ Error al descargar: ${displayName}. Por favor, intenta nuevamente.`, 'bot', 'error-message');
      } finally {
        // Restaurar botón
        button.disabled = false;
        button.innerHTML = `
          <div style="display: flex; align-items: center; width: 100%;">
            <div style="flex: 1;">
              <div style="font-weight: 600; margin-bottom: 4px;">${truncatedName}</div>
              ${additionalInfo ? `<div style="font-size: 12px; color: #64748b;">${truncatedInfo}</div>` : ''}
            </div>
            <div style="margin-left: 12px; padding: 8px 12px; background: #005eff; color: white; border-radius: 4px; font-size: 12px; font-weight: 500;">
              DESCARGAR
            </div>
          </div>
        `;
      }
    });
    
    sectionDiv.appendChild(button);
  });
  
  // Insertar antes del contenedor de input
  chatBody.insertBefore(sectionDiv, inputContainer);
}

// Función para manejar el Enter
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendMessage();
  }
}

// Función para mostrar mensajes en el chat
function displayMessage(text, sender, extraClass = '') {
  const chatBody = document.getElementById('mini-chat-body');
  const messageDiv = document.createElement('div');
  
  let className = '';
  if (extraClass) {
    className = extraClass;
  } else {
    className = sender === 'user' ? 'user-message' : 'bot-message';
  }
  
  messageDiv.className = className;
  messageDiv.textContent = text;
  
  const inputContainer = document.getElementById('chat-input-container');
  chatBody.insertBefore(messageDiv, inputContainer);
  
  scrollToBottom();
}

// Funcionalidad para cerrar con Escape
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const miniChat = document.getElementById('mini-chat');
    if (!miniChat.classList.contains('hidden')) {
      hideChat();
    }
  }
});

// Prevenir el envío del formulario si se presiona Enter accidentalmente
document.addEventListener('DOMContentLoaded', function() {
  const chatInput = document.getElementById('chat-input');
  if (chatInput) {
    chatInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
      }
    });
  }
});

// Debug: Log para verificar que el script se está ejecutando
console.log('Chatbot mejorado cargado correctamente');
console.log('Soporte para: Certificados, Carnets y Cartas de Aceptación');


