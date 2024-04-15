import mongoose from "mongoose"
import request from "supertest"
import app from "../app.js"

/* Connecting to the database before each test. */
beforeEach(async () => {
    await mongoose.connect(process.env.dbURI='') // input the db link from MongoDB in ''
})

describe("Test the root path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/")
        .expect(200);
    })
})

describe("Test the update path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/update/661c5ef3b4d87c4bf5354e4d")
        .expect(200)
    })
})

describe("Test the input path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/input")
        .expect(200)
    })
}
)
describe("Test the charts path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/charts/661c5ef3b4d87c4bf5354e4d")
        .expect(200)
    })
})

/* Closing database connection after each test. */
afterEach(async () => {
    await mongoose.connection.close()
})