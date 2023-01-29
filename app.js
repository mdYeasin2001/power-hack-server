const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/userRoutes");

const app = express();

app.use(express.json());
app.use(cookieParser());

// CORS MIDDLEWARE
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use("/api/v1/users", userRouter);

module.exports = app;
