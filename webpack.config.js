const port = process.env.PORT || 8080;
const path = require("path");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "main.[fullhash]js",
  },
  module:{
    ruels:[
        {
            test: /\/(js|jsx)$/,
        }
    ]
  }
};
