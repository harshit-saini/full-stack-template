if (process.env.DATABASE === "mongodb" || process.env.DATABASE === "undefined") {
  const connectDB = require("./mongoDB_config")
}

module.exports = connectDB