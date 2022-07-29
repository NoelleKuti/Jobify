import { initialState } from './appContext'
import { DISPLAY_ALERT, CLEAR_ALERT, REGISTER_USER_BEGIN, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR, LOGIN_USER_BEGIN, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from './actions'

const reducer = (state, action) => {
    
    if (action.type === DISPLAY_ALERT) {
        return {
            ...state, 
            showAlert: true,
            alertType: 'danger',
            alertText: 'Please provide all values!'
        }
    }

    if (action.type === CLEAR_ALERT) {
        return {
            ...state,
            showAlert: false,
            alertType: '',
            alertText: '',
        }
    }

	if (action.type === REGISTER_USER_BEGIN) {
		return {
			...state,
			isLoading: true,
		}
	}

	if (action.type === REGISTER_USER_SUCCESS) {
		const { token, user, location, userLocation, } = action.payload;

		return {
			...state,
			isLoading: false,
			token: token,
			user: user,
			location: location,
			userLocation: location,
			showAlert: true,
			alertType: 'success',
			alertText: 'User Created! Redirecting...'
		}
	}

	if (action.type === REGISTER_USER_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: 'danger',
			alertText: action.payload.msg,
		}
	}
	if (action.type === LOGIN_USER_BEGIN) {
		return {
			...state,
			isLoading: true,
		}
	}
	if (action.type === LOGIN_USER_SUCCESS) {
		const { user, token, location } = action.payload;
		return {
			...state,
			displayAlert: true,
			alertType: 'success',
			alertText: 'User Successfully Logged In! Redirecting...',
			isLoading: false,
			user: user,
			jobLocation: location,
			userLocation: location,
			token: token,
		}
	}
	if (action.type === LOGIN_USER_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: 'danger',
			alertText: action.payload.msg,
		}
	}
    throw new Error(`no such action : ${action.type}`);
}

export default reducer