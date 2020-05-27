'use strict';
const Service = require('egg').Service;
const User = require('../../../seq/db/User/User.js');
class RegistryService extends Service{
    async goregistry(user,pwd,name,pwd1){
        let flag = User.findOne({
            where:{
                Unum:user,
                Upass:pwd1
            }});
        if(flag.length>0){
            return {
                code:-1,
                message:'注册失败，用户存在'
            }
        }else{
            let res = await User.create({
                Unum:user,
                Upass:pwd1,
                Uname:name
            });
            return{
                code:1,
                message:'注册成功',
                res
            }
        }
    }
}
module.exports=RegistryService;
