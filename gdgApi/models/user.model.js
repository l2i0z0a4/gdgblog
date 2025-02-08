const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    lienlinkedin: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
        speciality: {
            type: String,
            required: true
        },
        usertype:{
            type:String,
            enum:['admin','member','alumni'],
            required:false
        }
    });
const User = mongoose.model("user", userSchema);
module.exports = User;