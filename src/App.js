import React from 'react';

import './index.css'
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <>
      <Nav />
    <div className='relative m-auto text-center '>
      <Home />
      <About />
    </div>
    </>
  );
}

export default App;
