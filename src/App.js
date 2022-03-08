import React, {Component} from 'react'; 
import './App.css';
import { Box } from '@mui/material';
import FahrplanTable from './components/FahrplanTable';
class App extends Component {

  constructor(props){
    super(props);
    this.handleUser = this.handleUser.bind(this);
  }

  handleUser = (event) =>{
    this.props.customer(event.target.checked);
  }

  render (){
    const customer = this.props.customer
    return (
      <Box className="App">
        <FahrplanTable customer={customer}/>        
      </Box>
      
    );
  }
}

export default App;
