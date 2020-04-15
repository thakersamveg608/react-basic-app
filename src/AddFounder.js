import React, {Component} from 'react'

class AddFounder extends Component{
    state = {
        name : null,
        age : null,
        position : null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.addFounder(this.state);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name :</label>
                    <input type="text" id="name" onChange={this.handleChange}/> 
                    <label htmlFor="name">Age :</label>
                    <input type="text" id="age" onChange={this.handleChange}/> 
                    <label htmlFor="name">Position :</label>
                    <input type="text" id="position" onChange={this.handleChange}/> 
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddFounder