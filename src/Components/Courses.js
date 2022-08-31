import {Link} from 'react-router-dom';
import '../css/Header.css';
import '../css/Course.css';
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

function Courses(){
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
                  <p>Contact</p>
              </div>
              <div className="col-lg-2 col-xl-2 col-sm-6 col-md-8 login_details_new">
                <button className="login_new">Login</button>
                <button className="register_new">Register</button>
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
                  <p>Contact</p>
              </div>
              <div className="col-lg-2 col-xl-2 col-sm-6 col-md-8 login_details_new">
                <button className="login_new">Login</button>
                <button className="register_new">Register</button>
              </div>
              </section>
              ):null}
              <div className="col-xl-4 col-sm-6 col-md-8 nav_details">
              <Link to="/"><p className="">Home</p></Link>
                  <Link to="/about"><p>About</p></Link>
                  <Link to="/courses"><p>Courses</p></Link>
                  <p>Contact</p>
              </div>
              <div className="col-lg-2 col-xl-2 col-sm-6 col-md-8 login_details">
                <button className="login">Login</button>
                <button className="register">Register</button>
              </div>
              
           </div>
          
        </div>
        <div className="new_slide" max-width="720px" width= "100%">
        <h2 className="slide_head">Programming Courses</h2>
        <Slider {...settings}>
          <div className="slide_1">
            <div className="courses_1">
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
      <div className="new_slide" max-width="720px" width= "100%">
        <h2 className="slide_head">Fashion Designing Courses</h2>
        <Slider {...settings}>
          <div className="slide_1">
            <div className="courses_1">
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
      <div className="new_slide" max-width="720px" width= "100%">
        <h2 className="slide_head">Fire & Safety Courses</h2>
        <Slider {...settings}>
          <div className="slide_1">
            <div className="courses_1">
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
      <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 footer">
            <div className="footer_details">
              <div className="footer_logo">
                <img src={logo} />
                <p><em>EIMT aims the transformation <br></br>of a student to professional.</em></p>
              </div>
              <div className="footer_details_1">
              <p className="footer_head">Locations</p>
              <p><i>Ashis Building ,Marine Drive Hign Court JN, Ernakulam</i> <br></br>682031</p>
              <p className="footer_head">Head Office:</p>
              <p><i>SMICT Piraroor P.O, Kalady, Kerala, India</i> <br></br>683574</p>
              </div>
              <div className="footer_details_2">
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
        </section>
    )
}

export default Courses;