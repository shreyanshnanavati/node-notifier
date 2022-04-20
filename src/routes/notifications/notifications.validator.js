const { body } = require("express-validator");

const notificationSendSchema = [
  body("channel", "The channel field is invalid").isIn(["SLACK", "EMAIL"]),
  body("data", "The data field is require").notEmpty(),
  body("data.name", "The name field is require").notEmpty(),
  body("data.to", "The to field is require").notEmpty(),
  body("data.text", "The text field is require").notEmpty(),
  body("data.subject", "The subject field is require").notEmpty(),
];

module.exports = {
  notificationSendSchema,
};
