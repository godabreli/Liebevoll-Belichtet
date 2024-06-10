const express = require("express");
const cors = require("cors");
const path = require("path");
const _dirname = path.dirname("");
const buildPath = path.join(__dirname, "../client/build");
const { sendEmail } = require("./Nodemailer");

require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(express.static(buildPath));

app.get("/*", (req, res) => {
  res.sendFile(
    path.join(-_dirname, "../client/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});

app.post("/sendemail", (req, res) => {
  sendEmail(req.body);
  // res.json({ status: "OK" });
});
