import React from 'react'
import style from '../extra/style.css'

const likes =() => {
    return (
        <div className="card mt-3">
            <div className="card-body text-left">
                <strong className="">
                    Likes
                </strong>
                <span className="text-muted">
                    .View all
                </span>
                <br></br><br></br>
                <div className="row justify-content-around">
                    <div className="col-2">
                        <img src={require("../Assets/pic1.jpg")} className="likes-pic rounded-circle"/>
                    </div>
                    <div className="col-8 text-left ">
                        <strong>
                            Jacob Thornton @fat
                        </strong>
                        <button type="button" className="btn btn-outline-primary ">
                            <span className="fa fa-user-plus p-1"></span>
                            Follow</button>
                    </div>

                </div>

                <br></br>
                <div className="row justify-content-around">
                    <div className="col-2">
                        <img src={require("../Assets/pic2.jpg")} className="likes-pic rounded-circle"/>
                    </div>
                    <div className="col-8 text-left ">
                        <strong>
                            Mark Otto @mdo
                        </strong>
                        <button type="button" className="btn btn-outline-primary ">
                            <span className="fa fa-user-plus p-1"></span>
                            Follow</button>
                    </div>

                </div>


                </div>


            </div>

    );
}

export default likes;