// TODO: Move some constants to other files

import React from 'react';
import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';

import World from './subpages/Worlds'

function App() {
  return (
    <div className='app'>
      <h1>React Router Demo</h1>
      <Navigation />
      <Main />
    </div>
  );
}
    
// const App = () => (
//   <div className='app'>
//     <h1>React Router Demo</h1>
//     <Navigation />
//     <Main />
//   </div>
// );

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
      <li><NavLink to='/contact'>Contact</NavLink></li>
      <li><NavLink to='/world'>Worlds</NavLink></li>
    </ul>
  </nav>
);

const Home = () => (
  <div className='home'>
    <h1>Welcome to my portfolio website</h1>
    <p> Feel free to browse around and learn more about me.</p>
    <a href='/about'>About</a>
  </div>
);

const About = () => (
  <div className='about'>
    <h1>About Me</h1>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
  </div>
);

const Contact = () => (
  <div className='contact'>
    <h1>Contact Me</h1>
    <p>You can reach me via email: <strong>hello@example.com</strong></p>
  </div>
);

// Routes
const Main = () => (
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/world' element={<World/>} />
  </Routes>
);

export default App;
