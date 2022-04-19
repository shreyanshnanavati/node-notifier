const express = require("express");

const { httpScheduleNotification } = require("./schedule.controller");

const scheduleRouter = express.Router();

scheduleRouter.get("/", httpScheduleNotification);

module.exports = scheduleRouter;
