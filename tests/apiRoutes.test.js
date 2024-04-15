import express from "express"
import mongoose from "mongoose"
import request from "supertest"
import apiRoutes from "../routes/apiRoutes.js"
import Stats from "../models/data.js"

const app = express();
app.use(express.json()); // Add any middleware your app might need
app.use('/api', apiRoutes) // Mount the router at /api

/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.dbURI='')// input the db link from MongoDB in ''
})


describe("Testing API Routes", () => {
  test("GET /api/duomenys", async () => {
    const res = await request(app).get("/api/duomenys")
    expect(res.statusCode).toBe(200)
    expect(res.body.length).toBeGreaterThan(0)
    // console.log(res.body)
    // Full data of the database was received
  })

  //Data Posted Successfully
  test("POST /api/duomenys", async () => {
    const postData = {
      "tag": "Jest Test",
      "count": 59330,
      "revenueAverage": 2220000,
      "revenueMedian": 690,
      "earningSplit": {
        "To5k": 0.74,
        "To25k": 0.13,
        "To100k": 0.07,
        "To1mil": 0.05,
        "Over1mil": 0.02
      }
    }
    const res = await request(app)
      .post("/api/duomenys")
      .send(postData)
    expect(res.statusCode).toBe(201)
  })

  //Additional data structure didn't appear with the same tag or any at all.
  test("POST duplicate tag /api/duomenys", async () => {
    const postData = {
      "tag": "Test",
      "count": 59330,
      "revenueAverage": 2220000,
      "revenueMedian": 690,
      "earningSplit": {
        "To5k": 0.74,
        "To25k": 0.13,
        "To100k": 0.07,
        "To1mil": 0.05,
        "Over1mil": 0.02
      }
    }
    const res = await request(app)
      .post("/api/duomenys")
      .send(postData)
    expect(res.statusCode).toBe(400)
  })

  // The provided data was updated correctly
  test("PUT  /api/duomenys", async () => {
    const updateData = {
      "tag": "Test",
      "count": 59330,
      "revenueAverage": 222, // Update value
      "revenueMedian": 690,
      "earningSplit": {
        "To5k": 0.74,
        "To25k": 0.13,
        "To100k": 0.07,
        "To1mil": 0.05,
        "Over1mil": 0.02
      }
    }
    const res = await request(app)
      .put("/api/duomenys/661ceff523996ff93f00fd75")
      .send(updateData)
    expect(res.statusCode).toBe(200)
  })

  // Item was deleted successfully
  // test("DELETE  /api/duomenys", async () => {
  //   const res = await request(app)
  //     .delete("/api/duomenys/661d03147b5edaf9bff76256")
  //   expect(res.statusCode).toBe(200)
  // })

  // Successfull addition and deletion
  test("POST and DELETE /api/duomenys", async () => {
    const postData = {
        "tag": "Test Add Delete",
        "count": 59330,
        "revenueAverage": 222,
        "revenueMedian": 690,
        "earningSplit": {
            "To5k": 0.74,
            "To25k": 0.13,
            "To100k": 0.07,
            "To1mil": 0.05,
            "Over1mil": 0.02
        }
    }
    const res = await request(app)
        .post("/api/duomenys")
        .send(postData);

    expect(res.statusCode).toBe(201)

    const postedItem = await Stats.findOne({ tag: "Test" })

    expect(postedItem).toBeDefined()

    const deleteResponse = await request(app).delete(`/api/duomenys/${postedItem._id}`);

    expect(deleteResponse.statusCode).toBe(200)
  })
})

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close()
})
