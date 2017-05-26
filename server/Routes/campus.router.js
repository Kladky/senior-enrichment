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
        if(campuses) res.json(campuses);
        else next(new Error("Problem in get /api/campuses/"));
    })
    .catch(next);
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
        if(campus) res.json(campus);
        else next(new Error("Problem in get /api/campuses/campusId"));
    })
    .catch(next);
})

router.put('/:campusId', function (req, res, next) {
    Campus.findOne({
        where: { id: req.params.campusId },
        include: [Student]
    })
    .then(campus => {
        if(campus) return campus.update(req.body)
        else next(new Error("Problem in put /api/campuses/campusId"));
    })
    .then((campus) => {
        res.json(campus);
    })
    .catch(next);
})

router.delete('/:campusId', function (req, res, next) {
    Campus.findById(req.params.campusId)
    .then(campus => {
        if(campus) {
            campus.destroy()
            .then(() => res.status(204).send())
        } else next(new Error("Problem in delete /api/campuses/campusId"));
    })
    .catch(next);
})

module.exports = router;