const db = require('../tool/db.js');
const apiResult = require('../tool/apiResult.js');

module.exports = {
	reg(app,jwt){
		app.post('/login', async (req,res) => {
			console.log('login')
			     
			let manager = {
				username:req.body.username,
				password:req.body.password
			}

			// check db
			let result = await db.select('manager',manager);

      res.send(result);
			     
		  }),


      app.post('/userlogin', async (req,res) => {
      console.log('login')
           
      let user = {
        phone:req.body.phone,
        password:req.body.password
      }

      // check db
      let result = await db.select('users',user);

            if(result.state){                     
               let token = jwt.sign({'phone':result.data[0].phone}, '123', {
                    'expiresIn': 60*60 // 设置过期时间
                })
               console.log(token)
                    
               res.send(apiResult(true,token));
            }else{
                res.send(apiResult(false,result)); 
            }
           
      }),
      app.post('/userRegister',async (req,res) => {

        let user = {
          phone:req.body.phone,
          password:req.body.password,
          time:req.body.time
        }
        let result = await db.insert('users',user); 

        res.send(apiResult(result))

      }),
      app.get('/userlist',async (req,res) => {

            let result = await db.select('users');
                 
            res.send(apiResult(true,result.data,''))
      })
	}
}