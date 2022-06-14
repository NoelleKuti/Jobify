import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const UserSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, 'Please provide name'], minLength:3, 
        maxLength: 20,
        //trim takes whitespace off of each end
        trim: true,
    },
    email: { 
        type: String,
        required: [true, 'Please provide email'], 
        //ensures someone cannot sign up with a username that already exists. NOT technically a validator.
        validate: {
            validator: validator.isEmail,
            message: 'Please provide a valid email'
        },
        unique: true,
    },
    password: { 
        type: String,
        required: [true, 'Please provide password'], 
        minLength: 6, 
        select: false,
    },
    lastName: { 
        type: String,
        minLength:3, 
        maxLength: 20,
        trim: true,
        default: 'last name'
    },
    location: {
        type: String,
        trim: true,
        maxLength: 20,
        default: 'my city',
    },
});

UserSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

UserSchema.methods.createJWT = function () {
    return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME, });
}

export default mongoose.model('User', UserSchema);