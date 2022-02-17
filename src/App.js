import React, {Component} from 'react'; 
import './App.css';

import AppMenu from './components/AppMenu';

class App extends Component {

  render (){
    return (
      <div className="App">      
        <AppMenu/>
        <p>
            App-Home
          </p>
      </div>
    );
  }
}

export default App;
