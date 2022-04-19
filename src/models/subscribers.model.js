const subscribers = [
  {
    user_id: 1,
    first_name: "Shreyansh",
    last_name: "Nanavati",
    email: "shreyanshnanavati@mailinator.com",
    subscribed_channel: {
      channel: "EMAIL",
      data: {
        subject: "HELLO FROM WORLD TWO",
        to: "shreyanshnanavati@mailinator.com",
        text: "Hello world",
      },
    },
  },
  {
    user_id: 2,
    first_name: "issac",
    last_name: "oscar",
    email: "oscarissac@mailinator.com",
    subscribed_channel: {
      channel: "SLACK",
      data: {
        name: "Oscar Issac",
        subject: "HELLO FROM WORLD TWO",
        to: "oscarissac@mailinator.com",
        text: "Hello world",
      },
    },
  },
];

function findSubscriber(userId) {
  let subscriber = subscribers.find(
    (subscriber) => subscriber.user_id === userId
  );
  return subscriber;
}

module.exports = {
  subscribers,
  findSubscriber,
};
