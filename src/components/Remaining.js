import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { budget, expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
    const remaining = budget - totalExpenses;

    return (
        <div className={`alert ${remaining < 0 ? 'alert-danger' : 'alert-success'}`}>
            <span>Remaining: £{remaining}</span>
        </div>
    );
};

export default Remaining;
