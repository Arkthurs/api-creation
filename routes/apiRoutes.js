import express from "express"
import * as controller from '../controllers/controller.js'

const router = express.Router()

router.get('/duomenys', controller.data_get)
router.get('/duomenys/:id', controller.data_get_single)
router.post('/duomenys', controller.data_post)
router.put('/duomenys/:id', controller.data_put)
router.delete('/duomenys/:id', controller.data_delete)

export default router