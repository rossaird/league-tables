const {MongoMemoryServer} = require('mongodb-memory-server');
const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');

let database = null;

async function startDatabase() {
	const mongo = new MongoMemoryServer();
	const mongoDBURL = await mongo.getConnectionString();
	const mongooseconnection = await mongoose.connect(mongoDBURL, { useNewUrlParser: true });
	database = mongooseconnection.connection;

}

async function getDatabase() {
	if (!database) await startDatabase();
	return database;
}

module.exports = {
	getDatabase,
	startDatabase,
};