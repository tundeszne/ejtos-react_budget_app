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
                <a className='dropdown-item' href='#' onClick={event => changeCurrency('$')}>$ Dollar</a>
                <a className='dropdown-item' href='#' onClick={event => changeCurrency('£')}>£ Pound</a>
                <a className='dropdown-item' href='#' onClick={event => changeCurrency('€')}>€ Euro</a>
                <a className='dropdown-item' href='#' onClick={event => changeCurrency('₹')}>₹ Ruppee</a>
            </div>
        </div>
    );
};

export default Currency;