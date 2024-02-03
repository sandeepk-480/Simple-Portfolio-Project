import express from 'express'
import router from './routes/web.js'
const app = express()
const port = process.env.PORT || '3000' 

// Set Template Engine
app.set('view engine', 'ejs')

// Static Files
app.use(express.static('public'))

// Load Routes
app.use('/', router)

app.listen(port, ()=>{
    console.log(`Server Listening at http://localhost:${port}`)
})