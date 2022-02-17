import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App_Kunde from './view/App_Kunde';
import App_Mitarbeiter from './view/App_Mitarbeiter';

function AppRouter() {    
    return (        
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<App_Kunde />} />
              <Route path="/Mitarbeiter" element={<App_Mitarbeiter />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;