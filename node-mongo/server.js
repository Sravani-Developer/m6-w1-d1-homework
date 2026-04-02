require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dbUrl = `${process.env.URL}${process.env.DATABASE}`;

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log(`Connected to database ${process.env.DATABASE}.`);
  })
  .catch((error) => {
    console.error("Cannot connect to the database.", error);
    process.exit(1);
  });

require("./app/routes/inventory.router")(app);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
