import React, { useState, useContext } from 'react';
import GlobalContext from './GlobalContext';

export default function Transaction() {

    const [newDesc, setDesc] = useState("");
    const [newAmount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const handleAddition = (event) => {
        event.preventDefault();
        console.log(newDesc, newAmount);
        addTransaction({
            desc: newDesc,
            amount: Number(newAmount)
        })
    }


    return (
        <div>
            <h3>Add new Transaction</h3>
            <hr />
            <form className="Transaction-form" onSubmit={handleAddition}>
                <label>Text<br />
                    <input type='Text' placeholder="Enter Text" required
                        onChange={(event) => setDesc(event.target.value)} />
                </label>

                <p>(negative-expense,positive-income)</p>

                <label>Amount<br />
                    <input type='number' placeholder="Enter Amount" required
                        onChange={(event) => setAmount(event.target.value)} />
                </label>
                <br />
                <input type="submit" value="Add transaction" />
            </form>
        </div>
    )
}