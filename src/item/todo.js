
import React from 'react';

 const todo =(args) =>{
    return(
        <div className="p-2  m-auto w-25 border border-primary">
            <ul className="list-group">
                <li className="list-group-item">{args.items}</li>
            </ul>
        </div>

    )
}

export default todo;