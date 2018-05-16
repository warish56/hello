
import React from 'react';

import {Route} from 'react-router-dom';
import Login from '../task/login'
import Welcome from '../task/welcome'

class user extends React.Component{

    state={
    user:'warish'
    }

    componentDidMount(){

    }
    render(){

        console.log(this.props);
        let user=   this.state.user ? this.props.history.push("/welcome/"+this.state.user): this.props.history.push('/login')


        return(
        <div>
            <p>Welcome</p>
            <Route path="/login"  component={Login}/>
            <Route path="/welcome/:id" component={Welcome}/>
        </div>


    );
    }
}
export default user;