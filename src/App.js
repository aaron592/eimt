
import './App.css';
import Header from './Components/Home.js';
import About from './Components/About.js';
import Course from './Components/Courses.js';
import Admin from './Components/Admin.js';
import Contact from './Components/Contact.js';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';


function App() {
  return (
   
       <Router>
          <Routes>
             <Route path="/" element={<Header/>} />
             <Route path="/about" element={<About/>} />
             <Route path="/courses" element={<Course/>} />
             <Route path="/admin" element={<Admin/>} />
             <Route path="/contact" element={<Contact/>} />
          </Routes>
       </Router>
    
  );
}

export default App;
