import React from 'react'
import './AppMenu.css'
const AppMenu = (props) => (
        <ul className='App-Menu'>
              <div className="App-Menu-Element">
                 <li><a href="../">Open Cloud Banking</a></li>
                 <li><a className="App-Menu-Depot" href="../Depot">Depot</a></li>
                 <li><a className="App-Menu-Buchung" href="../Buchung">Buchung</a></li>
              </div>
         </ul>
)

export default AppMenu