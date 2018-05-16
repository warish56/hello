
import React from 'react';
import style from './style.css'

class Videos extends React.Component{

    state ={
        urls :[
            //"https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",

            "https://www.youtube.com/embed/aymnRtNj0Ws?autoplay=1&mute=1&controls=0",
            "https://www.youtube.com/embed/HloV55ttZqA?autoplay=1&mute=1&controls=0",
            "https://www.youtube.com/embed/N7PkzQJUgz8?autoplay=1&mute=1&controls=0"
        ]
    }

    change =(id) =>{

        console.log('clicked');
        let temp= this.state.urls[id];
        this.state.urls[id]= this.state.urls[0];
        this.state.urls[0]=temp;
        console.log(this.state.urls);
        this.setState({
            urls :this.state.urls
        })
    }

    render(){

        return(
            <div className="container w-100 ">
                <div className="row p-2 ">
                    <div   className=" col-sm-4 col-md-8 m-auto embed-responsive embed-responsive-16by9 ">

                            <iframe  width="854" height="480" src="https://www.youtube.com/embed/22yF0foZWqU" >

                            </iframe>






                    </div>
                </div>

                <div className="row p-2 border border-success align-items-center ">

                    <div onClick={()=>{this.change(1)} } className="col p-1 ml-3 " id="option">
                        <div   className="option embed-responsive embed-responsive-4by3 w-50 m-auto img-thumbnail">
                            <iframe  className="embed-responsive-item img-thumbnail option"  src={this.state.urls[1]}>
                            </iframe>
                        </div>
                    </div>

                    <div  onClick={()=>{this.change(2)}}  className="col p-1 ml-3  " id="option">
                        <div onClick={()=>{this.change(2)}}  className="option embed-responsive embed-responsive-4by3 w-50 m-auto ">
                            <iframe  className="embed-responsive-item img-thumbnail" src={this.state.urls[2]}>
                            </iframe>
                        </div>
                    </div>

                    <div onClick={()=>{this.change(3)}}  className="col p-1 ml-3  " id="option">
                        <div  className="option embed-responsive embed-responsive-4by3 w-50 m-auto">
                            <iframe className="embed-responsive-item img-thumbnail" src={this.state.urls[3]}>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default Videos;