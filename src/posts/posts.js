
import React from 'react'
import Post from '../posts/post'

const posts =() =>{
	return (
		<div className="card">
			<div className="card-body">
				<div className=" row p-2 ml-5 ">
                    <div className="w-75 ">
                        <input type="text" className="form-control "/>
                    </div>

                    <button type="button" className=" ml-2 d-inline btn btn-secondary ">Search</button>

				</div>
                <hr></hr>
                <Post/>
			</div>

		</div>
	);
}

export default posts;