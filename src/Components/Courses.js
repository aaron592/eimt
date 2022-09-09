import {Link} from 'react-router-dom';
import '../css/Header.css';
import '../css/Course.css';
import '../css/About.css';
import logo from '../images/logo.png';
import {useEffect ,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';
import about_img from '../images/preview.jpg';


function Courses(){

  let [courses,setCourses]= useState([]);

  useEffect(()=>{
      fetch("https://eimt-backend.herokuapp.com/courses")
      .then((response)=>response.json())
      .then((courseData)=>{
          setCourses(courseData);
      })
      .catch((err)=>{
          console.log(err);
      })

  },[])


  function filterData(course){
    const updatedData = courses.filter((cour)=>{
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
               <h1>Explore Our Courses</h1>
             </div>
             
          </div>
       </span>
    </div>


        <div className="filter_container">
           <button onClick={()=>filterData('Programming')}>Programming</button>
           <button onClick={()=>filterData('Graphic Designing')}>Graphic Designing</button>
           <button onClick={()=>filterData('Networking')}>Networking</button>
           <button onClick={()=>filterData('Fashion Designing')}>Fashion Designing</button>
           <button onClick={()=>filterData('Language')}>Language</button>
           <button onClick={()=>filterData('Musical')}>Musical</button>
           <button onClick={()=>filterData('Hotel Management')}>Hotel Management</button>
           <button onClick={()=>filterData('Fire & Safety')}>Fire & Safety</button>
           <button onClick={()=>filterData('Aviation')}>Aviation</button>
        </div>
        <div className="course_header_tag">
           <h2>&#128366; Courses</h2>
        </div>
        <div className="course_container">
          {
            courses.map((course,index)=>{
               return(
                <div className="course_container1" key={index}>
              <div className="course_img_cont">
              <img src={course.image} alt={course.name} />
              </div>
              <div className="course_details_cont">
                 <h6>{course.name}</h6>
                 <p>{course.description}</p>
              </div>
           </div>
               )
            })
          }
          
        </div>

        

        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 footer">
            <div className="d-flex flex-row footer_details" id="footer_detail">
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
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/"><p>Home</p></Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/about"><p>About</p></Link>
                <p>Courses</p>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/contact"> <p>Contact</p></Link>
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
    )
}

export default Courses;