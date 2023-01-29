require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true); // по дефолту true, з 7 версії буде false
const router = require("./router/index");
const errorMiddleware = require("./middlewares/error-middleware");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors()); // щоб не виникало проблем при взаємодії сервера і браузера
app.use("/api", router);
app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
