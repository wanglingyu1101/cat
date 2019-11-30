const express = require("express");
const tools = require("./module/tools");
const db = require("./module/db");
const bodyParser = require("body-parser");
const mongdb = require("mongodb")
const app = express();
app.use(bodyParser.json())


app.get("/send",async function (req,res) {
    /*
    1、接收参数phoneId
    2、判断之前是否发送过短信
        1、发送过
            判断上次发送的时间是否到期。
            1、到期了
                发送，更新该条记录的短信验证码以及发送时间。
            2、未到期
                返回未到期异常
        2、未发送
            直接发送
    */
    const phoneId = req.query.phoneId;
    const code = tools.getRandom(100000,999999);
    // 根据手机号查找之前是否发送过短信
    const info = await db.findOne("phoneCode",{phoneId})
    if(info){
        //测试需要   将时间缩短为1s可以发送一次！！！！！！！！！
        if(Date.now()-info.sendTime>1000){
            await db.updateOne("phoneCode",{phoneId},{
                $set:{
                    code,
                    sendTime:Date.now()
                }
            })
            res.json({
                ok:1,
                code,
                msg:"发送成功"
            })
        }else{
            tools.json(res,-1,"时间未过期还差"+Number.parseInt((1000-Date.now()+info.sendTime)/1000)+"秒")
        }
    }else{
        await db.insertOne("phoneCode",{
            phoneId,
            code,
            sendTime:Date.now()
        })
        res.json({
            ok:1,
            code,
            msg:"发送成功"
        })
    }
});
app.post("/codeLogin",async function (req,res) {
    /*
    * 1、接收参数  phoneId code
    * 2、根据参数去短信集合当中进行查找
    *   1、找到数据
    *         1、判断用户是否存在
    *            1、存在
    *               更新最后登陆时间
    *            2、不存在
    *               创建一个用户。
    *   2、未找到数据
    *       请输入正确的验证码*/
    //坑1：code是字符串   在数据库中是数字  要转类型
    //坑  post应该是req.body 接收数据  但是这里只能用 req.query来接收
    const phoneId = req.query.phoneId;
    const code = req.query.code - 0  //转为数字类型
    // console.log(1111111,code,phoneId,req.body,req)
    const info = await db.findOne("phoneCode",{
        phoneId,
        code
        // 判断发送时间是否有效
    })
    console.log(info)
    if(info){
        // Date,now()-info.sendTime<1000*60*30  //有效期30分钟
        if(Date.now()-info.sendTime>1000*60*30){
            res.json({ok:-1,msg:"验证码已过期"})
        }
        else{
            const user = await db.findOne("userList",{
                phoneId
            })
            const token =  await  tools.enCode({phoneId})
            if(user){
                await db.updateOne("userList",{phoneId},{$set:{lastTime:Date.now()}});
                res.json({
                    ok:1,
                    token,
                    msg:"登陆成功"
                })
            }else{
                await db.insertOne("userList",{phoneId,regTime:Date.now(),gold:1000,lastTime:Date.now()});
                res.json({
                    ok:1,
                    token,
                    msg:"登陆成功"
                })
            }
        }
    }
    else{
        tools.json(res,-1,"请输入正确的验证码")
    }
});
app.post('/login',async function (req,res) {

    let  {adminName,pass,token} = req.query
    const passWord =  await  tools.enMd5(pass)
    if(token){
        const data = await  tools.deCode(token)
        res.json(data)
    }else{
        const info = await db.findOne("userList",{adminName,passWord});
        if(info){
            token = await  tools.enCode({adminName})
            res.json({
                ok:1,
                token,
                msg:"登陆成功"
            })
        }else{
            res.json({
                ok:-1,
                msg:'用户名或密码错误！'
            })
        }
    }

})
app.listen(80,function () {
    console.log("success");
})