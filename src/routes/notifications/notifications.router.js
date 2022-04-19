const express = require("express");

const { httpSendNotification } = require("./notifications.controller");

const notificationRouter = express.Router();

notificationRouter.post("/send", httpSendNotification);

module.exports = notificationRouter;
