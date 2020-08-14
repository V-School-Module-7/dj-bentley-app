const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const expressJwt = require("express-jwt")
const PORT = process.env.PORT || 7000
require("dotenv").config()

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect('mongodb+srv://apseaman0:Coron%4012@cluster0-k9haj.mongodb.net/DJBentley' ||"mongodb://localhost:27017/bentleydb", 
    {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true

    }, () => console.log('Connected to DB.'))

// Routes
app.use("/auth", require("./routes/authRouter"))
app.use("/api", expressJwt({ secret: process.env.SECRET }))
app.use("/info", require("./routes/infoRouter"))
app.use("/api/editmix", require("./routes/mixRouter"))
app.use("/api/perform", require("./routes/performRouter"))
app.use("/api/about", require("./routes/aboutRouter"))
app.use("/api/text", require("./routes/textRouter"))


// Err handler
app.use((err, req, res, next) => {
    console.log(err)
    if (err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({ errMsg: err.message })
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))