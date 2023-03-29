import React, { useContext } from 'react';
import { AiFillPlusCircle, AiFillMinusCircle, AiFillCloseCircle } from 'react-icons/ai';
import { FiDelete } from 'react-icons/fi';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>£{props.cost}</td>
            <td><AiFillPlusCircle color='green' size='2em' onClick={handleDeleteExpense}></AiFillPlusCircle></td>
            <td><AiFillMinusCircle color='red' size='2em' onClick={handleDeleteExpense}></AiFillMinusCircle></td>
            <td><AiFillCloseCircle size='1.5em' onClick={handleDeleteExpense}></AiFillCloseCircle></td>
        </tr>
    );
};

export default ExpenseItem;