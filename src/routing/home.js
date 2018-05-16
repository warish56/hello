
import React from 'react'

import{Route,NavLink,Switch} from 'react-router-dom'

import Profile from '../routing/profile'
import Updates from '../routing/updates'
import News from '../routing/news'

class home extends React.Component{

    goToProfile(props){
       props.history.push('/profile/1?sub=true&open=false');

    }

 render(){
    return(
        <div className="container text-dark bg-default">
            <div className="row justify-content-center">
                <ul className="list-inline">
                    <li className="list-inline-item  text-white">
                        <NavLink to="/" > Home</NavLink>
                    </li>

                    <li className="list-inline-item">
                        <NavLink to="/profile/1" > Profile</NavLink>
                    </li>

                    <li className="list-inline-item">
                        <NavLink to="/updates" >Updates</NavLink>
                    </li>

                    <li className="list-inline-item">
                        <NavLink to="/news" >News</NavLink>
                    </li>
                </ul>
            </div>

            <button type="button"  onClick={()=>this.goToProfile(this.props)} className="btn btn-primary" >Go to Profile</button>



            <Route path="/profile/:id"  component={Profile}/>
            <Route path="/updates" component={Updates}/>
            <Route path="/news" component={News}/>


        </div>
    );
  }

}

export default home;