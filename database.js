const Datastore = require('nedb');
const db = new Datastore({ filename: 'destinations.db', autoload: true });

module.exports = db;