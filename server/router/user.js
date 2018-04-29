const db = require('../tool/db.js');

module.exports = {
	reg(app){
		app.post('/login', async (req,res) => {

			let manager = {
				username:req.body.username,
				password:req.body.password
			}
	     
			// check db
			let result = await db.select('manager',manager);

			res.send(result);
			     
		})
	}
}