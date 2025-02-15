import React, {useContext} from "react";
import {GlobalContext, GlobalProvider} from "../context/GlobalStat";

export const AddTransaction = () => {
    const [text, setText] = React.useState("");
    const [amount, setAmount] = React.useState(0);
    const {addTransaction} = useContext(GlobalContext);

    const onSubmit= e=> {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: parseInt(amount),
        }
        addTransaction(newTransaction);
        setAmount(0);
        setText('')
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br/>
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..."/>
                </div>

                <button className="btn" >Add transaction</button>
            </form>
        </>
    )
}