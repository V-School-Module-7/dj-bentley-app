const express = require("express")
const infoRouter = express.Router()
const MixList = require("../models/mixListSchema")
const Perform = require("../models/performSchema")
const Text = require("../models/textSchema")

//unprotected route to get all of the information for those not logged in

//TEXT
infoRouter.get('/text', (req, res, next) => {
    Text.find((err, text) => {
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