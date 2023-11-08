import adminController from '../controllers/adminController.js'
import express from 'express'

const adminRouter = express.Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
adminRouter.get('/', adminController.getAdmins)
// adminRouter.post('/', adminController.postAdmins)

export default adminRouter
