import React, { useContext } from 'react';
import './Currency.css';

import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);

    const changeCurrency = (currencyValue)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currencyValue,
        })
    };
    
    return (
        <div className='dropdown'>
            <button className="btn dropdown-toggle" type="button" data-toggle="dropdown" id='dropDownCurrency' aria-haspopup="true" aria-expanded="false">Currency&nbsp;({currency === "$" ? "$ Dollar" : currency === "£" ? "£ Pound" : currency === "€" ? "€ Euro" : "₹ Ruppee"})
            </button>
            <div className='dropdown-menu' aria-labelledby="dropDownCurrency">
                <button className='dropdown-item' onClick={event => changeCurrency('$')}>$ Dollar</button>
                <button className='dropdown-item' onClick={event => changeCurrency('£')}>£ Pound</button>
                <button className='dropdown-item' onClick={event => changeCurrency('€')}>€ Euro</button>
                <button className='dropdown-item' onClick={event => changeCurrency('₹')}>₹ Ruppee</button>
            </div>
        </div>
    );
};

export default Currency;