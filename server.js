const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config"); //MongoDB URL .env file

app.use(cors());
app.use(bodyParser.json());

//Import Routes
const salesRoute = require("./routes/sales");
const countRoute = require("./routes/count");

//Middleware
app.use("/sales", salesRoute);
app.use("/count", countRoute);

app.get("/", (req, res) => {
  res.send("We are on Retail App Server.");
});

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    const PORT = process.env.PORT || 5000;

    const server = app.listen(PORT, function () {
      const host = server.address().address;
      const port = server.address().port;

      console.log("App listening at http://%s:%s", host, port);
    });
  }
);

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));

//app.listen(3000);
