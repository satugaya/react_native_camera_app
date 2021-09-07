import React from 'react';
import { BudgetItem } from '../components/BudgetItem';

export class BudgetScreen extends React.Component {


    constructor(props) {
        super(props);
    }


    render() {
        
        return (<BudgetItem {...this.props} />);
    }
}

