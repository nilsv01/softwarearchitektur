import React from 'react'
import './AppMenu.css'
const AppMenu = (props) => (
        <ul className='App-Menu'>
              <div className="App-Menu-Element">
                 <li><a className="App-Menu-Kunde" href="../">Kunde</a></li>
                 <li><a className="App-Menu-Mitarbeiter" href="../Mitarbeiter">Mitarbeiter</a></li>
              </div>
         </ul>
)

export default AppMenu