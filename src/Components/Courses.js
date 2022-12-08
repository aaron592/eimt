import {Link} from 'react-router-dom';
import '../css/Header.css';
import '../css/Course.css';
import '../css/About.css';
import logo from '../images/eimt_final.png';
import {useEffect ,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';
import about_img from '../images/preview1.png';
import eimt from '../images/logo.png'
import { saveAs } from "file-saver";
import PacmanLoader from "react-spinners/PacmanLoader";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Courses(){

  let [courses,setCourses]= useState([]);
  let [store,setStore]= useState([]);
  const [loading, setLoading] = useState(false);

  const [isLoading, isSetLoading] = useState(false)

  const saveForm = () => {
    saveAs(
      "https://master--iridescent-profiterole-2ab773.netlify.app/application_form.pdf",
      "EIMT-Application-Form.pdf"
    );
  };

  useEffect(()=>{
    
    setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);

      
      AOS.init();

      isSetLoading(true);

      fetch("https://eimt-backend.onrender.com/courses")
      .then((response)=>response.json())
      .then((courseData)=>{
          setCourses(courseData);
          isSetLoading(false);
          setStore(courseData);
      })
      .catch((err)=>{
          console.log(err);
      })

  },[])

  function filterData(course){
      let updatedData = courses.filter((cour)=>{
      return cour.course === course;
    })
    setCourses(updatedData);
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

    
      let [menubar,setMenu] = useState(false);
      let [menubar1,setMenu1] = useState(false);

      let [cour,courModal] = useState(false);

      let [load,setLoadData] = useState({});
      
      
      function readValue(value){
              courses=store;
              setCourses(courses);
              const updatedData = courses.filter((cour)=>{
              return cour.course === value;
          })
          setCourses(updatedData);
        
      }
      
      function courseModal(id){
        fetch(`https://eimt-backend.onrender.com/course/sub/${id}`)
        .then((response)=>response.json())
        .then((data)=>{
        // console.log(data);
        setLoadData(data);
        })
        .catch((err)=>{
        console.log(err);
        })
      }
      const overide = `
      display: block;
      margin: 0 auto;
      border-color: red;
    `;
      
     
    return(
        <section>
        { loading ? (
        <div className="loader-container">
      	  <div className="spinner"></div>
        </div>
      ) : (<div>
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

{
  cour===true?
  (

    <div className="cour_modal_container">
          <div className="cour_modal">
           <div className="close_cont">
              <button onClick={()=>{courModal(false)}}>&#10006;</button>
           </div>
           <div className="d-flex flex-row cour_m">
           <div className="cour_img">
              <img src={load.image} width="100%" height="100%"/>
           </div>
          <div className="cour_details">
               <h3>{load.name}</h3>
               <p>{load.description}</p>
                <p><span>Course type:</span> {load.course}</p>
          </div>
           </div>
          </div>
        </div>
  ):null
}

        <div className="col-lg-12 col-xl-12 about_msg">
       <img src={about_img}/>
       <span className="col-lg-12 col-xl-12 overlay">
          <div className="about_header">
             <div className="about_h1">
               <h1>Explore Our Courses</h1>
             </div>
             
          </div>
       </span>
    </div>
    <div className="lan_qa ">
          <div className="lan_qa1 aos-item aos-init aos-animate">
          <Link style={{ textDecoration: 'none', color: '#C8102E' }} to="/"><h6 style={{fontWeight:'300'}}>Home</h6></Link>
            <h6 style={{color:'#666'}}>&nbsp;  &#8250; &nbsp;</h6>
            <h6 style={{fontWeight:'300'}}>Technical Courses</h6>
          </div>
        </div>


        {/* <div className="filter_container">
           <button onClick={()=>filterData('Programming')}>Programming</button>
           <button onClick={()=>filterData('Graphic Designing')}>Graphic Designing</button>
           <button onClick={()=>filterData('Networking')}>Networking</button>
           <button onClick={()=>filterData('Fashion Designing')}>Fashion Designing</button>
           <button onClick={()=>filterData('Language')}>Language</button>
           <button onClick={()=>filterData('Musical')}>Musical</button>
           <button onClick={()=>filterData('Hotel Management')}>Hotel Management</button>
           <button onClick={()=>filterData('Fire & Safety')}>Fire & Safety</button>
           <button onClick={()=>filterData('Aviation')}>Aviation</button>
        </div> */}
        <div className="course_header_tag" data-aos="fade-up">
           <h2>&#128366; Courses</h2>
          
        </div>

        {
          isLoading===true?
          (
            <div className="override">
            <h6 color={'grey'} isLoading={isLoading} css={{overide}} size={20} >Loading...</h6>
            </div>
          ):(
      <div className="course_container_h">      
        <div className="course_index">
        <div data-aos="fade-up">
           <select class="classic" onChange={(event)=>{readValue(event.target.value)}}>
             <option value="">All Course</option>
             <option value="Programming">Programming Courses</option>
             <option value="Aviation">Aviation Courses</option>
             <option value="Hotel Management">Hotel Management Courses</option>
             <option value="Musical">Musical Courses</option>
             <option value="GD">Graphic Designing</option>
             <option value="NA">Network Administration</option>
             <option value="FD">Fashion Designing</option>
             <option value="DL">Diploma in Logistics & SCM</option>
             </select>
           </div>
           <table>
              <tbody>
                <tr>
                  <td style={{display: 'flex', flexDirection: 'column'}} onClick={()=>{}}>Programming Courses ▾
                    <td>C & C++ Programming</td>
                    <td>Python</td>
                    <td>DBMS</td>
                    <td>SQL</td>
                    <td>Web Designing</td>
                    <td>Artificial Intelligence</td>
                    <td>C# .NET</td>
                  </td>
                  <td style={{display: 'flex', flexDirection: 'column'}} onClick={()=>{}}>Musical Courses ▾
                    <td>Vocal Music</td>
                    <td>Keyboard</td>
                  </td>
                  <td style={{display: 'flex', flexDirection: 'column'}} onClick={()=>{}}>Aviation Courses ▾
                    <td>Aviation & Travel Tourism</td>
                    <td>Aviation Security</td>
                    <td>Aviation Operation</td>
                    <td>Airport Management</td>
                  </td>
                  <td style={{display: 'flex', flexDirection: 'column'}} onClick={()=>{}}>Graphic Designing Courses ▾
                    <td>Adobe Photoshop</td>
                    <td>Adobe Illustrator</td>
                    <td>3D Studio Max</td>
                    <td>MAYA</td>
                  </td>
                  <td style={{display: 'flex', flexDirection: 'column'}} onClick={()=>{}}>Network Administration Courses ▾
                    <td>Windows / Linux</td>
                    <td>Network Engineering</td>
                    <td>Network Security</td>
                    <td>MAYA</td>
                  </td>
                  <td style={{display: 'flex', flexDirection: 'column'}} onClick={()=>{}}>Fashion Designing ▾
                    <td>Fashion & Apparel Design</td>
                    <td>Fashion Design & Technology</td>
                  </td>
                  <td style={{display: 'flex', flexDirection: 'column'}} onClick={()=>{}}>Logistics ▾
                    <td>Diploma in Logistics & Supply Chain Management</td>
                    <td>PG in Logistics & Supply Chain Management</td>
                  </td>
                  <td onClick={()=>{}}>Hotel Management and Tourism Administration</td>
                  <td onClick={()=>{}}>Fire & Safety </td>
                  <td onClick={()=>{}}>Health, Environment & Safety Engineering</td>
                  <td onClick={()=>{}}>VFX & Compositing</td>
                  <td onClick={()=>{}}>CBT</td>

                </tr>
              </tbody>
            </table>
        </div>
            
        <div className="course_container" >
        
          {
            courses.map((course,index)=>{
               return(
                <div className="course_container1" data-aos="fade-up" key={index} onClick={()=>{
                  courseModal(course._id)
                  courModal(true)
                  }}>
              <div className="course_img_cont">
              <img src={course.image} alt={course.name} />
              </div>
              <div className="course_details_cont">
                 <h6 onClick={()=>{
                  courseModal(course._id)
                  courModal(true)
                  }}>{course.name}</h6>
                  <button onClick={()=>{courModal(true)}} className="view_more">VIEW DETAILS</button>
                 <p>{course.description}</p>
              </div>
           </div>
               )
            })
          }
          
        </div>
        </div>
          )
        }

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
              <p><Link to="/language_courses" style={{color:'black'}}>Language</Link></p>
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
          <p>© 2022 <Link to="/login" style={{color:'white'}}>Copyright</Link>. Designed by <a href="https://luc.to/aaron" > ATJ</a></p>
        </div></div>)}
        </section>
    )
}

export default Courses;