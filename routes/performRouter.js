const express = require("express")
const performRouter = express.Router()
const Perform = require("../models/performSchema")

//get, post, put, delete

performRouter.get('/', (req, res, next) => {
    Perform.find((err, perform) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(perform)
    })
})

performRouter.get("/:_id", (req, res, next) => {
    Perform.find({ _id: req.params._id }, (err, perform) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(perform)
    })
})

performRouter.post('/', (req, res, next) => {
    const newPerform = new Perform(req.body)

    newPerform.save((err, newPerform) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(newPerform)
    })
})

performRouter.put("/:_id", (req, res, next) => {
    Perform.findByIdAndUpdate(
        {_id: req.params._id},
        req.body,
        { new: true },
        (err, perform) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(perform)
        }
    )
})

performRouter.delete("/:_id", (req, res, next) => {
    Perform.findByIdAndRemove({ _id: req.params._id }, (err, perform) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send("successfully deleted")
    })
})

module.exports = performRouter