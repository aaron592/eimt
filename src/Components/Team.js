import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import { Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../css/Header.css';
import '../css/Team.css';
import eimt from '../images/logo.png'
import banner_1 from '../images/banner.png';
import banner_2 from '../images/banner2.png';
import banner_3 from '../images/banner3.png';
import banner_4 from '../images/banner_4.png';
import logo from '../images/eimt_final.png';
import bannerImage from '../images/banner.gif';
import {useEffect ,useState} from 'react';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';
import '../css/About.css';
import about_img from '../images/preview1.png';
import allen from '../images/allen.png';
import manoj from '../images/Manoj.png';
import anil from '../images/Anil.png';
import cbt from '../images/cbt.png';
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';
  import AOS from 'aos';
  import 'aos/dist/aos.css';

function Team(){
    const [loading, setLoading] = useState(false);

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      
      var settings = {
        dots: true,
        autoplay:true,
        infinite: true,
        speed: 10000,
        slidesToShow: 1,
        slidesToScroll: 1,
        overflow: false,
      };

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
      ) : ( <div>
        <div className="contact_nav">
          <div className="contact_nav_det">
            <div className="contact_nav_det_1">
              <h6>&#x1F4E7; admission@ebenezer-imt.org</h6>
              <h6>&#128222; +91 8943303002</h6>
            </div>
            <div className="contact_nav_det_2">
              <button><Link to='/registration'>FOR REGISTRATION</Link></button>
            </div>
          </div>
        </div>
      <div className="container-fluid">
        
        <div className="row">
              <div className="col-lg-2 col-xl-3 col-md-3 col-sm-6  logo" data-aos="fade-right">
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
                     <p className="dropdown" >
                  <span >About &#x25B2;</span>
                  <div class="dropdown-content" >
                  <Link style={{ textDecoration: 'none', color: '#494949' }} to="/about"> <p className="drop_p" onClick={()=>{setMenu(true)}}>About Us</p></Link>
                      <p>Board</p>
                      <p >Certification</p>
                  </div>
                  </p>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to="/courses"><p className="nav_p">Courses</p></Link>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to="/contact"><p className="nav_p">Contact</p></Link>
              </div>
              {/* <div className="col-lg-2 col-xl-2 col-sm-6 col-md-8 login_details_new">
                 <button className="register" onClick={saveForm}>APPLY NOW</button>  
              </div> */}
              </section>
                    ):null}
              
              <div className="col-lg-2 col-xl-3 col-md-3 col-sm-2 menu_div">
                <button className="menu" onClick={()=>{setMenu1(true)}}>☰</button>
              </div>
              {menubar1===true?(
                <section className="cover" onClick={()=>{setMenu1(false)}}>
                <div className="col-xl-4 col-sm-6 col-md-8 nav_details_new">
                  <Link style={{ textDecoration: 'none', color: 'white' }} to="/"><p className="nav_p">Home</p></Link>
                  <p className="dropdown">
                  <span>About ⮟</span>
                  <div class="dropdown-content">
                  <Link style={{ textDecoration: 'none', color: '#494949' }} to="/about"> <p className="drop_p">About Us</p></Link>
                      <p>Board</p>
                      <p>Certification</p>
                  </div>
                  </p>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to="/courses"><p className="nav_p">Courses</p></Link>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to="/contact"><p className="nav_p">Contact</p></Link>
              </div>
              {/* <div className="col-lg-2 col-xl-2 col-sm-6 col-md-8 login_details_new">
                 <button className="register" onClick={saveForm}>APPLY NOW</button> 
              </div> */}
              </section>
              ):null}
              <div className="col-xl-4 col-sm-6 col-md-8 nav_details" data-aos="fade-left">
                  <Link style={{ textDecoration: 'none', color: '#494949' }} to="/"><p className="nav_p">Home</p></Link>
                  <p className="dropdown">
                  <span className="nav_p">About &#x25BE;</span>
                  <div class="dropdown-content">
                  <Link style={{ textDecoration: 'none', color: '#494949' }} to="/about"> <p className="nav_p drop_p">About Us</p></Link>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to="/vision-mission"><p className="nav_p">Vision & Mission</p></Link>
                      <Link style={{ textDecoration: 'none', color: 'white' }} to="/team"><p className="nav_p">Our Team</p></Link> 
                  </div>
                  </p>
                  <p className="dropdown">
                    <span className="nav_p">Courses &#x25BE;</span>
                    <div class="dropdown-content">
                    <Link style={{ textDecoration: 'none', color: '#494949' }} to="/courses"><p className="nav_p">Technical courses</p></Link>
                    <Link style={{ textDecoration: 'none', color: '#494949' }} to="/language_courses"><p className="nav_p">Language courses</p></Link>  
                    <Link style={{ textDecoration: 'none', color: '#494949' }} to="/language_courses"><p className="nav_p">ELC</p></Link>
                    </div>

                  </p>
                  <Link style={{ textDecoration: 'none', color: '#494949' }} to=""><p className="nav_p">Careers</p></Link>
                  <Link style={{ textDecoration: 'none', color: '#494949' }} to="/contact"><p className="nav_p">Contact Us</p></Link>
              </div>
              <div className="col-lg-2 col-xl-3 col-md-6 col-sm-2 search" data-aos="fade-left">
              <input type="text" placeholder="Search..." className="search_bar fas"/>
              {/* &#xf002; */}
              </div>
              {/* <div className="col-lg-2 col-xl-2 col-sm-6 col-md-8 login_details">
                <button className="register" onClick={saveForm}>APPLY NOW</button>
              </div> */}
              
           </div>
          
        </div>
        
    <div className="col-lg-12 col-xl-12 about_msg">
       <img src={about_img}/>
       <span className="col-lg-12 col-xl-12 overlay">
          <div className="about_header">
             {/* <div className="about_h1">
               <h1>ABOUT</h1>
             </div> */}
          </div>
       </span>
    </div>
    <div className="lan_qa ">
          <div className="lan_qa1 aos-item aos-init aos-animate">
          <Link style={{ textDecoration: 'none', color: '#C8102E' }} to="/"><h6 style={{fontWeight:'300'}}>Home</h6></Link>
            <h6 style={{color:'#666'}}>&nbsp;  &#8250; &nbsp;</h6>
            <h6 style={{fontWeight:'300'}}>Our Team</h6>
          </div>
        </div>
       
        <div className="ac_team">
        <h2>Our Team</h2>
           <div className="ac_team_mem">
             <div className="team">
               <div className="team_img">
                 <img src={anil} />
               </div>
               <div className="team_msg aos-item aos-init aos-animate">
                <div className="team_msg_con">
                <p><span style={{fontWeight:'500',color:'black'}}>Mr. Anil Joseph</span> is a Professional Civil Engg by training, specialized in Industrial Waste Engineering from University of Kerala and also holds a Masters in International Business Development from Southern New Hampshire University in Manchester, NH, USA. Ebenezer is fortunate to have him as our Chief Operations Officer.</p>
                </div>
               </div>
             </div>
             <div className="team">
              <div className="team_img">
                <img src={manoj} />
               </div>
               <div className="team_msg aos-item aos-init aos-animate">
               <div className="team_msg_con">
               <p><span style={{fontWeight:'500',color:'black'}}>Mr. Manoj Kumar</span> Kulashreshta is a dynamic IT professional with wide ranging experience. A Computer Science graduate from University of Greenwich, UK. He was formerly with organizations like BBC World Service UK, Bowaters Paper Co etc. Ebenezer is truly blessed to have an industry veteran like Mr.Manoj as our IT & Systems head.</p>
               </div>
               </div>
             </div>
            
           </div>
        </div> 
        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 footer" >
            <div className="d-flex flex-wrap footer_details" id="footer_detail">
              <div className=" footer_logo" data-aos="fade-bottom">
                <img src={logo} />
                <p><em>EIMT aims the transformation <br></br>of a student to professional.</em></p>
              </div>
              <div className="footer_details_1" data-aos="fade-bottom">
              <p className="footer_head">Locations</p>
              <p>ERNAKULAM, KALADY, KALLUMALA, UAE</p>
              <p className="footer_head">Head Office:</p>
              <p>Second Floor, Ashis Building, Marine Drive<br></br> High Court Junction,<br></br>Kochi 682031</p>
              </div>
              <div className="col-lg-flex col-xl-flex footer_details_2" data-aos="fade-bottom">
              <p className="footer_head">Quick Links</p>
                <p style={{ textDecoration: 'none', color: 'black' }}>Home</p>
                <Link style={{ textDecoration: 'none', color: 'black' }} to="/about"><p>About</p></Link>
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
               <a href="https://www.youtube.com/channel/UCVbfYatZNxURs34xU3HyfLQ"><img src={youtube}/></a>
              </p>
              </div>
            </div>
        </div>
        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 rights">
          <p>© 2022 <Link to="/login">Copyright</Link>. Designed by <a href="https://luc.to/aaron" > ATJ</a></p>
        </div>


        </div> )}

        </section>
    );
}

export default Team;