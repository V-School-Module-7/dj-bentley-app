const express = require("express")
const aboutRouter = express.Router()
const About = require("../models/aboutSchema")

//get, post, put, delete
aboutRouter.get('/', (req, res, next) => {
    About.find((err, about) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(about)
    })
})

// aboutRouter.get("/:_id", (req, res, next) => {
//     About.find({ _id: req.params._id }, (err, about) => {
//         if (err) {
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(about)
//     })
// })

aboutRouter.post('/', (req, res, next) => {
    const newAbout = new About(req.body)

    newAbout.save((err, newAbout) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(newAbout)
    })
})

aboutRouter.put("/:_id", (req, res, next) => {
    About.findByIdAndUpdate(
        {_id: req.params._id},
        req.body,
        { new: true },
        (err, about) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(about)
        }
    )
})

aboutRouter.delete("/:_id", (req, res, next) => {
    About.findByIdAndRemove({ _id: req.params._id }, (err, mix) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send("successfully deleted")
    })
})

module.exports = aboutRouter