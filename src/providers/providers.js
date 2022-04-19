const email = require("./Emails/email");
const slack = require("./Slack/slack");

const providers = {
  EMAIL: {
    class: email,
    config: {
      host: process.env.MAILTRAP_HOST,
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    },
  },
  SLACK: {
    class: slack,
  },
};

module.exports = {
  providers,
};
