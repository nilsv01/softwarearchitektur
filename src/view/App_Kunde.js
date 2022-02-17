import React, {Component} from 'react'; 
import './App_Kunde.css';

import AppMenu from '../components/AppMenu';

class App_Kunde extends Component {

  render (){
    return (
      <div className="App">      
        <AppMenu/>
        <p>
            App-Kunde
          </p>
      </div>
    );
  }
}

export default App_Kunde;
