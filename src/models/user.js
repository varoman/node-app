const mongoose = require('mongoose');

const pattern = /^[a-zA-Z ]+$/;
const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userSchema = mongoose.Schema({
    first_name: {type: String, required: true, match: pattern},
    last_name: {type: String, required: true, match: pattern},
    email: {type: String, required: true, match: emailPattern},
    street_address: {type: String, required: true},
    city: {type: String, required: true, match: pattern},
    country: {type: String, required: true, match: pattern}
}, { collection : 'customers' });

const user = mongoose.model('user', userSchema);

module.exports = user;