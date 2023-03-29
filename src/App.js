import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';

import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseItem from './components/ExpenseItem';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='col-sm'>
                    <Budget />
                </div>   
                <div className='col-sm'>
                    <Remaining />
                </div>       
                <div className='col-sm'>
                    <ExpenseTotal />
                </div>       
                <div className='col-sm'>
                    <ExpenseItem />
                </div>      

                        {/* Add ExpenseItem component here under */}        

                        {/* Add AllocationForm component here under */}        

            </div>
        </AppProvider>
    );
};

export default App;
