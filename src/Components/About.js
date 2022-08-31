import {Link} from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import '../css/Header.css';
import '../css/About.css';
import logo from '../images/eimt_final.png';
import {useEffect ,useState} from 'react';
import logo1 from '../images/logo1.jpeg';
import logo2 from '../images/logo2.jpeg';
import logo3 from '../images/logo3.jpeg';
import about_img from '../images/preview.jpg';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';

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
              <img className="logo_img" src={logo} alt="logo"/>
              <button className="menu_sm" onClick={()=>{setMenu(true)}}>☰</button>
          </div>
          {menubar===true?(
            <section className="cover" onClick={()=>{setMenu(false)}}>
                  <div className="col-lg-2 col-xl-3 col-md-6 col-sm-2 search_new">
                    <input type="text" placeholder="&#128269; Search for anything...." className="search_bar"/>
                 </div>
                 <div className="col-xl-4 col-sm-6 col-md-8 nav_details_new">
              <Link to="/"><p className="">Home</p></Link>
              <Link to="/about"><p>About</p></Link>
              <Link to="/courses"><p>Courses</p></Link>
              <Link to="/contact"><p className="nav_p">Contact</p></Link>
          </div>
          <div className="col-lg-2 col-xl-2 col-sm-6 col-md-8 login_details_new">
             <button className="register">APPLY NOW</button>
          </div>
          </section>
                ):null}
          <div className="col-lg-2 col-xl-3 col-md-6 col-sm-2 search">
            <input type="text" placeholder="&#128269; Search for anything...." className="search_bar"/>
          </div>
          <div className="col-lg-2 col-xl-3 col-md-3 col-sm-2 menu_div">
            <button className="menu" onClick={()=>{setMenu1(true)}}>☰</button>
          </div>
          {menubar1===true?(
            <section className="cover" onClick={()=>{setMenu1(false)}}>
            <div className="col-xl-4 col-sm-6 col-md-8 nav_details_new">
            <Link to="/"><p className="">Home</p></Link>
              <Link to="/about"><p>About</p></Link>
              <Link to="/courses"><p>Courses</p></Link>
              <Link to="/contact"><p className="nav_p">Contact</p></Link>
          </div>
          <div className="col-lg-2 col-xl-2 col-sm-6 col-md-8 login_details_new">
            <button className="register">APPLY NOW</button>
          </div>
          </section>
          ):null}
          <div className="col-xl-4 col-sm-6 col-md-8 nav_details">
          <Link to="/"><p className="">Home</p></Link>
              <Link to="/about"><p>About</p></Link>
              <Link to="/courses"><p>Courses</p></Link>
              <Link to="/contact"><p className="nav_p">Contact</p></Link>
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
               <h1>ABOUT US</h1>
             </div>
             <div className="text_h">
             <div className="text_head">Dear members and visitors of Ebenezer Institute of Modern Technology family.</div> 
             <div className="text_head"> 
               <span>&nbsp;Welcome to the website. </span>
             </div>
             </div>
          </div>
       </span>
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
              <p><i>Ashis Building ,Marine Drive Hign Court JN, Ernakulam</i> <br></br>682031</p>
              <p className="footer_head">Head Office:</p>
              <p><i>SMICT Piraroor P.O, Kalady, Kerala, India</i> <br></br>683574</p>
              </div>
              <div className="col-lg-flex col-xl-flex footer_details_2">
              <p className="footer_head">Quick Links</p>
                <p>Home</p>
                <Link to="/about"><p>About</p></Link>
                <p>Courses</p>
                <p>Contact</p>
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