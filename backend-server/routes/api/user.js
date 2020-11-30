const express = require('express');
const cors = require('cors')
const router = express.Router();
const User = require('../../models/User');

const encrypt = require('../../utils/encrypt')


router.use(cors())


//api to add a new user

router.post("/", async(req, res) => {
    let user = new User(req.body)
    encrypt(user.password, (password) => {
        user.password = password;
        user.save((err) => {
            if (err) {
                return res.status(400).json({ message: 'Bad request.', error: err, status: 400 });
            }
            res.status(200).json({ message: 'success', status: 200 });
        });
    });
});



//api to get all active users

router.get("/", async(req, res) => {
    try {
        let users = await User.find({
            status: { '$ne': 'D' }
        }, ['-__v', '-password']).populate('role', '-__v').sort({ "created_on": -1 })
        res.status(200).json({ data: { users: users }, message: 'success', status: 200 })
    } catch (error) {
        return res.status(400).json({ message: 'No record found', status: 400 })
    }
})

//api to get a user by id

router.get("/:id", async(req, res) => {
    try {
        let user = await User.findOne({ _id: req.params.id }, ['-__v', '-password']).populate('role', '-__v')
        res.status(200).json({ data: { user: user }, message: 'success', status: 200 })
    } catch (error) {
        return res.status(400).json({ message: 'No record found', error: error, status: 400 })
    }

})

//api to update a user by id

router.put("/:id", async(req, res) => {
    const { name, email, mobile, role } = req.body

    const Fields = {}
    if (name) Fields.name = name
    if (email) Fields.email = email
    if (mobile) Fields.mobile = mobile
    if (role) Fields.role = role
    try {
        await User.findByIdAndUpdate({ _id: req.params.id }, { $set: Fields }, { new: true });
        res.status(200).json({ message: 'success', status: 200 });
    } catch (error) {
        return res.status(400).json({ message: 'No record updated', error: error, status: 400 });
    }
});

//api to delete a user by id
router.delete("/:id", async(req, res) => {
    const filter = { _id: req.params.id, status: 'A' }
    const update = { status: 'D' }
    try {
        await User.findByIdAndUpdate(filter, update, { new: true })
        res.status(200).json({ message: 'success', status: 200 })
    } catch (error) {
        return res.status(400).json({ message: 'No record deleted', error: error, status: 400 })
    }
})

module.exports = router