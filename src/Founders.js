import React from 'react';
import './Founder.css'

const Founders = (props) =>{
    // // console.log(this.props); 
    // const {name, age, position} = this.props;
    // console.log(age); 
    const {founders} = props;
    const {deleteFounder} = props;
    // const zenithecList = zenithec.map(zenithec => {
        // if(zenithec.age>1){
        //     return (
        //         <div className="zenithec" key={zenithec.id}>
        //         <div>Name : {zenithec.name}</div>
        //         <div>Age : {zenithec.age}</div>
        //         <div>Position : {zenithec.position}</div>
        //     </div>
        //     )
        // }
        // else
        //     return null

    // })
    const founderList = founders.map(founders => {
        return founders.age>1 ? (
            <div className="founder" key={founders.id}>
                <div>Name : {founders.name}</div>
                <div>Age : {founders.age}</div>
                <div>Position : {founders.position}</div>
                <button onClick={() => {deleteFounder(founders.id)}}>Delete</button>
             </div>
        ) : null;
    });

    return(
        <div className="founderList">
            {founderList}
        </div>
    )
}

export default Founders
