const mongoose = require('mongoose');
const config = require('../config/config');

const connectDB = async () => {
  try {
    const MONGODB_URI_LOCAL = config.getMongoURI();
    await mongoose.connect(MONGODB_URI_LOCAL);
    console.log('¡Conexión a MongoDB exitosa! 🚀');
  } catch (error) {
    console.error('¡Ups! Hubo un problema al conectar con MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
