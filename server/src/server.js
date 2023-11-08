import cors from 'cors'
import express from 'express'
// import path from 'path'
// import morgan from 'morgan'
// import session from 'express-session'
// import cookieParser from 'cookie-parser'
// import { fileURLToPath } from 'url'

/* Import routers */
import adminRouter from './routes/admin.js'
import teacherRouter from './routes/teacher.js'

const app = express()

// const session = require('express-session')
// const cors = require('cors')

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// const logger = morgan
const port = 3005 // process.env.PORT ||

// MIDDLEWARE
// app.use(logger('dev'))
app.use(cors())
// app.use(express.json()) // req.body
// app.use(express.urlencoded({ extended: false }))
// app.use(cookieParser())
// app.use(express.static(path.join(__dirname, 'public')))
// app.use(session({
//   secret: 'your-secret-key',
//   resave: false,
//   saveUninitialized: false
// }))

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  res.status(err.status || 500)
  res.render('error')
})

// app.post('/', (req, res) => {
//   res.send('Got a POST request')
// })

// app.put('/user', (req, res) => {
//   res.send('Got a PUT request at /user')
// })

// app.delete('/user', (req, res) => {
//   res.send('Got a DELETE request at /user')
// })

app.use('/admins', adminRouter)
app.use('/teachers', teacherRouter)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`)
})
