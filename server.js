const express = require("express");
const routes = require("./routes");
const session = require('express-session');
const router = require('./auth');
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

// if (process.env.NODE_ENV === "production") { // this line identifies if we're in the production version of the app
app.use(express.static("./build"));
// } else {
// app.use(express.static("public"));
// }
app.use(express.static("./build"));

// ========= HEROKU BUILD =========

// If no API routes are hit, send the React app
app.use(function(req, res) {
  res.sendFile(path.join(__dirname, "./build/index.html"))
});


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
