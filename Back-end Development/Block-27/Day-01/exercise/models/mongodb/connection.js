const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://localhost:27017/?readPreference=primary&ssl=false';

const connection = () => {
  return MongoClient
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('model_example'))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};

module.exports = connection;
