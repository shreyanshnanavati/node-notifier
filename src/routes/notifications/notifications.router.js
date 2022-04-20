const express = require("express");

const { httpSendNotification } = require("./notifications.controller");
const { validate } = require("../../validate");
const { notificationSendSchema } = require("./notifications.validator");

const notificationRouter = express.Router();

notificationRouter.post(
  "/send",
  validate(notificationSendSchema),
  httpSendNotification
);

module.exports = notificationRouter;
