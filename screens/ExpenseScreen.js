import React from 'react';
import { ExpenseComponent } from '../components/Expense';

export class ExpenseScreen extends React.Component {


    constructor(props) {
        super(props);
    }


    render() {
        
        return (
        <ExpenseComponent 
        {...this.props} />);
    }
}
