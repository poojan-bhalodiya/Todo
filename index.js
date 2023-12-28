const express = require("express");
const PORT = 8000;
const app = express();
const router = require("./routes/router");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

//env file configration
dotenv.config();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//use router
app.use(router);

//check monodb connection
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});
