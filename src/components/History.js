import React, { useContext } from 'react';
import GlobalContext from './GlobalContext';

export default function History() {
    let {transactions} = useContext(GlobalContext)
    return (
        <div>
            <h3>History</h3>
            <hr />
            <ul className="Transaction-history">
                {transactions.map((trans, id) => {
                    return(
                    <li key={id}>
                        <span>{trans.desc}</span>
                        <span>{trans.amount}</span>
                    </li>
                )})}
            </ul>
        </div>
    )
}