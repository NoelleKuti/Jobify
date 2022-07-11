import { initialState } from './appContext'
import { DISPLAY_ALERT, CLEAR_ALERT, REGISTER_USER_BEGIN, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from './actions'

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
			
		}
	}
    throw new Error(`no such action : ${action.type}`);
}

export default reducer