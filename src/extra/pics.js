import React from 'react'
import style from '../extra/style.css'
import Transition from 'react-transition-group/Transition'



class pics extends React.Component{

    render(){
        let classes=['animate-left','m-2','spons-pic','img-responsive'];

        return(
            <Transition timeout={300}>
            <img src={this.props.url} className={classes.join(' ')}/>
            </Transition>
        );
    }
}
export default pics;