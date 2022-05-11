const express = require('express');
const router = express.Router();
//引入数据库
const db = require('../common/db')

//router.get是处理GET请求的方法，router.post是处理POST请求的方法  
//http://localhost:8090/text/login/user
router.get('/user', async (req, res) => {
	//返回到浏览器的数据
    try{
        const [data] = await db('select * from user');
        if (data) {
            console.log(data);
          res.json({ code: 0, data, message: '' });
        } else {
          res.json({ code: -1, data: null, message: '用户不存在' });
        }

    }catch(e){
        res.json({code: -1, data: null, message: e});
    }
    
});
module.exports = router;

