const Qfire = require('../../db/db');

module.exports = {
    create: (data, callBack) => {
      Qfire.query(
        `insert into userlogin(firstname, lastname, gender, email, password, number) 
                  values(?,?,?,?,?,?)`,
        [
          data.first_name,
          data.last_name,
          data.gender,
          data.email,
          data.password,
          data.number
        ], 
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
    getUserByUserEmail: (email, callBack) => {
      Qfire.query(
        `select * from userlogin where email = ?`,
        [email],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results[0]);
        }
      );
    },
    getUserByUserId: (id, callBack) => {
      Qfire.query(
        `select id,firstname,lastname,gender,email,number from userlogin where id = ?`,
        [id],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results[0]);
        }
      );
    },
    getUsers: callBack => {
      Qfire.query(
        `select id,firstname,lastname,gender,email,number from userlogin`,
        [],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
    updateUser: (data, callBack) => {
      Qfire.query(
        `update userlogin set firstname=?, lastname=?, gender=?, email=?, password=?, number=? where id = ?`,
        [
          data.first_name,
          data.last_name,
          data.gender,
          data.email,
          data.password,
          data.number,
          data.id
        ],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results[0]);
        }
      );
    },
    deleteUser: (data, callBack) => {
      Qfire.query(
        `delete from userlogin where id = ?`,
        [data.id],
        (error, results, fields) => {
          if (error) {
            //console.log('err');
            callBack(error);
          }
          console.log('pass serice',results['affectedRows']);
          return callBack(null, results);
        }
      );
    }
  };