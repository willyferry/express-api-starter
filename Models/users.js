const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    __v: false
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model("User", userSchema);