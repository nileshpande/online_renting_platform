const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { createitem,
  getitemByitemId,
  getitems,
  updateItems,
  deleteitem
} = require("./r_item.controler");
router.get("/", checkToken, getitems);
router.post("/", checkToken, createitem);
router.get("/:id", checkToken, getitemByitemId);
router.patch("/", checkToken, updateItems);
router.delete("/", checkToken, deleteitem);

module.exports = router;