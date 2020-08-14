const express = require("express")
const infoRouter = express.Router()
const MixList = require("../models/mixListSchema")
const Perform = require("../models/performSchema")
const About = require("../models/aboutSchema")

//unprotected route to get all of the information for those not logged in

//ABOUT
infoRouter.get('/about', (req, res, next) => {
    About.find((err, text) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(text)
    })
})

//MIXLIST
infoRouter.get('/mix', (req, res, next) => {
    MixList.find((err, mix) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(mix)
    })
})

//PERFORMED
infoRouter.get('/perform', (req, res, next) => {
    Perform.find((err, perform) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(perform)
    })
})

module.exports = infoRouter