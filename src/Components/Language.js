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
import lanBanner from '../images/lan_banner.jpeg';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';
import logo from '../images/eimt_final.png';
import lan from '../images/lan_banner.png';
import lang from '../images/lang.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import principal from '../images/principal.png';




function Language(){

    let [menubar,setMenu] = useState(false);
    let [menubar1,setMenu1] = useState(false);
    const [loading, setLoading] = useState(false);

    let[allcourses,setAllCourses]=useState(true);
    let[lanCou,setlanCou]=useState(false);
    let[ielts,setIelts]=useState(null);
    

    let lanCourses=[
      {id:1,lanName:'Advanced English',tutor:'Allen Joseph',desc:'This program will help hone your skills and increase your confidence using the English language in both professional and individual settings.'},
      {id:2,lanName:'Advanced Hindi',tutor:'Allen Joseph',desc:'Hindi is one of India’s official languages.This helps them be efficient in the language and at the same time, easy to travel anywhere in India.'},
      {id:3,lanName:'German',tutor:'Allen Joseph',desc:'Its goal is to help students develop cultural and linguistic competence that allows them to feel comfortable thinking of themselves as users of German, in listening, reading, writing, and speaking. '},
      {id:4,lanName:'Hebrew',tutor:'Allen Joseph',desc:' In this course the student learns: how to read and write using Modern Hebrew script; vocabulary related to immediate environment; basic morphological structures of verbs and nouns only in present tense; and basic grammar and the syntactic structures of simple sentences.'},
      {id:5,lanName:'Spanish',tutor:'Allen Joseph',desc:'Is designed to develop listening, speaking, writing, and reading skills in Spanish as well as cultural competency in the Hispanic world.Students will learn the fundamental structures of the language by engaging in brief conversations.'},
      {id:6,lanName:'French',tutor:'Allen Joseph',desc:'Introduces students to the culture and language of the French-speaking world. Students develop an ability to communicate in real-life situations by acquiring reading, writing, listening, and speaking skills.'},
      {id:7,lanName:'Italian',tutor:'Allen Joseph',desc:'This course teaches the fundamentals of Italian grammar. Students are trained to pronounce Italian correctly, to acquire a small working vocabulary, which they use in conversation and writing, and to read simple Italian.'},
      {id:8,lanName:'IELTS',tutor:'Allen Joseph',desc:'The IELTS course is for students from Intermediate to Advanced levels. It focuses on academic skills, with the goal of preparing students to successfully sit the IELTS test.'},
      {id:9,lanName:'OET',tutor:'Allen Joseph',desc:'The Occupation English Test (OET) is an international English language test designed to assess the language communication skills of healthcare professionals who seek to register and practise in an English-speaking environment.'},
      {id:10,lanName:'PTE',tutor:'Allen Joseph',desc:'The Pearson Test of English (PTE Academic) assesses the Speaking & Writing, Reading and Listening skills, skills of the candidates to ensure that they are capable of studying in the international environment, with a good grasp of the universal language of English.'},
      {id:11,lanName:'Fluency',tutor:'Allen Joseph',desc:'The course focuses on fluency by having students practice speaking, listening, reading, and writing using high volumes of understandable English and constant repetition of words and phrases.'},
      {id:12,lanName:'CBT',tutor:'Allen Joseph',desc:'Students will develop knowledge of various cognitive-behavioral models of common psychological disorders. Students will learn to develop a comprehensive cognitive-behavioral case conceptualization, which will inform treatment monitoring and planning.'}
      
    ]


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
              <h6>&#128222; +91 8943303002</h6>
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
                  <Link style={{ textDecoration: 'none', color: '#494949' }} to="/language_courses"><p className="nav_p">ELC</p></Link>
              </div>
              <div className="col-lg-2 col-xl-3 col-md-6 col-sm-2 search" data-aos="fade-left">
              <input type="text" placeholder="Search...." className="search_bar fas"/>
              
              </div>
              {/* <div className="col-lg-2 col-xl-2 col-sm-6 col-md-8 login_details">
                <button className="register" onClick={saveForm}>APPLY NOW</button>
              </div> */}
              
           </div>
          
        </div>
   
        <div className="lan_banner">
          <img src={lan}/>
        </div>    

        <div className="lan_qa ">
          <div className="lan_qa1 aos-item aos-init aos-animate">
          <Link style={{ textDecoration: 'none', color: '#C8102E' }} to="/"><h6 style={{fontWeight:'300'}}>Home</h6></Link>
            <h6 style={{color:'#666'}}>&nbsp;  &#8250; &nbsp;</h6>
            <h6 style={{fontWeight:'300'}}>Language Courses</h6>
          </div>
        </div>

        {/* <div className="ac_team">
           <div className="ac_team_mem">
             <div className="team">
               <div className="team_img">
                 <img src={allen} />
               </div>
               <div className="team_msg aos-item aos-init aos-animate">
                <div className="team_msg_con">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
               </div>
             </div>
             <div className="team">
              <div className="team_img">
                <img src={manoj} />
               </div>
               <div className="team_msg aos-item aos-init aos-animate">
               <div className="team_msg_con">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               </div>
               </div>
             </div>
             <div className="team">
             <div className="team_msg aos-item aos-init aos-animate">
              <div className="team_msg_con2">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
               </div>
             <div className="team_img">
               <img src={anil} />
              </div>
              
             </div>
             <div className="team">
             <div className="team_msg aos-item aos-init aos-animate">
              <div className="team_msg_con2">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              </div>
             <div className="team_img">
             <img src={simon} />
              </div>
              
             </div>
           </div>
        </div> */}

        <div className="elc_team">
        <div className="d-flex flex-row msg_container">
            <div className="msg_tab" >
                <div className="msg_tab2">
                   <h4>Message from our Director & Principal</h4>
                </div>
            </div>
             <div className="d-flex flex-row msg_tab_cont">
               <div className="msg_tab_img" data-aos="fade-right">
                 <img style={{pointerEvents:"none"}} src={allen}/>
               </div>
               <div className="msg_tab_details" data-aos="fade-left">
                <div className="msg_tab_det_sub">
                  <h5>Mr. Allen Joseph (Ph.D)</h5>
                  <h6>Head of Language Study & Academics</h6>
                  <p>We take the responsibility of EIMT for the future of the students to create an educational sector that invokes the moral values ​​of the past and shapes the future of the present. EIMT has faculty and dedicated members with global perspective and experience.</p>
                </div>
                
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
          <div className="elc_course1">
            <table>
              <tbody>
                <tr>
                  <td onClick={()=>{setAllCourses(true);setIelts(null);setlanCou(false)}}>All Courses</td>
                  <td onClick={()=>{setIelts('IELTS');setlanCou(false);setAllCourses(false)}}>IELTS</td>
                  <td onClick={()=>{setIelts('OET');setlanCou(false);setAllCourses(false)}}>OET</td>
                  <td onClick={()=>{setIelts('PTE');setlanCou(false);setAllCourses(false)}}>PTE</td>
                  <td onClick={()=>{setIelts('Fluency');setlanCou(false);setAllCourses(false)}}>Fluency</td>
                  <td onClick={()=>{setIelts('CBT');setlanCou(false);setAllCourses(false)}}>CBT</td>
                  <td style={{display: 'flex', flexDirection: 'column'}} >Language Courses ▾
                    <td onClick={()=>{setIelts('Advanced English');setlanCou(false);setAllCourses(false)}}>English</td>
                    <td onClick={()=>{setIelts('Advanced Hindi');setlanCou(false);setAllCourses(false)}}>Hindi</td>
                    <td onClick={()=>{setIelts('German');setlanCou(false);setAllCourses(false)}}>German</td>
                    <td onClick={()=>{setIelts('Hebrew');setlanCou(false);setAllCourses(false)}}>Hebrew</td>
                    <td onClick={()=>{setIelts('French');setlanCou(false);setAllCourses(false)}}>French</td>
                    <td onClick={()=>{setIelts('Spanish');setlanCou(false);setAllCourses(false)}}>Spanish</td>
                    <td onClick={()=>{setIelts('Italian');setlanCou(false);setAllCourses(false)}}>Italian</td>

                  {/* <select>
                    <option value="">Language Courses ▾</option>
                    <option value="">English</option>
                    <option value="">Hindi</option>
                    <option value="">German</option>
                    <option value="">Hebrew</option>
                    <option value="">French</option>
                    <option value="">Spanish</option>
                    <option value="">Italian</option>
                  </select> */}
                  </td>

                </tr>
              </tbody>
            </table>
            <div className="elc_cours">
              <img src={lanBanner}/>
            </div>
          </div>
          <div className="elc_course2">
          {lanCourses.map((item, i) => (
                allcourses===true?(
                  <div key={i} className="elc_course2_div">
                  <h4>{item.lanName}</h4>
                  <p>Tutor: {item.tutor}</p>
                  <p>{item.desc}</p>
                  </div>):null
        ))}
          {lanCourses.map((item, i) => (
                ielts===item.lanName?(
                  <div key={i} className="elc_course2_div">
                  <h4>{item.lanName}</h4>
                  <p>Tutor: {item.tutor}</p>
                  <p>{item.desc}</p>
                  </div>):null
        ))}
        {lanCourses.map((item, i) => (
          lanCou===true || item.lanName==='Advanced English' && item.lanName==='Advanced Hindi' && item.lanName==='Spanish' && item.lanName==='Hebrew')?(
                  <div key={i} className="elc_course2_div">
                  <h4>{item.lanName}</h4>
                  <p>Tutor: {item.tutor}</p>
                  <p>{item.desc}</p>
                  </div>):null
        )}
    
            
            {/* <div className="elc_course2_div">
               <h4>Advanced English </h4>
               <p>Tutor: Allen Joseph</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus egestas gravida. Mauris pretium, ipsum nec malesuada feugiat, nibh purus auctor felis, quis aliquam libero nisl ut mi.</p>
            </div>
            <div className="elc_course2_div">
               <h4>Advanced English </h4>
               <p>Tutor: Allen Joseph</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus egestas gravida. Mauris pretium, ipsum nec malesuada feugiat, nibh purus auctor felis, quis aliquam libero nisl ut mi.</p>
            </div>
            <div className="elc_course2_div">
               <h4>Advanced English </h4>
               <p>Tutor: Allen Joseph</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus egestas gravida. Mauris pretium, ipsum nec malesuada feugiat, nibh purus auctor felis, quis aliquam libero nisl ut mi.</p>
            </div>
            <div className="elc_course2_div">
               <h4>Advanced English </h4>
               <p>Tutor: Allen Joseph</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus egestas gravida. Mauris pretium, ipsum nec malesuada feugiat, nibh purus auctor felis, quis aliquam libero nisl ut mi.</p>
            </div>
            <div className="elc_course2_div">
               <h4>Advanced English </h4>
               <p>Tutor: Allen Joseph</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus egestas gravida. Mauris pretium, ipsum nec malesuada feugiat, nibh purus auctor felis, quis aliquam libero nisl ut mi.</p>
            </div>
            <div className="elc_course2_div">
               <h4>Advanced English </h4>
               <p>Tutor: Allen Joseph</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus egestas gravida. Mauris pretium, ipsum nec malesuada feugiat, nibh purus auctor felis, quis aliquam libero nisl ut mi.</p>
            </div>
            <div className="elc_course2_div">
               <h4>Advanced English </h4>
               <p>Tutor: Allen Joseph</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus egestas gravida. Mauris pretium, ipsum nec malesuada feugiat, nibh purus auctor felis, quis aliquam libero nisl ut mi.</p>
            </div>
            <div className="elc_course2_div">
               <h4>Advanced English </h4>
               <p>Tutor: Allen Joseph</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus egestas gravida. Mauris pretium, ipsum nec malesuada feugiat, nibh purus auctor felis, quis aliquam libero nisl ut mi.</p>
            </div>
            <div className="elc_course2_div">
               <h4>Advanced English </h4>
               <p>Tutor: Allen Joseph</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus egestas gravida. Mauris pretium, ipsum nec malesuada feugiat, nibh purus auctor felis, quis aliquam libero nisl ut mi.</p>
            </div>
            <div className="elc_course2_div">
               <h4>Advanced English </h4>
               <p>Tutor: Allen Joseph</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus egestas gravida. Mauris pretium, ipsum nec malesuada feugiat, nibh purus auctor felis, quis aliquam libero nisl ut mi.</p>
            </div>
            <div className="elc_course2_div">
               <h4>Advanced English </h4>
               <p>Tutor: Allen Joseph</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus egestas gravida. Mauris pretium, ipsum nec malesuada feugiat, nibh purus auctor felis, quis aliquam libero nisl ut mi.</p>
            </div> */}
          </div>
          </div>
        </div>

        <div className="admi_div">
           <p className="h2">Admission Hotlines</p>
           <div className="admi_div1">
             <p><span style={{fontWeight:'600',color:'black'}}>Phone:</span> (KL) +914792303002 &nbsp; (KL) +914792303004 &nbsp; (KL) +918943303002</p>
           </div>
           <div className="admi_div1">
             <p><span style={{fontWeight:'600',color:'black'}}>Centre:</span> Nalumukku - Kallumala Rd, Kallumala, Akkanattukara Vardu, Mavelikara, Kerala 690110, India</p>
           </div>
        </div>
        <div className="map_container" data-aos="fade-up">
          <iframe width="100%" height="100%" id="gmap_canvas" src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.0769446918302!2d76.55373481478817!3d9.237416293376473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1a8c2cafe77b213e!2zOcKwMTQnMTQuNyJOIDc2wrAzMycyMS4zIkU!5e0!3m2!1sen!2skw!4v1670065536412!5m2!1sen!2skw" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
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