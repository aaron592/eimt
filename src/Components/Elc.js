
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
import {useNavigate} from 'react-router-dom';
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';
  import AOS from 'aos';
  import 'aos/dist/aos.css';

function Elc(){
  const navigate = useNavigate();

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
    let [successmsg, setsuccessMsg] = useState(false);
    let [errormsg, seterrorMsg] = useState(false);
    let newMovie={};

      function readValue(property,value){
          newMovie[property]=value;
          console.log(newMovie[property]);
      }

      let [messages,setMessage] = useState(null);
      let [message1,setMessage1] = useState(null);
      let [message2,setMessage2] = useState(null);
      
    
      
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
           if(response.success==true){
            setMessage(response.message);
            setsuccessMsg(true)
            setTimeout(() => {
              setsuccessMsg(false);
            },5000);
            setTimeout(() => {
              navigate('/language_courses');
            },5000);
           }
           else{
            setMessage(response.message);
            setMessage1(response.error);
            setMessage2(response.text);
            seterrorMsg(true)
            setTimeout(() => {
              seterrorMsg(false);
            },10000);
           }
         
         
        
        })
        .catch((err)=>{
          console.log(err);
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
         {successmsg===true?(
          <div className="submit_alert">
            <div className="submit_msg">
              <p>{messages}</p>
            </div>
         </div>
         ):null}
         {errormsg===true?(
          <div className="submit_alert">
            <div className="submit_msg1">
               <p>{message1}</p>
               <p>{messages}</p>
               <p>{message2}</p>
               <p></p>
            </div>
         </div>
         ):null}
         

        <div className="elc_form">
          <div className="elc_form_1">
            <div className="elc_form_2">
              <div className="elc_form_head">
                <img src={logo} />
                <h3>Application Form</h3>
              </div>
              <div className=" elc_form_body">
                 <div className="d-flex flex-row elc_form_body1">
                   <input type="text" placeholder="Full name" onChange={(event)=>{
                          readValue("fullname",event.target.value);
                      }
                      } pattern="[A-Za-z0-9]+" required={true }/>
                   <input type="email" placeholder="Email" onChange={(event)=>{
                          readValue("email",event.target.value);
                      }
                      } required/>
                   <input type="text" placeholder="Phone number" onChange={(event)=>{
                          readValue("phone",event.target.value);
                      }
                      } required/>

                 </div>
                 <div className="d-flex flex-row elc_form_body2">
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
                      } /><label>Male</label>
                      <input type="radio" value="Female" name="gender" onChange={(event)=>{
                          readValue("gender",event.target.value);
                      }
                      } /><label>Female</label>

                   </div>
                 </div>
                 <div className="d-flex flex-row elc_form_body3">
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
                 <div className="d-flex flex-row elc_form_body4">
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
                 <div className="d-flex flex-row elc_form_body5">
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
                 <button type="submit" onClick={()=>{submitForm();}}>Submit</button>
              </div>
            </div>
          </div>
          
        </div>
        <div className="elc_watermark">
             <h6>Powered by ATJ</h6>
          </div>
        </div>
        )
        }
        </section>
    )
}

export default Elc;