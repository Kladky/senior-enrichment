'use strict'
const router = require('express').Router();
const models = require('../../db/models');
const Student = models.Student;
const Campus = models.Campus;

router.get('/', function (req, res, next) {
    Student.findAll({
        include: [Campus]
    })
    .then((students) => {
        res.json(students);
    })
    .catch(next);
})

router.post('/', function (req, res, next) {
    Campus.findById(req.body.campusId)
    .then(campus => {
        return Student.create({
            name: req.body.name,
            email:req.body.email,
            campusId: campus.id
        })
    })
    .then(student => res.status(201).json(student))
    .catch(next);
})

router.get('/:studentId', function (req, res, next) {
    Student.findById(req.params.studentId)
    .then((student) => {
        res.json(student);
    })
    .catch(next);
})

router.delete('/:studentId', function (req, res, next) {
    Student.findById(req.params.studentId)
    .then(student => {
        if(student) {
            student.destroy()
            .then(() => res.status(204).send())
        } else res.status(404).send();
    })
    .catch(next);
})

module.exports = router;