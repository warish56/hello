import React from 'react'

import{Route,NavLink} from 'react-router-dom'


class news extends React.Component {

    goToHome(props){
        props.history.push('/');
    }

    render() {
        console.log(this.props);
        return (
            <div>
            <h2>Hello i am news</h2>
            <button type="button"  onClick={()=>this.goToHome(this.props)} className="btn btn-primary" >Go to home</button>
            </div>
                );

    }

}

export default news;