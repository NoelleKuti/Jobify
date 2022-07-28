import React, { useState, useReducer, useContext, createContext } from "react"
import reducer from "./reducer"
import axios from 'axios'
import { CLEAR_ALERT, DISPLAY_ALERT, REGISTER_USER_BEGIN, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from "./actions"

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');
const userLocation = localStorage.getItem('location');

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
	user: user ? JSON.parse(user) : null,
	token: token,
	userLocation: userLocation || '',
	jobLocation: userLocation || '',
}

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const displayAlert = () => {
        // @ts-ignore
        dispatch({ 
            type: DISPLAY_ALERT 
        })
        clearAlert();
    }

    const clearAlert = () => {
        setTimeout(() => {
            // @ts-ignore
            dispatch({
                type: CLEAR_ALERT
            })
        }, 3000)
    }

	const addUserToLocalStorage = ({ user, token, location }) => {
		localStorage.setItem('user', JSON.stringify(user));
		localStorage.setItem('token', token);
		localStorage.setItem('location', location);
	}

	const removeUserFromLocalStorage = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		localStorage.removeItem('location');
	}

	const registerUser = async (currentUser) => {
		// @ts-ignore
		dispatch({ type: REGISTER_USER_BEGIN
		})
		try {
			const response = await axios.post('/api/v1/auth/register', currentUser);
			//console.log(response);
			
			const { user, token, location } = response.data 
			// @ts-ignore
			dispatch({
				type: REGISTER_USER_SUCCESS,
				payload: {
					user,
					token,
					location,
				},
			});
			addUserToLocalStorage({ user, token, location });
		} catch (error) {
			//console.log(error.response);
			// @ts-ignore 
			dispatch({
				type: REGISTER_USER_ERROR,
				payload: { msg: error.response.data.msg }
			})
		}
		clearAlert();
	}
    

    return (
        <AppContext.Provider 
            value={{ 
                ...state,
                displayAlert,
				clearAlert,
				registerUser, 
            }}
        >
            { children }
        </AppContext.Provider>
    )
}


const useAppContext = () => {
    return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }