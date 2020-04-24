const express = require("express")
const textRouter = express.Router()
const Text = require("../models/textSchema")

textRouter.get('/', (req, res, next) => {
    Text.find((err, text) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(text)
    })
})

textRouter.get("/:_id", (req, res, next) => {
    Text.find({ _id: req.params._id }, (err, text) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(text)
    })
})

textRouter.post('/', (req, res, next) => {
    const newText = new Text(req.body)

    newText.save((err, newText) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(newText)
    })
})

textRouter.put("/:_id", (req, res, next) => {
    Text.findByIdAndUpdate(
        {_id: req.params._id},
        req.body,
        { new: true },
        (err, text) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(text)
        }
    )
})

textRouter.delete("/:_id", (req, res, next) => {
    Text.findByIdAndRemove({ _id: req.params._id }, (err, text) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send("successfully deleted")
    })
})

module.exports = textRouter