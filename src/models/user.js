const mongoose = require('mongoose');

const pattern = /^[a-zA-Z ]+$/;

const userSchema = mongoose.Schema({
    first_name: {type: String, required: true, match: pattern},
    last_name: {type: String, required: true, match: pattern},
    street_address: {type: String, required: true},
    city: {type: String, required: true, match: pattern},
    state: {type: String, required: true, match: pattern},
    country: {type: String, required: true, match: pattern}
}, { collection : 'customers' });

const user = mongoose.model('user', userSchema);

module.exports = user;