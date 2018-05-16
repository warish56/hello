
import React from 'react'
import Post from '../posts/post'

class posts extends React.Component{


	state={
		clicked:false
	}

	 onSearch = ()=>{
		let newClick=!this.state.clicked;
		this.setState({
			clicked:newClick
		})
	}

	render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div className=" row p-2 ml-5 ">
                        <div className="w-75 ">
                            <input type="text" className="form-control "/>
                        </div>

                        <button type="button" onClick={this.onSearch} className=" ml-2 d-inline btn btn-secondary ">Search
                        </button>
                        {this.state.clicked? <div className="animated bounce infinite bg-danger ball-pic ml-3 mt-2"></div> : null}


                    </div>
                    <hr></hr>
                    <Post/>
                </div>

            </div>
        );
    }
}

export default posts;