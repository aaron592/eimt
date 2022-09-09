import {Link} from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import '../css/Header.css';
import '../css/About.css';
import logo from '../images/logo.png';
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

function About(){
  

    useEffect(() => {
        document.head.innerHTML+=`
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        `
      }, []);

      
      let [menubar,setMenu] = useState(false);
      let [menubar1,setMenu1] = useState(false);
    
   return(
    <section>
   <div className="container-fluid">
           <div className="row">
              <div className="col-lg-1 col-xl-2 col-md-3 col-sm-6  logo">
                  <img className="logo_img" src={logo} alt="logo" style={{height:"90%"}}/>
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
                 <button className="register">APPLY NOW</button>  
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
                 <button className="register">APPLY NOW</button> 
              </div>
              </section>
              ):null}
              <div className="col-xl-4 col-sm-6 col-md-8 nav_details">
                  <Link style={{ textDecoration: 'none', color: '#494949' }} to="/"><p className="nav_p">Home</p></Link>
                  <Link style={{ textDecoration: 'none', color: '#494949' }} to="/about"><p className="nav_p">About</p></Link>
                  <Link style={{ textDecoration: 'none', color: '#494949' }} to="/courses"><p className="nav_p">Courses</p></Link>
                  <Link style={{ textDecoration: 'none', color: '#494949' }} to="/contact"><p className="nav_p">Contact</p></Link>
              </div>
              <div className="col-lg-2 col-xl-3 col-md-6 col-sm-2 search">
              <input type="text" placeholder="&#xf3ee; Search...." className="search_bar"/>
              
              </div>
              <div className="col-lg-2 col-xl-2 col-sm-6 col-md-8 login_details">
                <button className="register">APPLY NOW</button>
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
      <div className="d-flex flex-row about_eimt_div">
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

    <div className="vision">
      <h2>Vision</h2>
      <div className="vision_details">
        <p>To attain the best academic standards possible for all students
to help them realise their full potential and to provide
them with the skills they need to contribute positively
to society as productive, moral, responsible, creative and
compassionate citizens</p>
      </div>
    </div>

    <div className="vision">
      <h2>Mision</h2>
      <div className="vision_details">
        <p>EBENEZER INSTITUTE OF MODERN TECHNOLOGY'S Mission
is to advance excellence in technical career and academic
studies so that graduates are ready to enter the workforce
and maintain their competitiveness on worldwide scale.</p>
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

    <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 ins_logo">
           <h2>Our Team</h2>
           <section className="customer-logos slider">
              <div className="slide logo1"><img className="logo_1" src={logo1} /></div>
              <div className="slide logo2"><img className="logo_2" src={logo2} /></div>
              <div className="slide logo3"><img className="logo_3" src={logo3} /></div>
           </section>
        </div>
        
        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 footer">
            <div className="d-flex flex-row footer_details" id="footer_detail">
              <div className=" footer_logo">
                <img src={logo} />
                <p><em>EIMT aims the transformation <br></br>of a student to professional.</em></p>
              </div>
              <div className="footer_details_1">
              <p className="footer_head">Locations</p>
              <p>ERNAKULAM, KALADY, KALLUMALA, UAE</p>
              <p className="footer_head">Head Office:</p>
              <p>SECOND FLOOR, ASHIS BUILDING, MARINE DRIVE HIGH COURT JUNCTION, ERNAKULAM <br></br>682031</p>
              </div>
              <div className="col-lg-flex col-xl-flex footer_details_2">
              <p className="footer_head">Quick Links</p>
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/"><p>Home</p></Link>
                <p>About</p>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/courses"><p>Courses</p></Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/contact"><p>Contact</p></Link>
              </div>
              <div className="footer_details_3">
              <p className="footer_head">Courses</p>
              <p>Language</p>
              <p>Programming</p>
              <p>Musical</p>
              </div>
              <div className="footer_details_4">
              <p className="footer_head">Connect Us</p>
              <p className="social">
              <img src={instagram}/>
              <img src={facebook}/>
              <img src={twitter}/>
              <img src={youtube}/>
              </p>
              </div>
            </div>
        </div>
        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 rights">
          <p>© 2022 Copyright. Designed by <a href="https://luc.to/aaron" >ATJ</a></p>
        </div>
    </section>
   )

}

export default About;