const mongoose = require("mongoose");
const CountSchema = mongoose.Schema({
  Date____: { type: Date },
  RecordId: { type: String, required: true },
  OtherCde: { type: String, required: true },
  Descript: { type: String, required: true },
  Quantity: { type: Number, required: true },
  ItemCode: { type: String },
  Location: { type: String, required: true },
  ItemPrce: { type: Number },
  UserName: { type: String },
  DeviceId: { type: String, required: true },
});

module.exports = mongoose.model("CountDtl", CountSchema);
