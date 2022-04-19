const { providers } = require("./providers/providers");

class Notifier {
  trigger(payload) {
    try {
      let notificationProvider = this.getNotificationProvider(payload.channel);
      notificationProvider.send(payload.data);
    } catch (error) {
      throw error;
    }
  }

  getNotificationProvider(channel) {
    let provider = providers[channel];
    return new provider["class"](provider["config"]);
  }
}

module.exports = Notifier;
