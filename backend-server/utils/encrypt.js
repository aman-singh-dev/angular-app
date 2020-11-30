const bcrypt = require('bcrypt');
const saltRounds = 12;
const encrypt = (password, callback) => {
    bcrypt.hash(password, saltRounds, function(err, hash) {
        const password = hash;
        callback(password);
    });
}

module.exports = encrypt;