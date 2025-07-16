const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Method to find a user by username
userSchema.statics.findByUsername = function(username) {
    return this.findOne({ username });
};

// Method to find a user by email
userSchema.statics.findByEmail = function(email) {
    return this.findOne({ email });
};

// Method to create a new user
userSchema.statics.createUser = function(userData) {
    const user = new this(userData);
    return user.save();
};

const User = mongoose.model('User', userSchema);

module.exports = User;