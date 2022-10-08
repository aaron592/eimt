import {Link} from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import '../css/Header.css';
import '../css/About.css';
import logo from '../images/logo.png';
import eimt from '../images/eimt.png'
import {useEffect ,useState} from 'react';
import logo1 from '../images/logo1.jpeg';
import logo2 from '../images/logo2.jpeg';
import logo3 from '../images/logo3.jpeg';
import about_img from '../images/preview.jpg';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';
import about_gif from '../images/about.gif';
import { saveAs } from "file-saver";
import AOS from 'aos';
import 'aos/dist/aos.css';


function About(){
  
  const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);

       AOS.init();

        document.head.innerHTML+=`
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        `
      }, []);

      const saveForm = () => {
        saveAs(
          "https://master--iridescent-profiterole-2ab773.netlify.app/application_form.pdf",
          "EIMT-Application-Form.pdf"
        );
      };

      let [menubar,setMenu] = useState(false);
      let [menubar1,setMenu1] = useState(false);
    
   return(
    <section>
    { loading ? (
        <div className="loader-container">
      	  <div className="spinner"></div>
        </div>
      ) : (<div>
   <div className="container-fluid">
           <div className="row">
              <div className="col-lg-2 col-xl-3 col-md-3 col-sm-6  logo">
                  <img className="logo_img" src={eimt} alt="logo" style={{height:"100%"}}/>
                  <button className="menu_sm" onClick={()=>{setMenu(true)}}>☰</button>
              </div>
              {menubar===true?(
                <section className="cover" onClick={()=>{setMenu(false)}}>
                      <div className="col-lg-2 col-xl-3 col-md-6 col-sm-2 search_new">
                        <input type="text" placeholder="&#128269; Search for anything...." className="search_bar"/>
                     </div>
                     <div className="col-xl-4 col-sm-6 col-md-8 nav_details_new" onClick={()=>{setMenu(true)}}>
                     <Link style={{ textDecoration: 'none', color: 'white' }} to="/"><p className="nav_p">Home</p></Link>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to="/about"><p className="nav_p">About</p></Link>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to="/courses"><p className="nav_p">Courses</p></Link>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to="/contact"><p className="nav_p">Contact</p></Link>
              </div>
              <div className="col-lg-2 col-xl-2 col-sm-6 col-md-8 login_details_new">
                 <button className="register" onClick={saveForm}>APPLY NOW</button>  
              </div>
              </section>
                    ):null}
              
              <div className="col-lg-2 col-xl-3 col-md-3 col-sm-2 menu_div">
                <button className="menu" onClick={()=>{setMenu1(true)}}>☰</button>
              </div>
              {menubar1===true?(
                <section className="cover" onClick={()=>{setMenu1(false)}}>
                <div className="col-xl-4 col-sm-6 col-md-8 nav_details_new">
                  <Link style={{ textDecoration: 'none', color: 'white' }} to="/"><p className="nav_p">Home</p></Link>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to="/about"><p className="nav_p">About</p></Link>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to="/courses"><p className="nav_p">Courses</p></Link>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to="/contact"><p className="nav_p">Contact</p></Link>
              </div>
              <div className="col-lg-2 col-xl-2 col-sm-6 col-md-8 login_details_new">
                 <button className="register" onClick={saveForm}>APPLY NOW</button> 
              </div>
              </section>
              ):null}
              <div className="col-xl-4 col-sm-6 col-md-8 nav_details">
                  <Link style={{ textDecoration: 'none', color: '#494949' }} to="/"><p className="nav_p">Home</p></Link>
                  <p className="dropdown">
                  <span className="nav_p">About ⮟</span>
                  <div class="dropdown-content">
                  <Link style={{ textDecoration: 'none', color: '#494949' }} to="/about"> <p className="nav_p drop_p">About Us</p></Link>
                      <p className="nav_p">Board</p>
                      <p className="nav_p">Certification</p>
                  </div>
                  </p>
                  <Link style={{ textDecoration: 'none', color: '#494949' }} to="/courses"><p className="nav_p">Courses</p></Link>
                  <Link style={{ textDecoration: 'none', color: '#494949' }} to="/contact"><p className="nav_p">Contact</p></Link>
              </div>
              <div className="col-lg-2 col-xl-3 col-md-6 col-sm-2 search">
              <input type="text" placeholder="&#128269; Search...." className="search_bar"/>
              
              </div>
              <div className="col-lg-2 col-xl-2 col-sm-6 col-md-8 login_details">
                <button className="register" onClick={saveForm}>APPLY NOW</button>
              </div>
              
           </div>
          
        </div>

    <div className="col-lg-12 col-xl-12 about_msg">
       <img src={about_img}/>
       <span className="col-lg-12 col-xl-12 overlay">
          <div className="about_header">
             <div className="about_h1">
               <h1>ABOUT</h1>
             </div>
          </div>
       </span>
    </div>
    
    <div className="about_eimt">
      <div className="d-flex flex-row about_eimt_div" data-aos="fade-up">
        <div className="about_eimt_img">
          <img src={about_gif}/>
        </div>
        <div className="about_eimt_details">
          <h4>ABOUT US</h4>
          <p>We see it as EIMT's responsibility to build an educational sector inspired by yesterday as a promise for tomorrow. Selfless service and dedication sets us apart.

We take the responsibility of EIMT for the future of the students to create an educational sector that invokes the moral values ​​of the past and shapes the future of the present. EIMT has faculty and dedicated members with global perspective and experience.

We encourage mutual respect and positive thinking. We are always willing to provide assistance and guidance to the  job opportunities worldwide . As parents and teachers, it is our commitment to adopt ways and means to channelize the talents and energy of our students into creative community building. With this noble sense of purpose may I request all staff, parents and well wishers to join hands as we take EIMT to greater heights.</p>
        </div>
      </div>
    </div>


    <section className="new_slider">
      <h1>Our Team</h1>
      <AliceCarousel autoPlay autoPlayInterval="3000" >
        <center><img src={logo1} className="sliderimg"/></center>
        <center><img src={logo2} className="sliderimg"/></center>
        <center><img src={logo3} className="sliderimg"/></center>
      </AliceCarousel> 
    </section>

    <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 ins_logo" data-aos="fade-up">
           <h2>Our Team</h2>
           <section className="customer-logos slider">
              <div className="slide logo1"><img className="logo_1" src={logo1} /></div>
              <div className="slide logo2"><img className="logo_2" src={logo2} /></div>
              <div className="slide logo3"><img className="logo_3" src={logo3} /></div>
           </section>
        </div>
        
        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 footer">
            <div className="d-flex flex-row footer_details" id="footer_detail">
              <div className=" footer_logo" data-aos="fade-bottom">
                <img src={logo} />
                <p><em>EIMT aims the transformation <br></br>of a student to professional.</em></p>
              </div>
              <div className="footer_details_1" data-aos="fade-bottom">
              <p className="footer_head">Locations</p>
              <p>ERNAKULAM, KALADY, KALLUMALA, UAE</p>
              <p className="footer_head">Head Office:</p>
              <p>Ebenezer Villa, House No. 16/209A, Piraroor P.O, Kalady<br></br>683574</p>
              </div>
              <div className="col-lg-flex col-xl-flex footer_details_2" data-aos="fade-bottom">
              <p className="footer_head">Quick Links</p>
              <Link style={{ textDecoration: 'none', color: 'black' }} to="/"><p>Home</p></Link>
                <p>About</p>
                <Link style={{ textDecoration: 'none', color: 'black' }} to="/courses"><p>Courses</p></Link>
                <Link style={{ textDecoration: 'none', color: 'black' }} to="/contact"><p>Contact</p></Link>
              </div>
              <div className="footer_details_3" data-aos="fade-bottom">
              <p className="footer_head">Courses</p>
              <p>Language</p>
              <p>Programming</p>
              <p>Musical</p>
              </div>
              <div className="footer_details_4" data-aos="fade-bottom">
              <p className="footer_head">Connect Us</p>
              <p className="social">
              <a href="https://www.instagram.com/eimtindia/"><img src={instagram}/></a>
               <a href="https://www.facebook.com/EIMTINDIAA/"><img src={facebook}/></a>
               <a href="https://twitter.com/eimtindia"><img src={twitter}/></a>
               <a href=""><img src={youtube}/></a>
              </p>
              </div>
            </div>
        </div>
        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 rights">
          <p>© 2022 Copyright. Designed by <a href="https://luc.to/aaron" >ATJ</a></p>
        </div>
        </div>)}
    </section>
   )

}

export default About;