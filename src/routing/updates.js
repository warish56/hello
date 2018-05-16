import React from 'react'

import{Route,NavLink} from 'react-router-dom'


class updates extends React.Component {

    goToNews(props){
        props.history.push('/news');
    }
    render() {
        console.log(this.props);
        return (
            <div>
            <h2>Hello i am updates</h2>
            <button type="button"  onClick={()=>this.goToNews(this.props)} className="btn btn-primary" >Go to news</button>
                </div>
        );

    }

}

export default updates;