require("dotenv").config();
console.log("APP_ID =", process.env.CASHFREE_APP_ID);
console.log("SECRET =", process.env.CASHFREE_SECRET_KEY?.substring(0, 10));
console.log({
  clientId: process.env.CASHFREE_APP_ID,
  secretPrefix: process.env.CASHFREE_SECRET_KEY.substring(0, 12),
  apiVersion: "2022-09-01",
});

const express = require("express");
const cors = require("cors");

const paymentRoutes = require("./routes/paymentRoutes");

const app = express();
const path = require("path");
app.use(express.static(__dirname));
app.use(cors());
app.use(express.json());

app.use("/api/payment", paymentRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port", process.env.PORT || 5000);
});
