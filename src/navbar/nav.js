

import React from 'react';
import style from '../navbar/style.css'

class nav extends React.Component{

    state={
        buttonClick:false
    }

    btnAnimate= ()=>{
        let newClick=!this.state.buttonClick;
        this.setState({
            buttonClick:newClick
        })

    }

    render() {

     let classAnimate=  this.state.buttonClick ? ["form-control","mr-2"," animated", "rubberBand"  ] :["form-control","mr-2"," animated",   ];
        return (
            <nav
                className=" animated slideInDown  navbar navbar-expand navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-expand-xs bg-primary text-white">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"> </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active p-2 ">Home</li>
                        <li className="nav-item p-2 ">Profile</li>
                        <li className="nav-item p-2 ">Messages</li>
                        <li className="nav-item p-2 ">Docs</li>
                    </ul>


                    <ul className="navbar-nav ml-auto ">
                        <input type="text" onClick={this.btnAnimate} className={classAnimate.join(' ')} placeholder="Search"/>
                        <img className="img-responsive nav-pic rounded-circle" src={require("../Assets/profilePic.jpg")}
                             alt="profile-pic"/>

                    </ul>


                </div>

            </nav>
        );
    }
}

export default nav;