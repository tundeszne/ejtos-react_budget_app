import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {/* Add Budget component here under */}        

                        {/* Add Remaining component here under */}        

                        {/* Add ExpenseTotal component here under */}        
                       
                        {/* Add ExpenseList component here under */}         

                        {/* Add ExpenseItem component here under */}        

                        {/* Add AllocationForm component here under */}        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
