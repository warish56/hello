
import React from 'react';

import {Route} from 'react-router-dom';


class welcome extends React.Component{
    render(){
        return(
            <h2>welcome {this.props.match.params.id}</h2>

        );
    }
}
export default welcome;