import {app} from "./app.js"
import mongoose from 'mongoose'
// Seperetated the server from app.js

const dbURI = '' // input the db link from MongoDB Here

mongoose.connect(dbURI)
    .then(result => app.listen(3000))
    .catch(err => console.log(err))
