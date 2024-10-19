"use strict";
const serverless = require("serverless-http");
require('dotenv').config()
const app = require("./src/app")()


process.env.DEPLOYMENT
  ? (module.exports.app = serverless(app))
  : app.listen(3333, () => console.log("server running on port 3333"));
