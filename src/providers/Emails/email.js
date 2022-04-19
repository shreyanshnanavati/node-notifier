const nodemailer = require("nodemailer");

class Email {
  constructor(config) {
    this.mailEngine = nodemailer.createTransport(config);
  }

  async send(request) {
    try {
      const result = await this.mailEngine.sendMail(request);
      return result.messageId;
    } catch (error) {
      // @todo retry logic comes here
    }
  }
}

module.exports = Email;
