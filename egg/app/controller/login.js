'use strict';
const Service = require('egg').Service;
class LoginService extends Service {
    async loginFn() {
        let {ctx, service} = this;
        let {user, pwd} = ctx.request.body;
        let result = await service.login.gologin(user, pwd);
        ctx.body=result;
    }
}
module.exports = LoginService;
