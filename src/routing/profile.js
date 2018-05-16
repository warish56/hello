import React from 'react'

import{Route,NavLink} from 'react-router-dom'
import Place1 from '../Assets/place1.jpg'
import Place2 from '../Assets/profilePic.jpg'


class profile extends React.Component {
    state = {

    };
    goToUpdate(props){
        props.history.push('/updates');

    }

    gotoOwn(props){
        props.history.push('/profile/1');
    }

    componentDidUpdate(){
        console.log('updated');
        this.img= '1' === this.props.match.params.id ? <img src={Place1}/> : <img src={Place2}/>;
    }

    componentWillMount(){
        console.log('mount called', this.props.match.params.id);
        this.img= +this.props.match.params.id === 1 ?
            <img src={Place1}/> :
            <img src={Place2}/>;
    }


    render() {



        console.log(this.props);
        console.log(this.props.location.search);
        return (
            <div>
                <h2>Hello i am profile</h2>
                {this.img}
                <button type="button"  onClick={()=>this.goToUpdate(this.props)} className="btn btn-primary" >Go to updates</button>
                <button type="button"  onClick={()=>this.gotoOwn(this.props)} className="btn btn-primary" >Go to Own</button>

            </div>



        );

    }

}

export default profile;