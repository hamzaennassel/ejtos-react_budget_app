import React, { useContext, useState, useEffect } from 'react';
import { AppContext, UPDATE_BUDGET } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [showArrows, setShowArrows] = useState(false);

    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0); // Définir totalExpenses ici

    const handleBudgetChange = (event) => {
        const updatedBudget = parseInt(event.target.value, 10);

        if (updatedBudget < totalExpenses) {
            alert('Le budget ne peut pas être inférieur aux dépenses allouées.');
        } else {
            setNewBudget(updatedBudget);
            setShowArrows(true);
        }
    }

    const increaseBudget = () => {
        if (newBudget + 10 > totalExpenses) {
            console.error('Le budget ne peut pas être inférieur aux dépenses allouées.');
        } else {
            setNewBudget(newBudget + 10);
        }
    }

    const decreaseBudget = () => {
        if (newBudget >= 10) {
            setNewBudget(newBudget - 10);
        }
    }

    useEffect(() => {
        if (showArrows) {
            dispatch({
                type: UPDATE_BUDGET,
                payload: newBudget,
            });
            setShowArrows(false);
        }
    }, [showArrows, newBudget, dispatch]);

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            {showArrows && <span onClick={increaseBudget} style={{ cursor: 'pointer' }}>^</span>}
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
            {showArrows && <span onClick={decreaseBudget} style={{ cursor: 'pointer' }}>˅</span>}
        </div>
    );
};

export default Budget;
