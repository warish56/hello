import React from 'react'
import style from '../extra/style.css'
import Likes from '../extra/likes'
import Pics from '../extra/pics'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import CSSTransition from 'react-transition-group/CSSTransition'

import place1 from '../Assets/place1.jpg'
import place2 from '../Assets/place2.jpg'
import spons from '../Assets/sopns.jpg'

class extra extends React.Component{

    state={
        urls:[
            spons,
            place1,
            place2
        ],



        images:
            <CSSTransition classNames="animate-left"  timeout={1500}>
                <img src={require("../Assets/sopns.jpg")} className="  m-2 spons-pic img-responsive"/>
            </CSSTransition>
        ,
        currIndex:0



    };

    a=0;

    //
    // componentWillMount(){
    //     this.state.image=<img src={this.state.urls[0]} className="animate-left m-2 spons-pic img-responsive"/>
    //
    // }


    onNext = ()=>{



        let newIndex = this.state.currIndex;

        if(newIndex<this.state.urls.length-1) {
                newIndex++;


            let image=

                <CSSTransition key={newIndex} classNames="animate-left"  timeout={1500}>
                    <img src={this.state.urls[newIndex]} className="  m-2 spons-pic img-responsive"/>
                </CSSTransition>;



            this.setState({

                currIndex: newIndex,
                images:image

            });


        }

        else
        {
            let newIndex = 0;
            let image=

                <CSSTransition key={newIndex} classNames="animate-left"  timeout={1500}>
                    <img src={this.state.urls[newIndex]} className="  m-2 spons-pic img-responsive"/>
                </CSSTransition>;



            this.setState({

                currIndex: newIndex,
                images:image

            });

        }
    }









    render() {















        return (
            <div>
                <div className="card ">
                    <div className="card-body text-left">
                        <strong>Sponsered</strong>
                        <div className="p-2  image">

                                <TransitionGroup>
                                {this.state.images}
                                </TransitionGroup>


                        </div>

                        <button type="button"  onClick={this.onNext} className="btn btn-outline-primary m-1">Next</button>

                        <p className="p-2">
                            It might be time to visit Iceland. Iceland is so chill, and everything looks cool here.
                            Also, we heard the people are pretty nice. What are you waiting for?
                        </p>
                        <button type="button" className=" ml-1 btn btn-outline-primary">Buy a ticket</button>

                    </div>
                </div>

                <Likes/>
            </div>


        );
    }
}
export default extra;