const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://hmehta051:Hmehta6_@cluster0.q3a58.mongodb.net/practo");
};
