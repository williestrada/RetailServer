const express = require("express");
const router = express.Router();
const Sales = require("../models/Sales");

//update
router.patch("/:salesId", async (req, res) => {
  try {
    const getSales = await Sales.updateOne(
      { RecordId: req.params.salesId },
      {
        $set: {
          Date____: req.body.Date____,
          OtherCde: req.body.OtherCde,
          Descript: req.body.Descript,
          Quantity: req.body.Quantity,
          ItemCode: req.body.ItemCode,
          ItemPrce: req.body.ItemPrce,
        },
      }
    );
    res.json(getSales);
  } catch (err) {
    res.json({ message: err });
  }
});

//findAll
router.get("/", async (req, res) => {
  try {
    const getSales = await Sales.find();
    res.json(getSales);
  } catch (err) {
    res.json({ message: err });
  }
});

//findOne or Sales.findById()
router.get("/:salesId", async (req, res) => {
  try {
    const getSales = await Sales.findOne({ RecordId: req.params.salesId });
    res.json(getSales);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete or Sales.remove()
router.delete("/:salesId", async (req, res) => {
  try {
    const deleteSales = await Sales.deleteOne({ RecordId: req.params.salesId });
    res.json(deleteSales);
  } catch (err) {
    res.json({ message: err });
  }
});

//add new sales
router.post("/", async (req, res) => {
  const addSales = new Sales({
    Date____: req.body.Date____,
    RecordId: req.body.RecordId,
    OtherCde: req.body.OtherCde,
    Descript: req.body.Descript,
    Quantity: req.body.Quantity,
    ItemCode: req.body.ItemCode,
    Location: req.body.Location,
    ItemPrce: req.body.ItemPrce,
    DeviceId: req.body.DeviceId,
    UserName: req.body.UserName,
  });

  try {
    const saveSales = await addSales.save();
    res.json(saveSales);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
