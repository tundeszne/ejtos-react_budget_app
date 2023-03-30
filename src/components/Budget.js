import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                type='number'
                id='budget'
                value={budget}
                style={{ marginLeft: '0rem' , size: 10}}>
            </input>
        </div>
    );
};

export default Budget;