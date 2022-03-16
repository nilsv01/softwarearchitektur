import React, {Component} from 'react'; 
import './App.css';
import { Box } from '@mui/material';
import FahrplanTable from './components/FahrplanTable';
import HaltestelleTable from './components/HaltestelleTable';
import BuslinieTable from './components/BuslinieTable';

class App extends Component {

  constructor(props){
    super(props);
  }


  render (){
    const customer = this.props.customer
    return (
      <Box className="App">
        <FahrplanTable customer={customer}/>    
        <BuslinieTable customer={customer}/> 
        <HaltestelleTable customer={customer}/>     
      </Box>
      
    );
  }
}

export default App;
