const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const helmet = require('helmet');
const app = express();
const sendData = require("./userController");
const UserContact = require("./ValidationInput/Inputvalid");
const corsOptions = {
  origin: "https://techacity.in", // allow only this domain
  methods: ["GET", "POST", "PUT", "DELETE"], // allowed methods
  credentials: true, // if you need cookies, Authorization headers, etc.
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(helmet());

// connect mongodb----------
mongoose
  .connect(
    "mongodb+srv://susantamaji2020:L3QqwrdRMSDvS3hd@cluster0.ihmss7i.mongodb.net/",
    { dbName: "lktech" }
  )
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// const User = require("./model/userModel");

// Contact API
// app.post("/contact",sendData);
app.use("/contact",sendData);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("🚀 Server is running on port 8080");
});
