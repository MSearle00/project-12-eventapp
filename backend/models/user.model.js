const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    username:{
        type: String,
        required:true,
        unqiue: true,
        trim: true,
        minlength: 4,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
    }
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;