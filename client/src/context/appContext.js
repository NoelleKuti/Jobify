import React, { useState, useReducer, useContext, createContext } from "react"
import reducer from "./reducer"
import { DISPLAY_ALERT } from "./actions"
import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers"

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
}

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const displayAlert = () => {
        dispatch({ type: DISPLAY_ALERT })
    }
    
    return (
        <AppContext.Provider 
            value={{ 
                ...state,
                displayAlert 
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