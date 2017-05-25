'use strict'
const router = require('express').Router();
const models = require('../../db/models');
const Campus = models.Campus;
const Student = models.Student;

router.get('/', function (req, res, next) {
    Campus.findAll({
        include: [Student]
    })
    .then((campuses) => {
        res.json(campuses);
    })
})

router.post('/', function (req, res, next) {
    Campus.create(req.body)
    .then(campus => res.status(201).json(campus))
    .catch(next);
})

router.get('/:campusId', function (req, res, next) {
    Campus.findOne({
        where: { id: req.params.campusId },
        include: [Student]
    })
    .then((campus) => {
        res.json(campus);
    })
})

// router.put('/:campusId', function (req, res, next) {
//     Campus.findById(req.params.campusId)
//     .then(campus => {
//         if(campus) {
//             campus.destroy()
//             .then(() => res.status(204).send())
//         } else res.status(404).send();
//     })
//     .catch(next);
// })

router.delete('/:campusId', function (req, res, next) {
    Campus.findById(req.params.campusId)
    .then(campus => {
        if(campus) {
            campus.destroy()
            .then(() => res.status(204).send())
        } else res.status(404).send();
    })
    .catch(next);
})

module.exports = router;