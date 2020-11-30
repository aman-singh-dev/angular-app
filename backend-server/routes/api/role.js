const express = require('express')
const cors = require('cors')
const router = express.Router();
const Role = require('../../models/Role')

router.use(cors())

//api to save a role
router.post("/", async(req, res) => {
    let role = new Role(req.body)
    role.save((err) => {
        if (err) {
            return res.status(400).json({ message: 'Bad request', error: err, status: 400 })
        }
        res.status(200).json({ message: 'success', status: 200 });
    });
});

//api to get all roles

router.get("/", async(req, res) => {
    try {
        let roles = await Role.find({}, ['-__v'])
        res.status(200).json({ data: { roles: roles }, message: 'success', status: 200 })
    } catch (error) {
        return res.status(400).json({ message: 'No record found', error: error, status: 400 })
    }
})


module.exports = router