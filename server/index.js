const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { authRoute, authorization, requireLogin } = require("./routes/auth");
const todoRoute = require("./routes/todo");

const app = express();

dotenv.config();
app.use(express.json());
app.use(authorization);

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("mongo is running"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api", todoRoute);

app.listen(process.env.PORT, () => {
  console.log(`Backend is running as http://localhost:${process.env.PORT}`);
});
