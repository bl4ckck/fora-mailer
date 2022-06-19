require("dotenv").config();
const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const cors = require("cors");
const config = require('./config/nodemailer');

/**
 * App setup
 */
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post("/sendmail", async (req, res) => {
  console.log(req.body)
  console.log("woy ", config.auth.pass);
  const transporter = nodemailer.createTransport(config);
  const { to, name, category, score } = req.body;
    
    try {
      await transporter.sendMail({
        from: `"Fora Team" <${config.auth.user}>`,
        to,
        subject: `Hasil Survey Fora - ${new Date().getTime()}`,
        html: `<h3>Hello, ${name}!</h3><br>
        Skor Survey: ${score}
        <br>
        Kategori: ${category}
        `,
      });
      res.send({
        status: "success",
      });
    } catch (error) {
      res.send({
        status: "error",
        error
      })
    }
});
  

module.exports = app;
