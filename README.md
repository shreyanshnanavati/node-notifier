# Node Notifier - Notification Service

This project helps you schedule notifications through various mediums for your subscribers.

## Installation

- Clone the project
- Install node packages using npm i
- make sure to copy .env.example and add the respective keys from the notification providers
- run the project using npm run dev

## How to use the API?

```js
var axios = require('axios');
var data = JSON.stringify({
  "channel": "SLACK",
  "data": {
    "name": "Shreyansh",
    "subject": "HELLO FROM WORLD TWO",
    "to": "Shreyanshnanavati@mailinator.com",
    "text": "Hello world"
  }
});

var config = {
  method: 'post',
  url: 'http://localhost:8006/notifications/send',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```
- **URL**
     
    `/notifications/send`
- **METHOD**

    `POST`
- **DATA PARAMS**
    
    #### Required
    - `channel=[STRING | EMAIL or SLACK]`
    
    - `data=[OBJECT]` Payload depending on the type of provider
  

## Things to Know

- Routes folder contains the `Router` and `Controller` for notification and any future scope that needs Admin API.

- The core pattern used behind selecting the notification provider is `Strategy Pattern`
  
- `App.js` file has the cron job that for now runs every minute to send notifications to subscribers on their subscribed channel.

- Providers folder houses all the third party notification providers. and provider.js file inside it binds them with the `notifier.js` Class.

## Want to add a new provider?

- Add a new folder with Medium name and write your custom code to use that service, you can check how email.js and slack.js are written
- Once written, register them inside provider.js by creating a new object with the class property set to the newly created Provider
