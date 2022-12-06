
import '../css/Header.css';
import '../css/Elc.css';
import eimt from '../images/logo.png';
import logo from '../images/eimt_final.png';
import {Link} from 'react-router-dom';
import {useEffect ,useState} from 'react';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';
  import AOS from 'aos';
  import 'aos/dist/aos.css';

function Elc(){

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
    
        AOS.init();
    
        document.head.innerHTML+=`
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, shrink-to-fit=no, user-scalable=0" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous"></link>
        `
      }, []);
    

    let [menubar,setMenu] = useState(false);
    let [menubar1,setMenu1] = useState(false);

    let newMovie={};

      function readValue(property,value){
          newMovie[property]=value;
          console.log(newMovie[property]);
      }
      let [messages,setMessage] = useState(null);

      function submitForm(){
        fetch("https://eimt-backend.onrender.com/register",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(newMovie)
        })
        .then((response)=>response.json())
        .then((response)=>{
            console.log(response.message);
          
        })
        .catch((err)=>{
            console.log(err);
            console.log("error");
        })
      }

    return(
        <section>
        { loading ? (
        <div className="loader-container">
      	  <div className="spinner"></div>
        </div>
      ) : ( 
        <div>
         <div className="contact_nav">
          <div className="contact_nav_det">
            <div className="contact_nav_det_1">
              <h6>&#x1F4E7; admission@ebenezer-imt.org</h6>
              <h6>&#128222; +91 8943303002</h6>
            </div>
          </div>
         </div>
    

        <div className="elc_form">
          <div className="elc_form_1">
            <div className="elc_form_2">
              <div className="elc_form_head">
                <img src={logo} width='8%'/>
                <h3>Application Form</h3>
              </div>
              <div className="elc_form_body">
                 <div className="elc_form_body1">
                   <input type="text" placeholder="Full name" onChange={(event)=>{
                          readValue("fullname",event.target.value);
                      }
                      } required/>
                   <input type="email" placeholder="Email" onChange={(event)=>{
                          readValue("email",event.target.value);
                      }
                      } required/>
                   <input type="text" placeholder="Phone number" onChange={(event)=>{
                          readValue("phone",event.target.value);
                      }
                      } required/>

                 </div>
                 <div className="elc_form_body2">
                   <input placeholder="Address" onChange={(event)=>{
                          readValue("address",event.target.value);
                      }
                      } required/>
                   <input placeholder="Education" onChange={(event)=>{
                          readValue("education",event.target.value);
                      }
                      } required/>
                   <div className="gender" >
                      <label>Gender:</label>
                      <input type="radio" value="Male" name="gender" onChange={(event)=>{
                          readValue("gender",event.target.value);
                      }
                      } required/><label>Male</label>
                      <input type="radio" value="Female" name="gender" onChange={(event)=>{
                          readValue("gender",event.target.value);
                      }
                      } required/><label>Female</label>

                   </div>
                 </div>
                 <div className="elc_form_body3">
                   <label>Which Course are you planning to apply to? IELTS/OET/ or any other?</label>
                   <select onChange={(event)=>{
                          readValue("course",event.target.value);
                      }
                      } required>
                      <option defaultValue >Select Any Course</option>
                      <option value="IELTS">IELTS</option>
                      <option value="OET">OET</option>
                      <option value="Other">Other</option>
                   </select>
                 </div>
                 <div className="elc_form_body4">
                   <label>Have you taken any Standardized tests before?</label>
                   <select onChange={(event)=>{
                          readValue("other",event.target.value);
                      }
                      } required>
                      <option defaultValue>Select Any Option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                   </select>
                 </div>
                 <div className="elc_form_body5">
                   <label>How do you come to know about ELC?<br/>Friends/ Internet search/ Social media / faculty?</label>
                   <select onChange={(event)=>{
                          readValue("query",event.target.value);
                      }} required>
                      <option defaultValue>Select Any Option</option>
                      <option value="Friends">Friends</option>
                      <option value="Internet search">Internet search</option>
                      <option value="Social media">Social media</option>
                      <option value="faculty">faculty</option>
                   </select>
                 </div>
              </div>
              <div className="form_btn">
                 <button onClick={()=>{submitForm();}}>Submit</button>
              </div>
            </div>
          </div>
          <div className="elc_watermark">
             <h6>powered by ATJ</h6>
          </div>
        </div>
        </div>)
        }
        </section>
    )
}

export default Elc;