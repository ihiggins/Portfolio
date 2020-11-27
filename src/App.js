import './App.css';
import { Nav } from './components/nav/nav';
import {Landing} from './components/landing/landing';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Footer } from './components/footer/footer';


function App() {
  
  return (
  <div className='app'>
    <Nav> </Nav>
    <Landing></Landing>
   <About></About>   
    <Experience></Experience>
    <Footer></Footer>
  </div>
  );
}

export default App;
