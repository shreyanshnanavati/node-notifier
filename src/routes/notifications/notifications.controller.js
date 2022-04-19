const { findSubscriber } = require("../../models/subscribers.model");
const Notifier = require("../../notifier");

function httpSendNotification(req, res) {
  let subscriberDetails = findSubscriber(1);
  let notifier = new Notifier();
  notifier.trigger(req.body);
  return res.status(201).json({ data: subscriberDetails });
}

module.exports = {
  httpSendNotification,
};
