import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';


function AppRouter() {    
    return (        
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/Buchung" element={<App />} />
              <Route path="/Depot" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;