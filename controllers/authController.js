import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnauthenticatedError } from "../errors/index.js";

const register = async (req, res) => {
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
        throw new BadRequestError('please provide all values' );
    }

    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists) {
        throw new BadRequestError('Email already linked with an account')
    }

    const user = await User.create({ name, email, password });
    
	const token = user.createJWT();
    
	res.status(StatusCodes.CREATED).json({ 
		user: {
			email: user.email, 
			lastName: user.lastName, 
			location: user.location, 
			name: user.name
		}, 
		token,
		location: user.location, 
	});
}

const login = async (req,res) => {
    const { email, password } = req.body;
	if (!email || !password) {
		throw new BadRequestError('Please provide all values');
	}
	//the .select(+password) is because in the User model we set password select: false so that the password won't be exposed during api calls. Unfortunately this also means for our login we cannot reach it unless we override using .select(+password)
	const user = await User.findOne({email}).select('+password');
	if (!user) {
		throw new UnauthenticatedError('Invalid Credentials');
	} 
	console.log(user);

	const isPasswordCorrect = await user.comparePassword(password);
	if (!isPasswordCorrect) {
		throw new UnauthenticatedError('Invalid Credentials');
	}
	
	const token = user.createJWT();
	user.password = undefined;
	res.status(StatusCodes.OK).json({ user, token, location: user.location});
	res.send('login user');
}

const updateUser = async (req,res) => {
    res.send('updateUser');
    User.findOneAndUpdate
}

export { register, login, updateUser }