const db = require('../tool/db.js');
const apiResult = require('../tool/apiResult.js')
const ObjectID = require('mongodb').ObjectID;

module.exports = {
	reg(app){
		app.post('/addCar',async (req,res) => {

			let proId = req.body.proid;

			     
			     
			let result = await db.select('products',{'_id':new ObjectID(proId)});

			console.log(result)

			if(result.state){
				let goods = {
					subtitle:result.data[0].subtitle,
					title:result.data[0].title,
					price:result.data[0].price,
					target_type:result.data[0].target_type,
					volume:result.data[0].volume
				}

				let g_result = await db.insert('carlist',goods); 

	        	res.send(apiResult(g_result))
				     
			}
			     
		}),
		app.get('/getCar',async (req,res) => {

			let result = await db.select('carlist');

			res.send(result);

		})
	}
}