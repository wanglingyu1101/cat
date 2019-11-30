
const md5 = require("md5");
const jwt = require("jwt-simple");
const KEY = ")*(&^(*&("
const request = require("request");
const querystring = require("querystring");
module.exports.getRandom = function (min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
module.exports.changeArr = function (arr,len=10) {
    const newArr = [];
    for (var i = 0; i < arr.length; i += len) {
        newArr.push(arr.slice(i, i + len))
    }
    return newArr;
}
// 发送验证码     聚合
module.exports.send = function (mobile) {
    return new Promise((resolve,reject)=>{
        const str = this.getRandom(100000,999999);
        // console.log(111111,str);
        const obj = {
            mobile,
            tpl_id:"164473",
            tpl_value:"#code#="+str,
            key:"b3521c035d2f2048"
        }
        const url = "http://v.juhe.cn/sms/send?"+querystring.stringify(obj);
        request(url,function (err,response,body) {
            if(!err && response.statusCode === 200){
                // console.log(22222222,body);
                resolve(JSON.parse(body));
            }else{
                // console.log(333333333,body)
                reject("请求异常")
            }
        })
    })

    //
}
// 获取当前时间   年-月-日 时:分:秒
module.exports.getNowTime = function () {
    const date = new Date();
    return date.getFullYear()+"-"
        + (date.getMonth()+1).toString().padStart(2,0) + "-"
        +date.getDate().toString().padStart(2,0) + " "
        +date.getHours().toString().padStart(2,0) + ":"
        +date.getMinutes().toString().padStart(2,0) + ":"
        +date.getSeconds().toString().padStart(2,0);
}
// res:响应对象
module.exports.json = function (res,ok = -1,msg = "网络连接错误") {
    res.json({
        ok,
        msg
    })
}
// md5加密
module.exports.enMd5  = function (info) {
    // 盐料
    const str = "(*&^(*&^";
    return md5(info+str);
};
// 生成 token
module.exports.enCode = function (info) {
    return jwt.encode({
        ...info,
        ...{
            //一小时后过期
            lastTime:Date.now()+1000*60*60
        }
    },KEY)
}
// 解析token
module.exports.deCode = function (token) {
    // 1、解析失败  2、解析成功，但过期了。 3、解析成功未过期
    try{
        const info = jwt.decode(token,KEY);

        if(info.lastTime < Date.now()){
            // 过期了
            return {
                ok:-1,
                msg:"过期了"
            }
        }else{
            // 未过期
            return {
                ok:1,
                info
            }
        }
    }catch (err){
        // 解析失败  token不对。
        return {
            ok:-1,
            msg:"token异常",token
        }
    }

}
// console.log(module.exports.getNowTime());