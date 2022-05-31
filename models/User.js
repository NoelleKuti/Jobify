import mongoose from 'mongoose'

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
        unique: true,
    },
    password: { 
        type: String,
        required: [true, 'Please provide password'], 
        minLength:6, 
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

export default mongoose.model('User', UserSchema);