const Qfire = require('../../db/db');

module.exports = {
  create: (data, callBack) => {
      Qfire.query(
        `insert into renting_item(item_name, user_id, rent_price, manfacture_date, actual_cost) 
                  values(?,?,?,?,?)`,
        [
          data.item_name,
          data.user_id,
          data.rent_price,
          data.manfacture_date,
          data.actual_cost,
        ],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
    getitemByitemId: (id, callBack) => {
      Qfire.query(
        `SELECT * FROM  renting_item  where id = ?`,
        [id],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results[0]);
        }
      );
    },
    getitems: callBack => {
      Qfire.query(
        `select * from renting_item`,
        [],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
    updateItem: (data, callBack) => {
      Qfire.query( 
        `update renting_item set item_name=?, rent_price=?, manfacture_date=?, actual_cost=? where id = ?`,
        [
          data.item_name,
          data.rent_price,
          data.manfacture_date,
          data.actual_cost,
          data.id 
        ],
        (error, results, fields) => {
          if (error) {
            console.log("error:");
            callBack(error);
          }
          return callBack(null, results[0]);
        }
      );
    },
    deleteitem: (data, callBack) => {
      Qfire.query(
        `delete from renting_item where id = ?`,
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