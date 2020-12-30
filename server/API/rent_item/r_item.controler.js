const {
    create,
    getitemByitemId,
    getitems,
    updateItem,
    deleteitem
  } = require("./r_item.service");
  const { hashSync, genSaltSync, compareSync } = require("bcrypt");
  const { sign } = require("jsonwebtoken");
  
  module.exports = {
    createitem: (req, res) => {
      const body = req.body; 
      create(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection errror"
          });
        }
        return res.status(200).json({
          success: 1,
          data: results
        });
      });
    },
    getitemByitemId: (req, res) => {
      const id = req.params.id;
      getitemByitemId(id, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "Record not Found"
          });
        }
        results.password = undefined;
        return res.json({
          success: 1,
          data: results
        });
      });
    },
    getitems: (req, res) => {
      getitems((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          data: results
        });
      });
    },
    updateItems: (req, res) => {
      // const body = req.body;
      // const salt = genSaltSync(10);
      // body.password = hashSync(body.password, salt);
      updateItem(req.body, (err, results) => {
        if (err) {
          console.log("error:");
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          message: "updated successfully"
        });
      });
    },
    deleteitem: (req, res) => {
      const data = req.body;
      deleteitem(data, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (results['affectedRows']==0) {
          return res.json({
            success: 0,
            message: "Record Not Found"
          });
        }
        return res.json({
          success: 1,
          message: "item deleted successfully"
        });
      });
    }
  };