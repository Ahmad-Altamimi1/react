const express = require("express");
const https = require("https");
const fs = require("fs");
const app = express();
const path = require("path");

const privateKey = fs.readFileSync(__dirname + "/server.key", "utf8");
const certificate = fs.readFileSync(__dirname + "/server.cert", "utf8");

const credentials = { key: privateKey, cert: certificate };
const httpsServer = https.createServer(credentials, app);

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, "build")));

// Define a catch-all route to serve the React app
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

httpsServer.listen(3000, () => {
  console.log("HTTPS Server is running on port 3000");
});
