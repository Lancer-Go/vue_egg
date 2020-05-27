'use strict';
const Controller = require('egg').Controller;
class RegistryController extends Controller {
    async registryFn(){
        const {ctx,service}=this;
        let{user,pwd,name,pwd1}=ctx.request.body;
        let result = await service.registry.goregistry(user, pwd, name, pwd1);
        ctx.body=result;
    }
}
module.exports = RegistryController;
