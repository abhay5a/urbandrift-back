const mongoose = require("mongoose");
require('dotenv').config()

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


function connectDB(){

    mongoose.connect(`mongodb+srv://nittusharma6789:nittu6789@cluster0.nymjeki.mongodb.net/` , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull!')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose