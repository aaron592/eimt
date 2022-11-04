import {Link} from 'react-router-dom';
import eimt from '../images/logo.png';
import '../css/Header.css';
import '../css/language.css';
import {useEffect ,useState} from 'react';
import allen from '../images/allen.png';
import manoj from '../images/Manoj.png';
import anil from '../images/Anil.png';
import simon from '../images/simon.png';
import cbt from '../images/cbt.png';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';
import logo from '../images/eimt_final.png';
import lan from '../images/lan_banner.png';
import lang from '../images/lang.png';
import AOS from 'aos';
import 'aos/dist/aos.css';




function Language(){

    let [menubar,setMenu] = useState(false);
    let [menubar1,setMenu1] = useState(false);
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
    },[])

   

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
              <h6>&#128222; +91 9633514295</h6>
            </div>
            <div className="contact_nav_det_2">
              <button>FOR REGISTRATION</button>
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
                      <p className="nav_p">Vision & Mission</p>
                      <p className="nav_p">Our Team</p>
                  </div>
                  </p>
                  <p className="dropdown">
                    <span className="nav_p">Courses &#x25BE;</span>
                    <div class="dropdown-content">
                    <Link style={{ textDecoration: 'none', color: '#494949' }} to="/courses"><p className="nav_p">Technical courses</p></Link>
                      <p className="nav_p">Language courses</p>
                    </div>

                  </p>
                  <Link style={{ textDecoration: 'none', color: '#494949' }} to=""><p className="nav_p">Careers</p></Link>
                  <Link style={{ textDecoration: 'none', color: '#494949' }} to="/contact"><p className="nav_p">Contact Us</p></Link>
              </div>
              <div className="col-lg-2 col-xl-3 col-md-6 col-sm-2 search" data-aos="fade-left">
              <input type="text" placeholder="&#xf002; Search" className="search_bar fas"/>
              
              </div>
              {/* <div className="col-lg-2 col-xl-2 col-sm-6 col-md-8 login_details">
                <button className="register" onClick={saveForm}>APPLY NOW</button>
              </div> */}
              
           </div>
          
        </div>
   
        <div className="lan_banner">
          <img src={lan}/>
        </div>    

        <div className="ac_team">
           <p className="h2">Academic Team</p>
           <div className="ac_team_mem">
             <div className="team">
               <div className="team_img">
                 <img src={allen} />
               </div>
               <div className="team_msg aos-item aos-init aos-animate">
                <div className="team_msg_con">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
               </div>
             </div>
             <div className="team">
              <div className="team_img">
                <img src={manoj} />
               </div>
               <div className="team_msg aos-item aos-init aos-animate">
               <div className="team_msg_con">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
               </div>
               </div>
             </div>
             <div className="team">
             <div className="team_msg aos-item aos-init aos-animate">
              <div className="team_msg_con2">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
               </div>
             <div className="team_img">
               <img src={anil} />
              </div>
              
             </div>
             <div className="team">
             <div className="team_msg aos-item aos-init aos-animate">
              <div className="team_msg_con2">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
              </div>
             <div className="team_img">
             <img src={simon} />
              </div>
              
             </div>
           </div>
        </div>

        <div className="about_elc">
            <p className="h2">What is ELC?</p>
            <div className="about_elc_p">
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
            </div>
        </div>

        <div className="elc_course">
          <p className="h2">Courses Offered</p>
          <div className="elc_courses">
            <div className="elc_lan_course">
              <img src={lang} />
              <div>
                <p>Language Courses</p>
              </div>
            </div>
            <div className="elc_lan_course">
              <img src="https://kcr.ie/wp-content/uploads/2017/12/OET-VS-IELTS-1.png" />
              <div>
                <p>IELTS & OET Training</p>
              </div>
            </div>
            <div className="elc_lan_course">
              <img src={cbt} />
              <div>
                <p>CBT & PTE Training</p>
              </div>
            </div>
          </div>
        </div>

        <div className="admi_div">
           <p className="h2">Admission Hotlines</p>
           <div className="admi_div1">
             <p>Phone: (KL) +914792303002 &nbsp; (KL) +914792303004 &nbsp; (KL) +918943303002</p>
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
              <p>Ebenezer Villa, House No. 16/209A,<br></br> Piraroor P.O, Kalady<br></br>683574</p>
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


      </div>)}
      
    </section>
       
    )
    
}

export default Language;