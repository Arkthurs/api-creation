import app from "./app.js"
import mongoose from 'mongoose'
// Seperetated the server from app.js

const dbURI = 'mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.jw0besa.mongodb.net/marketresearch' // input the db link from MongoDB Here

mongoose.connect(dbURI)
    .then(result => app.listen(3000))
    .catch(err => console.log(err))
    
