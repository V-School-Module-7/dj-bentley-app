const express = require('express')
const app = express()
require("dotenv").config()
const PORT = process.env.PORT || 7000
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb+srv://apseaman0:Coron%4012@cluster0-k9haj.mongodb.net/DJBentley',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => console.log(`Connected to DB.`))
    .catch(() => console.log(err))

// Routes
app.use("/auth", require("./routes/authRouter"))


// Err handler
app.use((err, res, next) => {
    console.log(err.message)
    if (err.name === "UnauthorizedError") {
        console.log("yo")
        res.status(err.status).send(err)
    }
    console.log("show this yo pls")
    return res.send({ errMsg: err.message })
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))