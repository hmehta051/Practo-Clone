const mongoose=require("mongoose");
require('dotenv').config()

module.exports= async()=>{
    return mongoose.connect(`mongodb+srv://hmehta051:${process.env.PASSWORD}@cluster0.q3a58.mongodb.net/practo`)
}