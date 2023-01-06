const express = require("express")
const mongoose= require("mongoose")
const cors = require("cors")

const routes = require("./Routes/Routes")

require('dotenv').config()

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB)
.then(() => console.log(`MongoDB is connected..!`))
.catch((err) => console.log(err))

app.use(routes)

app.listen(port, () => console.log(`Listing on ${port}`))

