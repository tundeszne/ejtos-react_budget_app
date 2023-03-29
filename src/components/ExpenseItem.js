import React, { useContext } from 'react';
import { AiFillPlusCircle, AiFillMinusCircle, AiFillCloseCircle } from 'react-icons/ai';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleIncreaseExpense = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'INC_EXPENSE',
            payload: expense,
        });
    };

    const handleDecreaseExpense = () => {
        dispatch({
            type: 'DEC_EXPENSE',
            payload: props.id,
        });
    };

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>£{props.cost}</td>
            <td><AiFillPlusCircle color='green' size='2em' onClick={handleIncreaseExpense}></AiFillPlusCircle></td>
            <td><AiFillMinusCircle color='red' size='2em' onClick={handleDeleteExpense}></AiFillMinusCircle></td>
            <td><AiFillCloseCircle size='1.5em' onClick={handleDeleteExpense}></AiFillCloseCircle></td>
        </tr>
    );
};

export default ExpenseItem;