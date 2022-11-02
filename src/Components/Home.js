import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import { Nav, Navbar } from 'react-bootstrap';

import '../css/Header.css';
import eimt from '../images/logo.png'
import banner_1 from '../images/banner.png';
import banner_2 from '../images/banner2.png';
import banner_3 from '../images/banner_3.png';
import banner_4 from '../images/banner_4.png';
import logo from '../images/eimt_final.png';
import bannerImage from '../images/banner.gif';
import {useEffect ,useState} from 'react';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';
import principal from '../images/principal.png';
import director from '../images/director.png';
import elc from '../images/elc.gif';
import {Link} from 'react-router-dom';
import { saveAs } from "file-saver";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Carousel } from 'react-carousel-minimal';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import AOS from 'aos';
import 'aos/dist/aos.css';


// const Carousel = require('react-responsive-carousel').Carousel;
// import '//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css';




function Header(){

  const [loading, setLoading] = useState(false);
  const [msg,setMsg] = useState('director');
  const [hcolor,setColor] = useState(null);
  const [msg1,setMsg1] = useState(null);

  
  
  const saveFile = () => {
    saveAs(
      "https://master--iridescent-profiterole-2ab773.netlify.app/Flyer A5 Fold_M.pdf",
      "EIMT-BROCHURE.pdf"
    );
  };

  const saveForm = () => {
    saveAs(
      "https://master--iridescent-profiterole-2ab773.netlify.app/application_form.pdf",
      "EIMT-Application-Form.pdf"
    );
  };

  
  const data = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: '<button type="button" style="font-weight:500;border:1px solid #D5BF02;border-radius:5px;background-color:#D5BF02;font-size:15px;padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px;" className="bro_btn">DOWNLOAD BROCHURE</button>'
    },
    {
      image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: '<button type="button" style="font-weight:500;border:1px solid #D5BF02;border-radius:5px;background-color:#D5BF02;font-size:15px;padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px;" className="bro_btn">DOWNLOAD BROCHURE</button>'
    }
  ];

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

        <div className="whatsapp_float">
          <a href="https://wa.me/919633514295" target="blank"><img src="https://mrgultimus2.in/wp-content/uploads/2022/01/whatsapp.png" width="180px" className="whatsapp_float_btn"/></a>
        </div>
      <MDBCarousel showControls showIndicators className="h-500">
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={banner_1}
        height="550px"
        alt='...'
      >
        {/* <h5>First slide label</h5> */}
      {/* <button type="button" onClick={saveFile} className="bro_btn">DOWNLOAD BROCHURE</button> */}
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={banner_2}
        alt='...'
      >
        {/* <h5>Second slide label</h5> */}
        {/* <button type="button" onClick={saveFile} className="bro_btn">DOWNLOAD BROCHURE</button> */}
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={banner_3}
        alt='...'
      >
        
      </MDBCarouselItem>
    </MDBCarousel>

       {/* <section className="banner_slide">
        <div>
        <Slider {...settings}>
          <div >
            <img src="https://images.theconversation.com/files/96268/original/image-20150925-17694-1endp65.jpg?ixlib=rb-1.1.0&rect=0%2C88%2C1024%2C496&q=45&auto=format&w=1356&h=668&fit=crop" style={{width:"100%"}}/>
            <div className="image_overlay">

            </div>
          </div>
          <div>
            <img src="https://gumlet.assettype.com/freepressjournal/2022-06/417f026c-11b7-4e6a-9c57-cbf68d8bd039/istockphoto_1024531876_612x612.jpg?format=webp&w=480&dpr=2.6" style={{width:"100%"}}/>
          </div>
          <div>
            <h3>3</h3>
          </div>
        </Slider>
      </div>
      </section> */}

        {/* <div className="banner">
          <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 banner_1">
            <div className="col-sm-12 banner1_div">
            <p className="tag_cover"><span className="tag">New</span> Becoming a new program</p>
            <h1 className="heading">EBENEZER INSTITUTE OF MODERN TECHNOLOGY</h1>
            <p className="content">EIMT is a Project of Shuwaiter international Charitable Trust for the upliftment of the society through professional education which helps the students to find jobs. EIMT aims the transformation of a student to professional, Our courses are based on helping students from various background to find a job through our professional training and working professionals to upgrade their job to next level.</p>
            <a href="https://drive.google.com/file/d/1R4jdskNYe8x8mcAyG1jNgJ2oY82XAnNG/view?usp=sharing" download="https://drive.google.com/file/d/1R4jdskNYe8x8mcAyG1jNgJ2oY82XAnNG/view?usp=sharing"><button type="button" className="bro_btn">
              Brochure <span className="download_btn">&#8681;</span>
            </button></a>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 banner_2">
            <img src={bannerImage}  className="banner_image"/>
          </div>
        </div> */}
        {/* <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 example1">
             <h5>WELCOME TO OUR WEBSITE. &nbsp;ADMISSION STARTED ..... HURRY UP ... APPLY NOW --<a href="https://master--iridescent-profiterole-2ab773.netlify.app/application_form.pdf" download="EIMT-Application-Form.pdf"> ..Click here..</a></h5>
        </div> */}
        <div className="eimt_heading_cont d-flex flex-row">
           <div className="eimt_heading" data-aos="fade-up">
             <div className="eimt_heading_cont_1">
              <h5><span style={{color:"#C70039"}}>EIMT</span> aims the transformation of a student to professional, Our courses are based on helping students from various background to find a job through our professional training and working professionals to upgrade their job to next level. Providing multilingual trainings we also aim them to find better jobs in different countries .</h5>
              <button type="button" onClick={saveFile} className="bro_btn">DOWNLOAD BROCHURE</button>
             </div>
           </div>
           <div className="eimt_apply_cont" data-aos="fade-up">
               <h2>Admission Open</h2>
               <h4>2022 / 2023</h4>
               <button className="register">ENROLL NOW</button>
           </div>
         </div>  


{/* 
         <div className="d-flex flex-row vision_mission_container" data-aos="fade-up">
            <div className="slanding1" >
               <h2>Vision</h2>
               <p>To attain the best academic standards possible for all students
to help them realise their full potential and to provide
them with the skills they need to contribute positively
to society as productive, moral, responsible, creative and
compassionate citizens</p>
            </div>
            <div className="slanding2">
               <h2>Mission</h2>
               <p>EBENEZER INSTITUTE OF MODERN TECHNOLOGY'S Mission
is to advance excellence in technical career and academic
studies so that graduates are ready to enter the workforce
and maintain their competitiveness on worldwide scale.</p>
            </div>
         </div> */}

        <div className="msg_heading" data-aos="fade-up"><h2>Message from the Management</h2></div>
         <div className="d-flex flex-row msg_container">
            <div className="msg_tab" data-aos="fade-right">
                <div className="msg_tab1" onClick={()=>{
                  setMsg("director");
                  setMsg1(null);
                }}>
                   <h2>Director</h2>
                </div>
                <div className="msg_tab1" onClick={()=>{
                  setMsg1("principal")
                  setMsg(null)
                  }}>
                   <h2>Principal</h2>
                </div>
            </div>
            
            {
             msg==="director"?
             <div className="d-flex flex-row msg_tab_cont">
               <div className="msg_tab_img" data-aos="fade-right">
                 <img src={principal}/>
               </div>
               <div className="msg_tab_details" data-aos="fade-left">
                <div className="msg_tab_det_sub">
                  <h5>Mrs. Sheenamol Joseph</h5>
                  <h6>Director</h6>
                  <p>We take the responsibility of EIMT for the future of the students to create an educational sector that invokes the moral values ​​of the past and shapes the future of the present. EIMT has faculty and dedicated members with global perspective and experience.</p>
                </div>
                
               </div>
             </div>:null
            }

            {
              msg1==="principal"?
              
             <div className="d-flex flex-row msg_tab_cont">
               <div className="msg_tab_img" data-aos="fade-right">
                 <img src={director}/>
               </div>
               <div className="msg_tab_details" data-aos="fade-left">
                <div className="msg_tab_det_sub">
                  <h5>Bp.Rev.Dr.Simon Peter</h5>
                  <h6>Principal</h6>
                  <p>We see it as EIMT's responsibility to build an educational sector inspired by yesterday as a promise for tomorrow. Selfless service and dedication sets us apart.We encourage mutual respect and positive thinking. We are always willing to provide assistance and guidance to the job opportunities worldwide.</p>
                </div>
                
               </div>
             </div>:null
            }            
         </div>

         <div className="elc_content">
            <div className="elc_content_tab">
              <div className="elc_content_msg">
                <p className="h2">We offer best courses having good scope in the future.</p>
                <p className="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <button className="btn_know">Know More</button>
                <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="elc_content_img">
                <img src={elc}/>
              </div>
            </div>
         </div>

         {/* <div className="test_container">
               <div className="test_cont1" data-aos="fade-up">
                 <p></p>
                 <h2>Message From Our Director & Principal</h2>
                 <button className="register">Read More</button>
               </div>
          <div className="d-flex flex-row test_main">
            <div className="test_cont2 aos-animate" data-aos="fade-up" >
               <div className="test_img">
                  <img src={principal} />
               </div>
               <div className="test_text">
                   <h1>&#10077;</h1>
                   <p>We take the responsibility of EIMT for the future of the students to create an educational sector that invokes the moral values ​​of the past and shapes the future of the present. EIMT has faculty and dedicated members with global perspective and experience.</p>
               </div>
               <div className="test_head">
                   <h6>Mrs. Sheenamol Joseph</h6>
                   <p>Director</p>
               </div>
            </div>
            <div className="test_cont2" data-aos="fade-up">
            <div className="test_img">
                  <img src={director} />
               </div>
               <div className="test_text">
                   <h1>&#10077;</h1>
                   <p>We see it as EIMT's responsibility to build an educational sector inspired by yesterday as a promise for tomorrow. Selfless service and dedication sets us apart.We encourage mutual respect and positive thinking.<span>We are always willing to provide assistance and guidance to the job opportunities worldwide</span> </p>
               </div>
               <div className="test_head">
                   <h6>Bp.Rev.Dr.Simon Peter</h6>
                   <p>Principal</p>
               </div>
            </div>
            </div>
         </div> */}


        {/* <div className="d-flex flex-row prin_tab">
           <div className="d-flex flex-row prin_div">
             <div className="img_right">
                 <img src={principal} />
             </div>
             <div className="msg_left">
                 <div className="regular"><h3>Message From Our Director</h3><h1>&#10077;</h1>We take the responsibility of EIMT for the future of the students to create an educational sector that invokes the moral values ​​of the past and shapes the future of the present. EIMT has faculty and dedicated members with global perspective and experience.<h6>- Mrs. Sheenamol Joseph</h6></div>
             </div>
           </div>
        </div>

        <div className="d-flex flex-row  prin_tab">
           <div className="d-flex flex-row prin_div">
             <div className="msg_left">
                 <div className="regular"><h3>Message From Our Principal</h3><h1>&#10077;</h1>We see it as EIMT's responsibility to build an educational sector inspired by yesterday as a promise for tomorrow. Selfless service and dedication sets us apart.We encourage mutual respect and positive thinking. We are always willing to provide assistance and guidance to the job opportunities worldwide.<h6>- Bp.Rev.Dr.Simon Peter</h6></div>
             </div>
             <div className="img_right">
                 <img src={director} />
             </div>
           </div>
        </div> */}



        {/* <div className="new_slide" max-width="" data-aos="fade-up">
           <h2 className="slide_head">Popular Courses</h2>
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
      </div> */}
        
        {/* <div className="contact_div">
          <div className="d-flex flex-row contact_tab" data-aos="fade-up">
           <h2>Are You Ready To Start Your <br></br>Course Now</h2>
           <Link style={{ textDecoration: 'none', color: 'white' }} to="/contact"><button className="contact_btn">Contact Us</button></Link>
          </div>
        </div> */}

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
        </div></div>)}
        
      
      </section>
    );
}

export default Header;