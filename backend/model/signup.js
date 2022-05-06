const mongo = require('mongoose');

const signup = new mongo.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userRole: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
},
    {timestamps:true
});

const userDetails = mongo.model("signupForm",signup);

module.exports = userDetails;