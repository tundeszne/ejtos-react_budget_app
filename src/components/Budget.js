import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);

    const initialBudget = budget;
    const [newBudget, setNewBudget] = useState(initialBudget);

    const submitNewBudget = () => {
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    }
    
    return (
        <div className='alert alert-secondary'>
            <form onSubmit={submitNewBudget}>
                Budget: {currency}{budget}
                <input
                    type='number'
                    id='newBudget'
                    value={newBudget}
                    style={{ marginLeft: '0rem' , size: 10}}
                    onChange={(event) => setNewBudget(event.target.value)}
                    >
                </input>
            </form>
        </div>
    );
};

export default Budget;