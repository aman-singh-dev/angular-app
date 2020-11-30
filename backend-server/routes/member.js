const express = require('express');
const router = express.Router();
router.get('/member-add', (req, res, next) => {
    res.send(
        '<form action="/member-details" method="POST">Name:&nbsp;<input type="text" name="name"><br><br>Address:&nbsp;<input type="text" name="address"><br><br>Phone:&nbsp;<input type="text" name="phone"><br><br>&nbsp;<button type="submit">Add</button></form> &nbsp;<script> function goBack(){window.open("/","_self")}</script><button onClick="goBack()">Back</button>'
    );
});

router.post('/member-details', (req, res, next) => {

    res.send( 
        '<b>Name:</b> ' + req.body.name + '<br>' + '<b>Address:</b> ' + req.body.address + '<br>' + '<b>Phone: </b>' + req.body.phone + '<br> <script> function goBack(){window.open("/member-add","_self")}</script><br><br><button onClick="goBack()">Back</button>'
    );

});

module.exports = router;