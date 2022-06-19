require("dotenv").config();
const transportConfig = {
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
};

module.exports = transportConfig;
