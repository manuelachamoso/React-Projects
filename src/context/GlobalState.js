import React, {createContext, useReducer} from 'react';
import 


const initialState = {
    transactions: [
        {id: 1, text: "Book", amount: -20},
        {id: 2, text: "Supermarket", amount: -70},
        {id: 3, text: "Salary", amount: 1000},
        {id: 4, text: "Camera", amount: -500}
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value= {{
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>)
}