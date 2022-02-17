import React, {Component} from 'react'; 
import './App_Mitarbeiter.css';

import AppMenu from '../components/AppMenu';

class App_Mitarbeiter extends Component {

  render (){
    return (
      <div className="App">      
        <AppMenu/>
        <p>
            App-Mitarbeiter
          </p>
      </div>
    );
  }
}

export default App_Mitarbeiter;
