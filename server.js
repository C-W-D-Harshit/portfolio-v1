const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000; // Set the port for the server

app.prepare().then(() => {
  const server = express();

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server is running on port ${port}`);
  });
});
