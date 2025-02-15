import React, { useContext, useEffect } from "react";
import './App.css';

import { Header } from "./componant/Header";
import { Balance } from "./componant/Balance";
import { IncomeEpences } from "./componant/IncomeEpences";
import { TransactionList } from "./componant/TransactionList";
import { AddTransaction } from "./componant/AddTransaction";
import {GlobalContext, GlobalProvider} from "./context/GlobalStat";

function App() {
    const { transactions, setTransactions } = useContext(GlobalContext);
//--------------------------------------------------------------------------------------------------
    // Charger les transactions depuis localStorage lors de l'initialisation
    useEffect(() => {
        const storedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
        setTransactions(storedTransactions);
    }, [setTransactions]);

    // Sauvegarder les transactions dans localStorage à chaque modification
    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions));
    }, [transactions]);

    return (
        <GlobalProvider>
            <Header />
            <div className="container">
                <Balance />
                <IncomeEpences />
                <TransactionList />
                <AddTransaction />
            </div>
        </GlobalProvider>
    );
}

export default App;