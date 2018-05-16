
import React from 'react'
import style from '../posts/style.css'
import Focus from '../posts/FocusPost'

class post extends React.Component {

state ={
    click:false
}
   postFocus =()=>{

       let newclick=!this.state.click;
       this.setState({
           click:newclick
       });
   }

   render() {
       return (

           <div>
               {
                   this.state.click ? <Focus clicked={()=>this.postFocus()}/> : null
               }
           <div className="text-left">

               <div className="row p-1 " onClick={this.postFocus}>
                   <div className=" col-sm-2 col-xl-2 p-2">
                       <img src={require("../Assets/profilePic.jpg")}
                            className="img-responsive rounded-circle post-pic  p-2"/>

                   </div>
                   <div className=" col-sm-8 col-xl-10   p-2">
                       <strong>
                           Dave Gamache
                       </strong>
                       <p>
                           Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod
                           semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio,
                           dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper.
                           Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                       </p>
                   </div>
               </div>

               <hr></hr>

               <div className="row p-1">
                   <div className="col-sm-2 col-xl-2 p-2">
                       <img src={require("../Assets/pic1.jpg")}
                            className="img-responsive rounded-circle post-pic  p-2"/>

                   </div>
                   <div className=" col-sm-8 col-xl-10  p-2">
                       <strong>
                           Jacob Thornton
                       </strong>
                       <p>
                           Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis
                           dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes,
                           nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem
                           ipsum dolor sit amet, consectetur adipiscing elit.
                       </p>
                   </div>
               </div>


               <hr></hr>

               <div className="row p-1">
                   <div className="col-sm-2 col-xl-2 p-2">
                       <img src={require("../Assets/pic2.jpg")}
                            className="img-responsive rounded-circle post-pic  p-2"/>

                   </div>
                   <div className=" col-sm-8 col-xl-10  p-2">
                       <strong>
                           Mark Otto
                       </strong>
                       <p>
                           Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod
                           semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam
                           porta sem malesuada magna mollis euismod. Donec sed odio dui.
                       </p>
                   </div>
               </div>


               <hr></hr>


               <div className="row p-1">
                   <div className="col-sm-2 col-xl-2 p-2">
                       <img src={require("../Assets/pic3.jpg")}
                            className="img-responsive rounded-circle post-pic  p-2"/>

                   </div>
                   <div className=" col-sm-8 col-xl-10  p-2">
                       <strong>
                           Steve Jobs
                       </strong>
                       <p>
                           Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet
                           rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Praesent
                           commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at
                           lobortis.
                       </p>
                   </div>
               </div>


           </div>
           </div>
       );

   }
}

export default post;