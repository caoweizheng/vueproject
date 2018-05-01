const db = require('../tool/db.js');
const apiResult = require('../tool/apiResult.js')
module.exports = {

	reg(app){

		app.post('/addProduct',async (req,res) => {

	        let product = {
	          title:req.body.title,
	          price:req.body.price,
	          url:req.body.url,
	          type:req.body.type
	        }
	        let result = await db.insert('products',product); 

	        res.send(apiResult(result))
		}),
		app.get('/getProduct',async (req,res) => {

			let result = await db.select('products');

			res.send(result);
		}),
		app.post('/delPro',async (req,res) => {
			console.log(req.body.pId)
			     
			let result = await db.remove('products',req.body.pId);

			res.send(result);

		})
	}
}