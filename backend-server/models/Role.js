const mongoose = require('mongoose')

const RoleSchema = new mongoose.Schema({
    name: {
        type: String
    },

})
mongoose.pluralize(null)
module.exports = mongoose.model('role', RoleSchema)