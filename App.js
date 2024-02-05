import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>    
      <div class="container">
      <ul>
        <li><Link to="/Home" className='list-items'>Home</Link></li>
        <li><Link to="/About" className='list-items'>About</Link></li>
        <li><Link to="/Services" className='list-items'>Services</Link></li>
        <li><Link to="/Team" className='list-items'>Team</Link></li>
        <li><Link to="/Contact" className='list-items'>Contact</Link></li>
      </ul>     
    </div>     
        <Routes>
          <Route path='/Home' element={<Home />}></Route>   
          <Route path='/About' element={<About />}></Route>
          <Route path='/Services' element={<Services />}></Route>
          <Route path='/Team' element={<Team />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
        </Routes>      
    </BrowserRouter>
    </div>
  );
}

export default App;
