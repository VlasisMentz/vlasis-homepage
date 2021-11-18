import './App.css';
import Home from './components/Home';
import NavbarMenu from './components/NavbarMenu';
import ParticlesContainer from './components/ParticlesContainer';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <ParticlesContainer />
        <NavbarMenu />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
