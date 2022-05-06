import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Landing from './views/landing';
import MintPage from './views/mint';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/mint' element={<MintPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
