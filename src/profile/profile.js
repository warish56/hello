

import React from 'react';
import  style from '../profile/style.css'
import About from '../profile/about'

const profile = () => {
    return (
         <div>

             <div className="card w-40">
                 <img className="card-img-top img-responsive" src={require("../Assets/back.jpg")} alt="back"/>

                     <img className="position-absolute  profilePic rounded-circle img-responsive" src={require("../Assets/profilePic.jpg")} alt="back"/>



                 <div className="card-body text-center mt-4">
                     <strong> Dave Gamache</strong>
                     <p className="">
                         I wish i was a little bit taller, wish i was a baller, wish i had a girl… also.
                     </p>

                     <div className="d-flex flex-row justify-content-around">
                         <div className="">
                             <p>Friends</p>
                             <strong>12M</strong>
                         </div>

                         <div>
                             <p>Enemies</p>
                             <strong>1</strong>
                         </div>
                     </div>
                 </div>
             </div>

             {/*About*/}
              <About/>
         </div>
    );
}

export default profile;