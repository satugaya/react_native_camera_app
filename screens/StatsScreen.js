import React from 'react';
import Stats from '../components/Stats';

export class StatsScreen extends React.Component {


    constructor(props) {
        super(props);
    }


    render() {
        

        return ( <Stats  {...this.props} />);
    }
}

