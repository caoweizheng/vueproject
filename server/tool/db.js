const Mongoclient = require('mongoDB').MongoClient;

const dbUrl = 'mongodb://localhost:27017';

const apiResult = require('./apiResult.js');

let db;

Mongoclient.connect(dbUrl,(error,client) => {

	db = client.db('vuepro');
})


module.exports = {

	async select(_collection,_condition={}){

		let result = await db.collection(_collection).find(_condition).toArray();

		return apiResult(result.length > 0,result);
	}
}

