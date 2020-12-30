const mysql = require('mysql');
//require('dotenv').config();

const Qfire = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit:10
});
 
// let dbout ={};

// dbout.all=()=>{
//     return new Promise((resolve,reject)=>{
//         Qfire.query('select * from userlogin',(err,result)=>
//         {
//             if(err)
//             { return reject(err); }
//             else
//             { return resolve(result); }
//         })
//     })
// }

// dbout.onerss=(id)=>{
//     return new Promise((resolve,reject)=>{
//         Qfire.query('select * from userlogin where id = ?',[id],(err,result)=>
//         {
//             if(err)
//             { return reject(err); }
//             else
//             { return resolve(result); }
//         })
//     })
// }

// module.exports = dbout;


module.exports = Qfire;