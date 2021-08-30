const admin = require('firebase-admin');

const config = require('./services.json');

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(config),
});

module.exports = firebaseApp;
