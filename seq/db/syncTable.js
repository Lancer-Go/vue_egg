const Course = require('./Course/Course.js');
const Student = require('./Student/Student.js');
const Class = require('./Class/Class.js');
const Grade = require('./Grade/Grade.js');
const User = require('./User/User.js');

// 同步表结构
function syncTable (){
        User.sync({force:true});
}
syncTable();
module.exports = syncTable;
