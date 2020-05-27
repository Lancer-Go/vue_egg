const Sequelize = require('sequelize');
const sequelize = require('../../connect');
const User = sequelize.define('users',{
    Uname:{
        type:Sequelize.STRING(5),
        allowNULL:false
    },
    Unum:{
        type:Sequelize.CHAR(8),
        allowNULL: false
    },
    Upass:{
        type:Sequelize.STRING(15),
        allowNULL:false
    }
},{
    timestamp:false,
    tableName:'users'
});
module.exports=User;
