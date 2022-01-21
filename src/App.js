import React from 'react';
import './App.css';
import Lifecycle from './Lifecycle/Lifecycle'
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      showChild:true,
      text: '',
    };
    // this.handleChange= this.handleChange.bind(this);
  }

  

  render() {
    return (
      <div className="App">
          <h1>Lifecycles Component</h1>
          <button onClick={()=>
            this.setState(state=>({
            showChild:!state.showChild
            }))
            }
          >
            Toggle Lifecycles
          </button>
          <button 
          onClick={()=>
            this.setState(state=>({
            text:state.text+'_hello'
            }))
            }
          >
            Update Text
          </button>
          <br/>
         {this.state.showChild?<Lifecycle text={this.state.text} />:null}
      </div>
    );
  }
}

export default App;
