const express = require("express")
const mixRouter = express.Router()
const MixList = require("../models/mixListSchema")

//get, post, put, delete
mixRouter.get('/', (req, res, next) => {
    MixList.find((err, mix) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(mix)
    })
})

mixRouter.get("/:_id", (req, res, next) => {
    MixList.find({ _id: req.params._id }, (err, mix) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(mix)
    })
})

mixRouter.post('/', (req, res, next) => {
    const newMix = new MixList(req.body)

    newMix.save((err, newMix) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(newMix)
    })
})

mixRouter.put("/:_id", (req, res, next) => {
    MixList.findByIdAndUpdate(
        {_id: req.params._id},
        req.body,
        { new: true },
        (err, mix) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(mix)
        }
    )
})

mixRouter.delete("/:_id", (req, res, next) => {
    MixList.findByIdAndRemove({ _id: req.params._id }, (err, mix) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send("successfully deleted")
    })
})

module.exports = mixRouter