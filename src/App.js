import React, {Component} from 'react';
import AddFounder from './AddFounder';
import Founders from './Founders';

class App extends Component {
  state = {
    founders : [
      {name: 'Samveg', age : '21', position : 'Co-Founder', id : 1},
      {name: 'Vrihas', age : '25', position : 'Co-Founder', id : 2},
      {name: 'Amrita', age : '20', position : 'Co-Founder', id : 3}
    ]
  }

  addFounder = (founder) => {
    founder.id = Math.random();
    let founders = [...this.state.founders, founder];
    this.setState({
      founders : founders
    })
  }

  deleteFounder = (id) => {
    console.log(id);
    let founders = this.state.founders.filter(founder => {
      return founder.id !== id
    })
    this.setState({
      founders : founders
    })
  } 

  render() {
    return (
      <div className="App">
        <h1>
          This is my 1st app
          <p>Welcome</p>
        </h1>
        <Founders founders={this.state.founders} deleteFounder={this.deleteFounder}/>
        <AddFounder addFounder={this.addFounder} />
      </div>
    );
  }
}

export default App;
