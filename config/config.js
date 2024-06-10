require('dotenv').config();

const { MONGODB_URI_LOCAL, PORT } = process.env;

module.exports = {
  getMongoURI: function () {
    if (process.env.NODE_ENV === 'docker' && process.env.MONGODB_URI_DOCKER) {
      return process.env.MONGODB_URI_DOCKER;
    } else if (process.env.MONGODB_URI_LOCAL) {
      return process.env.MONGODB_URI_LOCAL;
    } else {
      throw new Error('La URI de MongoDB no está configurada correctamente.');
    }
  },
  PORT: PORT || 4200

};

console.log('Configuración cargada exitosamente.');
