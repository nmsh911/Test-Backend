const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./db");
const userRouter = require("./routes/user");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res) => {
  res.json({message: "I love you"})
})

app.use("/api/user", userRouter);

app.listen(8080, () => {
  console.log("the port is listening on port 8080");
});