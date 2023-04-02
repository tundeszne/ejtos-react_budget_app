import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch, expenses } = useContext(AppContext);

    const initialBudget = budget;
    const [newBudget, setNewBudget] = useState(initialBudget);

    const submitNewBudget = (e) => {
        e.preventDefault();

        const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
        
        if (newBudget < totalExpenses) {
            alert("You cannot reduce the budget lower than the spending: " + currency + totalExpenses);
            newBudget=budget;
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    }
    
    return (
        <div className='alert alert-secondary' style={{padding: '0.5rem .7rem'}}>
            <form onSubmit={submitNewBudget}>
                <label htmlFor='newBudget'>Budget: {currency}</label>
                <input
                    type='number'
                    id='newBudget'
                    name='newBudget'
                    value={newBudget}
                    style={{ display: 'inline-block', maxWidth: '60%'}}
                    onChange={(event) => setNewBudget(event.target.value)}
                    >
                </input>
            </form>
        </div>
    );
};

export default Budget;