import teacherController from '../controllers/teacherController.js'
import express from 'express'

const teacherRouter = express.Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
teacherRouter.get('/', teacherController.getTeachers)

export default teacherRouter
