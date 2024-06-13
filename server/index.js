const express = require("express");
const cors = require("cors");
const { sendEmail } = require("./Nodemailer");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});

app.post("/api/sendemail", async (req, res) => {
  const status = await sendEmail(req.body);
  res.send({ status });
});

app.get("/", (req, res) => {
  res.send("Welcom to SERVER");
});
