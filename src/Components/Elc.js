
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
                   <input placeholder="Full name"/>
                   <input placeholder="Email"/>
                   <input placeholder="Phone number"/>

                 </div>
                 <div className="elc_form_body2">
                   <input placeholder="Address"/>
                   <input placeholder="Education"/>
                   <div className="gender">
                      <label>Gender:</label>
                      <input type="radio"/><label>Male</label>
                      <input type="radio"/><label>Female</label>

                   </div>
                 </div>
                 <div className="elc_form_body3">
                   <label>Which Course are you planning to apply to? IELTS/OET/ or any other?</label>
                   <select>
                      <option>Select Any Course</option>
                      <option>IELTS</option>
                      <option>OET</option>
                      <option>Other</option>
                   </select>
                 </div>
                 <div className="elc_form_body4">
                   <label>Have you taken any Standardized tests before?</label>
                   <select>
                      <option>Select Any Option</option>
                      <option>Yes</option>
                      <option>No</option>
                   </select>
                 </div>
                 <div className="elc_form_body5">
                   <label>How do you come to know about ELC?<br/>Friends/ Internet search/ Social media / faculty?</label>
                   <select>
                      <option>Select Any Option</option>
                      <option>Friends</option>
                      <option>Internet search</option>
                      <option>Social media</option>
                      <option>faculty</option>
                   </select>
                 </div>
              </div>
              <div className="form_btn">
                 <button >Submit</button>
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