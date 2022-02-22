import React, {Component} from 'react'; 
import './App.css';
import AppMenu from './components/AppMenu';
import { Button } from '@mui/material';

class App extends Component {

  constructor(props){
    super(props);
    this.handleUser = this.handleUser.bind(this);
  }

  handleUser = (event) =>{
    this.props.onCustomerChange(event.target.checked);
  }

  render (){
    const customer = this.props.customer
    return (
      <div className="App">    
        <p>
            <button disabled={!this.props.customer} >test</button>
          </p>
      </div>
    );
  }
}

export default App;
