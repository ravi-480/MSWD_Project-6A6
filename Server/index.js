const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const productRoute = require("./routes/product");
// const cartRoute = require("./routes/cart");
const cartRoutes = require("./routes/cartRoutes");
const authRoutes = require("./routes/authRouts");
const addressRoutes = require("./routes/addressRoute");
const wishlistRoutes = require("./routes/wishlistRouts");
const reviewRoutes = require("./routes/reviewRoute");
const protectedRoute = require("./routes/protected");
const userRoutes = require("./routes/userRoute");
const categoryRoutes = require("./routes/categoryRoute");
const paymentRoutes = require("./routes/payments.js");
const ordersRoutes = require("./routes/orderRoutes");
const brantRoutes = require("./routes/BrandRoutes");
const cors = require("cors");

const app = express();
const PORT = 8080;

dotenv.config();



// enable cors
app.use(cors());
app.options("*", cors());

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Successfully connected to Data Base");
  })
  .catch((err) => console.log(err?.message));

app.use(express.json());
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/review", reviewRoutes);
app.use("/api/protected", protectedRoute);
app.use("/api/user", userRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/order", ordersRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/brand", brantRoutes);

app.listen(process.env.PORT, () => {
  console.log("server is running on Port :", process.env.PORT);
});
