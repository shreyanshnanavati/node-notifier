const schedule = require("node-schedule");
const subscribers = require("../../models/subscribers.model");

function httpScheduleNotification(req, res) {
  const job = schedule.scheduleJob("* * * * *", function () {
    console.log("The answer to life, the universe, and everything!");
  });
  return res.status(201).json({ success: "Sss" });
}

module.exports = {
  httpScheduleNotification,
};
