const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const apiRoutes = require("./src/router/hospital-routes.js");
const { DB_CONNECTION, PORT } = require("./config.js");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/", apiRoutes);
const loadApp = async () => {
  try {
    await mongoose.connect(DB_CONNECTION);

    app.listen(PORT);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

loadApp();
