'use strict';
const User = require('../../../seq/db/User/User.js');
const Service = require('egg').Service;
class LoginService extends Service {
    async gologin(user,pwd){
        let result = User.findAll();
        let flag = result.some(item=>item.Unum===user && item.pass===pwd);
        if(flag){
            return{
                code:1,
                message:'登陆成功'
            }
        }else{
            return{
                code:-1,
                message:'登陆失败'
            }
        }
    }
}
module.exports = LoginService;
