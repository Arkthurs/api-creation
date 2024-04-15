import mongoose from "mongoose"

const Schema = mongoose.Schema

const GameSchema = new Schema({
    tag: {
        type: String,
        required: [true, `Prašome įrašyti tag'ą`],
        unique: true
    },
    count: {
        type: Number,
        default: 0
    },
    revenueAverage: {
        type: Number,
        default: 0
    },
    revenueMedian: {
        type: Number,
        default: 0
    },
    earningSplit: {
        To5k: {
            type: Number,
            require: true
        },
        To25k: {
            type: Number,
            require: true
        },
        To100k: {
            type: Number,
            require: true
        },
        To1mil: {
            type: Number,
            require: true
        },
        Over1mil: {
            type: Number,
            require: true
        }
    }
}, {versionKey: false})

const Stats = mongoose.model('sales', GameSchema)

export default Stats