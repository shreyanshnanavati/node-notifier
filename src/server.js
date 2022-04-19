const http = require("http");

const app = require("./app");

const PORT = 8006;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
