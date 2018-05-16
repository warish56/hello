
import React from 'react';

const about =()=>{
    return(
        <div className="card mt-3">
            <div className="card-body">
                <p className="h5 text-left">About</p>
                <div className="d-flex flex-column align-items-start">
                    <p><span className="fa fa-calendar-alt p-2"></span>
                        Went to Oh, Canada</p>

                    <p><span className="fa fa-user-friends p-2"></span>
                        Became friends with Obama</p>

                    <p><span className="fa fa-briefcase p-2"></span>
                        Worked at Github</p>

                    <p><span className="fa fa-home p-2"></span>
                        Lives in San Francisco, CA</p>

                    <p><span className="fa fa-map-marker p-2"></span>
                        From Seattle, WA</p>
                </div>
            </div>

        </div>
    );
}
export default about;