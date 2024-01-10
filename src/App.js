import React from 'react';
import Community from './pages/Community'
import Courts from './pages/Courts'
import Marketplace from './pages/Marketplace'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Community/>}/>
            <Route path='/courts' element={<Courts/>}/>
            <Route path='/marketplace' element={<Marketplace/>}/>
        </Routes>
    </div>
  );
}

export default App;
