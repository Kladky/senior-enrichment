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
        if(students) res.json(students);
        else next(new Error("Problem in get /api/students/"));
    })
    .catch(next);
})

router.post('/', function (req, res, next) {
    Campus.findById(req.body.campusId)
    .then(campus => {
        if(campus) {
            return campus.createStudent({
                name: req.body.name,
                email:req.body.email,
                campusId: campus.id
            })
        } else next(new Error("Problem in post /api/students/"));
    })
    .then(student => res.status(201).json(student))
    .catch(next);
})

router.get('/:studentId', function (req, res, next) {
    Student.findOne({
        where: { id: req.params.studentId },
        include: [Campus]
    })
    .then((student) => {
        if(student) res.json(student);
        else next(new Error("Problem in get /api/students/studentId"));
    })
    .catch(next);
})

router.put('/:studentId', function (req, res, next) {
    Student.findOne({
        where: { id: req.params.studentId },
        include: [Campus]
    })
    .then(student => {
        if(student) {
            Campus.findById(req.body.campusId)
            .then(campus => campus.addStudent([student]))
            return student.update(req.body)
        } else next(new Error("Problem in put /api/students/studentId"));
    })
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
        } else next(new Error("Problem in delete /api/students/studentId"));
    })
    .catch(next);
})

module.exports = router;