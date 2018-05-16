
import React from 'react';
import style from '../posts/style.css'



class focus extends React.Component{

    render(){
        return(
            <div className="container-fluid">

                <div className="back animated zoomIn" onClick={()=>this.props.clicked(true)}>

                </div>

                <div className="row content animated fadeIn ">
              <div className=" col-sm-2 col-xl-1 p-2 bg-white">
                <img src={require("../Assets/profilePic.jpg")} className="img-responsive rounded-circle post-pic  p-2"/>

              </div>

            <div className=" col-sm-8 col-xl-6 bg-white  p-2">
            <strong >
            Dave Gamache
           </strong>
        <p >
            Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        </div>
                </div>
    </div>

    );
    }

}
export default focus;