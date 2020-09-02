import React, { createContext, useReducer } from "react"
import GlobalReducer from "./GlobalReducer";

const initialTransactions = []
const GlobalContext = createContext(initialTransactions);
export default GlobalContext;

export const GlobalProvider = ({ children }) => {
    let [state, dispatch] = useReducer(GlobalReducer, initialTransactions);
    function addTransaction(trans) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                desc: trans.desc,
                amount: trans.amount
            }
        })
    }
    return (
        <GlobalContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}