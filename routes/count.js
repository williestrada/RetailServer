const express = require("express");
const router = express.Router();
const Count = require("../models/Count");

//update
router.patch("/:countId", async (req, res) => {
  try {
    const getCount = await Count.updateOne(
      { RecordId: req.params.countId },
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
    res.json(getCount);
  } catch (err) {
    res.json({ message: err });
  }
});

//findAll
router.get("/", async (req, res) => {
  try {
    const getCount = await Count.find();
    res.json(getCount);
  } catch (err) {
    res.json({ message: err });
  }
});

//findOne or Count.findById()
router.get("/:countId", async (req, res) => {
  try {
    const getCount = await Count.findOne({ RecordId: req.params.countId });
    res.json(getCount);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete or Count.remove()
router.delete("/:countId", async (req, res) => {
  try {
    const deleteCount = await Count.deleteOne({ RecordId: req.params.countId });
    res.json(deleteCount);
  } catch (err) {
    res.json({ message: err });
  }
});

//add new Count
router.post("/", async (req, res) => {
  const addCount = new Count({
    RecordId: req.body.RecordId,
    OtherCde: req.body.OtherCde,
    Descript: req.body.Descript,
    Quantity: req.body.Quantity,
    ItemCode: req.body.ItemCode,
    Location: req.body.Location,
    ItemPrce: req.body.ItemPrce,
    DeviceId: req.body.DeviceId,
  });

  try {
    const saveCount = await addCount.save();
    res.json(saveCount);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
