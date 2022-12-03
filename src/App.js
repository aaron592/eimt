
import Header from './Components/Home.js';
import About from './Components/About.js';
import Course from './Components/Courses.js';
import Admin from './Components/Admin.js';
import Contact from './Components/Contact.js';
import Login from './Components/Login.js';
import Language from './Components/Language.js';
import Registration from './Components/Registration.js'
import Team from './Components/Team.js';
import Vision from './Components/Vision.js';
import {useEffect} from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';


function App() {
   useEffect(() => {
      document.title = "Ebenezer Institute Of Modern Technology"
    }, [])
  return (
   
       <Router>
          <Routes>
             <Route path="/" element={<Header/>} />
             <Route path="/about" element={<About/>} />
             <Route path="/courses" element={<Course/>} />
             <Route path="/login" element={<Login/>} />
             <Route path="/admin" element={<Admin/>} />
             <Route path="/contact" element={<Contact/>} />
             <Route path="/language_courses" element={<Language/>}/>
             <Route path="/registration" element={<Registration/>} />
             <Route path="/team" element={<Team/>} />
             <Route path="/vision-mission" element={<Vision/>} />
          </Routes>
       </Router>
    
  );
}

export default App;
