
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Services from './Pages/Services';
import About from './Pages/About';
import Contact from './Pages/Contact'
import Portfolio from './Pages/Portfolio'



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/services' element={<Services/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
