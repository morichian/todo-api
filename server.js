const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./databases/db");
const router = require("./routes/routes");
const app = express();

connectDB();

const corsOptions = {
  origin: "https://todo-client-navy.vercel.app",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/todos", router);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server has been connected on ${PORT}`);
});
