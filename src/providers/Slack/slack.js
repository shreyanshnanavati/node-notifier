const axios = require("axios");

class Slack {
  async send(request) {
    const url = "https://slack.com/api/chat.postMessage";
    const res = await axios.post(
      url,
      {
        channel: process.env.SLACK_CHANNEL,
        text: `Hello! ${request.name}`,
      },
      { headers: { authorization: `Bearer ${process.env.SLACK_TOKEN}` } }
    );

    console.log("Done", res.data);
    console.log("Sending Slack Message!");
  }
}

module.exports = Slack;
