import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import { Nav, Navbar } from 'react-bootstrap';
import '../css/Header.css';
import logo from '../images/logo.png';
import bannerImage from '../images/banner.gif';
import {useEffect ,useState} from 'react';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';
import principal from '../images/principal.gif';
import director from '../images/director.gif';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




function Header(){
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
    document.head.innerHTML+=`
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, shrink-to-fit=no, user-scalable=0" />
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
              <div className="col-lg-2 col-xl-3 col-md-6 col-sm-2 search">
                <input type="text" placeholder="&#128269; Search for anything...." className="search_bar"/>
              </div>
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
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/"><p className="nav_p">Home</p></Link>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to="/about"><p className="nav_p">About</p></Link>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to="/courses"><p className="nav_p">Courses</p></Link>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to="/contact"><p className="nav_p">Contact</p></Link>
              </div>
              <div className="col-lg-2 col-xl-2 col-sm-6 col-md-8 login_details">
                <button className="register">APPLY NOW</button>
              </div>
              
           </div>
          
        </div>
        <div className="banner">
          <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 banner_1">
            <div className="col-sm-12 banner1_div">
            <p className="tag_cover"><span className="tag">New</span> Becoming a new program</p>
            <h1 className="heading">EBENEZER INSTITUTE OF MODERN TECHNOLOGY</h1>
            <p className="content">EIMT is a Project of Shuwaiter international Charitable Trust for the upliftment of the society through professional education which helps the students to find jobs. EIMT aims the transformation of a student to professional, Our courses are based on helping students from various background to find a job through our professional training and working professionals to upgrade their job to next level.</p>
            <button type="button" className="bro_btn">
              Brochure <span className="download_btn">&#8681;</span>
            </button>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 banner_2">
            <img src={bannerImage}  className="banner_image"/>
          </div>
        </div>
        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 update_field">
        <div className="update_header">
          <p>New Updates</p>
        </div>
        <marquee behavior="scroll" direction="left">ADMISSIONS ARE OPEN.. HURRY UP.. APPLY NOW</marquee>
        </div>

        <div className="what_head">
          <h2>&#127891; What We Does</h2>
        </div>

        <div className="d-flex flex-row prin_tab">
           <div className="d-flex flex-row prin_div">
             <div className="img_right">
                 <img src={principal} />
             </div>
             <div className="msg_left">
                 <div className="regular"><h1>&#10077;</h1>We take the responsibility of EIMT for the future of the students to create an educational sector that invokes the moral values ​​of the past and shapes the future of the present. EIMT has faculty and dedicated members with global perspective and experience.<h6>- Mrs. Sheenamol Joseph</h6></div>
             </div>
           </div>
        </div>

        <div className="d-flex flex-row  prin_tab">
           <div className="d-flex flex-row prin_div">
             <div className="msg_left">
                 <div className="regular"><h1>&#10077;</h1>We see it as EIMT's responsibility to build an educational sector inspired by yesterday as a promise for tomorrow. Selfless service and dedication sets us apart.We encourage mutual respect and positive thinking. We are always willing to provide assistance and guidance to the job opportunities worldwide.<h6>- Bp.Rev.Dr.Simon Peter</h6></div>
             </div>
             <div className="img_right">
                 <img src={director} />
             </div>
           </div>
        </div>

        <div className="new_slide" max-width="720px" >
           <h2 className="slide_head">Most Popular Courses</h2>
        <Slider {...settings}>
          <div className="slide_1">
            <div className="courses_1">
                <div className=" course_1">
                  <div className="course_img">
                    <div className="course_details"><img src="https://www.ciitinstitute.com/images/courses/dotnet1.png" /></div>
                    <div className="course_details1">
                      <p className="course_head">Microsoft .Net </p>
                      <p className="course_p">. NET (dot NET) course is a software developing course, where the developers use dot Net framework and machine level languages to develop different software. It is a free open source platform to develop different types of software applications.</p>
                    </div>
                  </div>
                </div>
                <div className="course_1">
                <div className="course_img">
                    <div className="course_details"><img src="https://www.edarabia.com/wp-content/uploads/2017/03/aviation-foundation-course-140846.jpg" /></div>
                    <div className="course_details1">
                      <p className="course_head">Aviation Course</p>
                      <p className="course_p">The aviation industry, therefore, includes all aspects of air travel and related activities. This would include airlines, aircraft manufacturers, research companies, military aircraft activities, etc. </p>
                    </div>
                  </div>
                </div>
                <div className="course_1">
                <div className="course_img">
                    <div className="course_details"><img src="https://www.mytechmint.com/wp-content/uploads/2020/05/SQL2BTutorials2B-2BShout4Education.png" /></div>
                    <div className="course_details1">
                      <p className="course_head">SQL </p>
                      <p className="course_p">Structured Query Language (SQL) is a commonly used programming language. It is used to manage relational databases, perform operations, and also to carry out several other activities on the data stored on those databases. </p>
                    </div>
                  </div>
                </div>
                <div className="course_1">
                <div className="course_img">
                    <div className="course_details"><img src="https://leapscholar.com/blog/wp-content/uploads/2022/02/shutterstock_1234571242-min-1024x576.png" /></div>
                    <div className="course_details1">
                      <p className="course_head">Hotel Management</p>
                      <p className="course_p">Hotel Management subjects integrally focus on exploring the vast spectrum of Hospitality and Tourism Management and imparting students with the necessary knowledge and skills of handling varied situations with professionalism. </p>
                    </div>
                  </div>
                </div>
                <div className="course_1">
                <div className="course_img">
                    <div className="course_details"><img src="https://media.istockphoto.com/photos/cheerful-fashion-designer-holding-color-swatches-picture-id1343691232?b=1&k=20&m=1343691232&s=170667a&w=0&h=qSIIfS5sit5w9Jb9KQi4MMi_wREWHDKX5IP5I0ULEVo=" /></div>
                    <div className="course_details1">
                      <p className="course_head">Fashion Design & Technology </p>
                      <p className="course_p">Fashion designers innovate and reinvent by studying old and contemporary trends and creating aesthetic designs.</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div>
          <div className="course_1">
          <div className="course_img">
                    <div className="course_details"><img src="https://www.ciitinstitute.com/images/courses/dotnet1.png" /></div>
                    <div className="course_details1">
                      <p className="course_head">Microsoft .Net </p>
                      <p className="course_p">. NET (dot NET) course is a software developing course, where the developers use dot Net framework and machine level languages to develop different software. It is a free open source platform to develop different types of software applications.</p>
                    </div>
                  </div>
          </div>
          <div className="course_1">
          <div className="course_img">
                    <div className="course_details"><img src="https://www.ciitinstitute.com/images/courses/dotnet1.png" /></div>
                    <div className="course_details1">
                      <p className="course_head">Microsoft .Net </p>
                      <p className="course_p">. NET (dot NET) course is a software developing course, where the developers use dot Net framework and machine level languages to develop different software. It is a free open source platform to develop different types of software applications.</p>
                    </div>
                  </div>
          </div>
          <div className="course_1">
          <div className="course_img">
                    <div className="course_details"><img src="https://www.ciitinstitute.com/images/courses/dotnet1.png" /></div>
                    <div className="course_details1">
                      <p className="course_head">Microsoft .Net </p>
                      <p className="course_p">. NET (dot NET) course is a software developing course, where the developers use dot Net framework and machine level languages to develop different software. It is a free open source platform to develop different types of software applications.</p>
                    </div>
                  </div>
          </div> 
          </div>
        </Slider>
      </div>
        
        <div className="contact_div">
          <div className="d-flex flex-row contact_tab">
           <h2>Are You Ready To Start Your <br></br>Course Now</h2>
           <Link style={{ textDecoration: 'none', color: 'white' }} to="/contact"><button className="contact_btn">Contact Us</button></Link>
          </div>
        </div>

        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 footer">
            <div className="d-flex flex-wrap footer_details" id="footer_detail">
              <div className=" footer_logo">
                <img src={logo} />
                <p><em>EIMT aims the transformation <br></br>of a student to professional.</em></p>
              </div>
              <div className="footer_details_1">
              <p className="footer_head">Locations</p>
              <p>Ashis Building ,Marine Drive Hign Court JN, Ernakulam<br></br>682031</p>
              <p className="footer_head">Head Office:</p>
              <p>SMICT Piraroor P.O, Kalady, Kerala, India <br></br>683574</p>
              </div>
              <div className="col-lg-flex col-xl-flex footer_details_2">
              <p className="footer_head">Quick Links</p>
                <p>Home</p>
                <Link style={{ textDecoration: 'none', color: 'black' }} to="/about"><p>About</p></Link>
                <Link style={{ textDecoration: 'none', color: 'black' }} to="/courses"><p>Courses</p></Link>
                <Link style={{ textDecoration: 'none', color: 'black' }} to="/contact"><p>Contact</p></Link>
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
          <p>© 2022 Copyright. Designed by <a href="https://luc.to/aaron" > ATJ</a></p>
        </div>
      </section>
    );
}

export default Header;