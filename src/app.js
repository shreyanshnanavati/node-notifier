const express = require("express");
const schedule = require("node-schedule");
require("dotenv").config();

const Notifier = require("./notifier");
const scheduleRouter = require("./routes/schedule/schedule.router");
const notificationRouter = require("./routes/notifications/notifications.router");
const { subscribers } = require("./models/subscribers.model");

const app = express();

app.use(express.json());

app.use("/schedule", scheduleRouter);
app.use("/notifications", notificationRouter);

const job = schedule.scheduleJob("* * * * *", function () {
  (function main() {
    let notifier = new Notifier();
    for (const subscriber of subscribers) {
      notifier.trigger(subscriber.subscribed_channel);
    }
  })();
  console.log("process");
});

module.exports = app;
