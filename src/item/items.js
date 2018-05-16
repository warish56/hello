
import  React from 'react';

class List extends React.Component{

    state={
        activity:[]
    };

     tempAc='';
    onChange = (event) =>{
        this.tempAc=event.target.value;
    }

    onSave = ()=>{
        this.state.activity.push(this.tempAc);
        this.setState(
            {
                activity:this.state.activity
            }
        );

        }



    render(){


        let items=this.state.activity.map((activity)=>{
            return(

                    <li className="list-group-item">{activity}</li>

            );
        });



        return(
            <div className="row mt-3">
                <div className="col-4 m-auto p-2 border border-success">
                    <form>
                        <div className="form-row">
                            <div className="col-10 form-group">
                                <input type="text" onChange={this.onChange}  className="form-control"/>
                            </div>
                            <div className="col-2 form-group">
                                <button type="button" onClick={this.onSave} className="btn btn-success btn-block">Save</button>
                            </div>
                        </div>


                    </form>


                    <ul className="list-group">
                        {items}
                    </ul>
                </div>
            </div>
        );
    }
}



export default List;