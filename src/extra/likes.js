import React from 'react'
import style from '../extra/style.css'

class likes extends React.Component {

    state={
        follow:[false,false]
    }

    follow = (id)=>{
        let follow=this.state.follow.map((item,index) =>{
            if(index === id)
                return true;
            else {
                if(item)
                return true;
                else
                    return false;
            }
        });
        this.setState({
               follow:follow
        })
    }

    render() {


        let liked= <div className="animated zoomIn"><strong>Followed<span className=" fa fa-thumbs-up p-2"></span></strong></div>



    let button1= this.state.follow[0] ?   <button type="button"  className="btn btn-outline-primary animated zoomOut d-none  ">
            <span className="fa fa-user-plus p-1"></span>
            Follow
        </button> :   <button type="button" onClick={()=>this.follow(0)} className="btn btn-outline-primary animated zoomIn  ">
            <span className="fa fa-user-plus p-1"></span>
            Follow
        </button>;




        let button2= this.state.follow[1] ?   <button type="button"  className="btn btn-outline-primary animated zoomOut d-none  ">
            <span className="fa fa-user-plus p-1"></span>
            Follow
        </button> :   <button type="button" onClick={()=>this.follow(1)} className="btn btn-outline-primary animated zoomIn  ">
            <span className="fa fa-user-plus p-1"></span>
            Follow
        </button>;




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


                            {button1}
                            <br></br>
                            {this.state.follow[0] ? liked :null}

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
                            {button2}
                            <br></br>
                            {this.state.follow[1] ? liked :null}
                        </div>

                    </div>


                </div>


            </div>

        );
    }
}

export default likes;