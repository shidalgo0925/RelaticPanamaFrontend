import { motion } from 'framer-motion';
import { Gift, ShoppingCart, Users, FileText, Globe } from 'lucide-react';

const EasyTechDashboard = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        className="bg-white rounded-xl shadow-md p-6 lg:p-8"
      >
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
          BIENVENIDO a Easy Tech Services
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          Tu plataforma integral de servicios tecnológicos
        </p>
        <p className="text-gray-500">
          Accede a herramientas gratuitas y servicios premium desde el menú lateral.
        </p>
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Servicios Gratuitos</p>
              <p className="text-4xl font-bold text-gray-900">24</p>
            </div>
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
              <Gift className="w-8 h-8 text-blue-600" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Servicios Premium</p>
              <p className="text-4xl font-bold text-gray-900">18</p>
            </div>
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-8 h-8 text-green-600" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Usuarios Activos</p>
              <p className="text-4xl font-bold text-gray-900">0</p>
            </div>
            <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center">
              <Users className="w-8 h-8 text-cyan-600" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Popular Services Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Popular Free Services */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Servicios Gratuitos Populares</h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-red-600" />
              </div>
              <span className="font-medium text-gray-900">PDF a Word/Excel</span>
            </div>
            {/* Add more popular free services here */}
          </div>
        </motion.div>

        {/* Premium Services */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Servicios Premium</h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-blue-600" />
              </div>
              <span className="font-medium text-gray-900">Registro de Dom</span>
            </div>
            {/* Add more premium services here */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EasyTechDashboard;











