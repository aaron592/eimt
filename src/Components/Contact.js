import '../css/Header.css';
import '../css/About.css';
import '../css/contact.css';
import {useEffect ,useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';
import about_img from '../images/preview.jpg';
import eimt from '../images/eimt.png';
import { saveAs } from "file-saver";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Contact(){
   
  const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);

      AOS.init();
        document.head.innerHTML+=`
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        `
      }, []);

      const saveForm = () => {
        saveAs(
          "https://master--iridescent-profiterole-2ab773.netlify.app/application_form.pdf",
          "EIMT-Application-Form.pdf"
        );
      };
    
      let [menubar,setMenu] = useState(false);
      let [menubar1,setMenu1] = useState(false);
      let [messages,setMessage] = useState(null);

      let newMovie={};

      function readValue(property,value){
          newMovie[property]=value;
      }

      function addForm(){
        fetch("https://eimt-backend.herokuapp.com/submit",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(newMovie)
        })
        .then((response)=>response.json())
        .then((response)=>{
          setMessage(response.message);
            setTimeout(()=>{
              setMessage(null);
           },8000)
        })
        .catch((err)=>{
            console.log(err);
        })
      }

    return(
        <section>
        { loading ? (
        <div className="loader-container">
      	  <div className="spinner"></div>
        </div>
      ) : (<div>
        <div className="container-fluid">
           <div className="row">
              <div className="col-lg-2 col-xl-3 col-md-3 col-sm-6  logo">
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
                  <Link style={{ textDecoration: 'none', color: 'white' }} to="/about"><p className="nav_p">About</p></Link>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to="/courses"><p className="nav_p">Courses</p></Link>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to="/contact"><p className="nav_p">Contact</p></Link>
              </div>
              <div className="col-lg-2 col-xl-2 col-sm-6 col-md-8 login_details_new">
                 <button className="register" onClick={saveForm}>APPLY NOW</button>  
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
                 <button className="register" onClick={saveForm}>APPLY NOW</button> 
              </div>
              </section>
              ):null}
              <div className="col-xl-4 col-sm-6 col-md-8 nav_details">
                  <Link style={{ textDecoration: 'none', color: '#494949' }} to="/"><p className="nav_p">Home</p></Link>
                  <p className="dropdown">
                  <span className="nav_p">About ⮟</span>
                  <div class="dropdown-content">
                  <Link style={{ textDecoration: 'none', color: '#494949' }} to="/about"> <p className="nav_p drop_p">About Us</p></Link>
                      <p className="nav_p">Board</p>
                      <p className="nav_p">Certification</p>
                  </div>
                  </p>
                  <Link style={{ textDecoration: 'none', color: '#494949' }} to="/courses"><p className="nav_p">Courses</p></Link>
                  <Link style={{ textDecoration: 'none', color: '#494949' }} to="/contact"><p className="nav_p">Contact</p></Link>
              </div>
              <div className="col-lg-2 col-xl-3 col-md-6 col-sm-2 search">
              <input type="text" placeholder="&#128269; Search...." className="search_bar"/>
              
              </div>
              <div className="col-lg-2 col-xl-2 col-sm-6 col-md-8 login_details">
                <button className="register" onClick={saveForm}>APPLY NOW</button>
              </div>
              
           </div>
          
        </div>

           <div className="col-lg-12 col-xl-12 about_msg">
       <img src={about_img}/>
       <span className="col-lg-12 col-xl-12 overlay">
          <div className="about_header">
             <div className="about_h1">
               <h1>Contact Us</h1>
             </div>
             
          </div>
       </span>
    </div>

    <div className="contact_head" data-aos="fade-up">
       <h2 >Get In Touch</h2>
       <p>To get in touch with us, feel free to mail or call and our team will get back to you at an earliest.</p>
       <div className="d-flex flex-row contact_divs_cont">
          <div className="contact_div_cont1">
             <h6>Head Office:</h6>
             <p>Ebenezer Villa, House No. 16/209A,Piraroor P.O, Kalady<br></br>683574</p>
          </div>
          <div className="contact_div_cont1">
              <h6>For general inquiries:</h6>
              <p>+91 8590 745 911</p>
              <p>+91 9744 914 308</p>
          </div>
          <div className="contact_div_cont1">
          <h6>For email inquiries:</h6>
          <p style={{color:"green"}}>Send us your query anytime!</p>
          <p>admission@ebenezer-imt.org</p>
          </div>
       </div>
    </div>

    <div className="contact_form_cont" data-aos="fade-up">
        <h2>Contact Us</h2>
        <p>For registration questions please get in touch using the contact form below.</p>
        <div className="d-flex flex-row contact_form_container">
           <div className="contact_form_container1">
           <input type="text" placeholder="First Name" onChange={(event)=>{
                          readValue("username",event.target.value);}}/>
               <input type="email" placeholder="Your Email Address" onChange={(event)=>{
                          readValue("email",event.target.value);
                      }
                      }/>
               <input type="text" placeholder="Phone" onChange={(event)=>{
                          readValue("phone",event.target.value);
                      }
                      }/>

           </div>
           <div className="contact_form_container2">
           <textarea type="text" placeholder="Message" onChange={(event)=>{
                          readValue("msg",event.target.value);
                      }
                      }></textarea>
                        {
                          messages!==null?(
                          <div className="toast_div">
                          {messages}
                          {/* <img src="https://www.pngall.com/wp-content/uploads/2016/07/Success-PNG-Image.png"/> */}
                          </div>
                        ):null
                      }
               <button onClick={()=>{addForm();}}>Submit</button>
           </div>

        </div>

    </div>
      {/* <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 contact_form">
         <div className="d-flex flex-row contact_form_div">
             <div className="contact_form_div1">
                <h6>CONTACT US</h6>
                <h1>If You Have Any Query, Please Contact Us</h1>
                <p>For registration questions please get in touch using the contact details below. For any questions use the form.To get in touch with us, feel free to mail or call and our team will get back to you at an earliest.</p>
                <div className="contact_build">
                  <div><h2>&#127970;</h2></div>
                  <div>
                    <h6>Office Address</h6>
                    <p>Ebenezer Villa, House No. 16/209A, Piraroor P.O, Kalady<br></br>683574</p>
                  </div>
                </div>
                <div className="contact_build">
                  <div><h2>	&#128241;</h2></div>
                  <div>
                    <h6>+91 8590 745 911 , +91 9744 914 308</h6>
                    <p>Mon to Fri 9am to 6pm</p>
                  </div>
                </div>
                <div className="contact_build">
                  <div><h2>	&#x2709;</h2></div>
                  <div>
                    <h6>admission@ebenezer-imt.org</h6>
                    <p>Send us your query anytime!</p>
                    
                  </div>
                </div>
             </div>
             <div className="contact_form_div2">
               <h2>Get In Touch</h2>
               <input type="text" placeholder="First Name" onChange={(event)=>{
                          readValue("username",event.target.value);}}/>
               <input type="email" placeholder="Your Email Address" onChange={(event)=>{
                          readValue("email",event.target.value);
                      }
                      }/>
               <input type="text" placeholder="Phone" onChange={(event)=>{
                          readValue("phone",event.target.value);
                      }
                      }/>
               <input type="text" placeholder="Message" onChange={(event)=>{
                          readValue("msg",event.target.value);
                      }
                      }/>
                        {
                          messages!==null?(
                          <div className="toast_div">
                          {messages}
                          
                          </div>
                        ):null
                      }
               <button onClick={()=>{addForm();}}>Submit</button>

             </div>
         </div>
      </div> */}

{/* 
      <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 contact_divs">
        <div className="d-flex flex-row contact">
          <div className="col-lg-3 col-xl-3 col-md-12 col-sm-12 contact_tabs">
             <div className="contact_logo1">
                <img src="https://openclipart.org/image/800px/234349"/>
             </div>
             <div className="contact_details1">
                  <div className="locations">
                      <h6>Branches</h6>
                      <p>ERNAKULAM, KALADY, KALLUMALA, UAE</p>
                      <h6>Head Office</h6>
                      <p>Ebenezer Villa, House No. 16/209A, Piraroor P.O, Kalady<br></br>683574</p>
                  </div>
             </div>

          </div>
          <div className="col-lg-3 col-xl-3 col-md-12 col-sm-12 contact_tabs">
          <div className="contact_logo1">
                <img src="https://portcities.net/web/image/11572/Homepage_Illu_2.png"/>
             </div>
             <div className="contact_details1">
                  <div className="locations">
                      <h6>Email Address</h6>
                      <p>admission@ebenezer-imt.org</p>
                      <h6>Phone Number</h6>
                      <p>+91 8590 745 911</p>
                      <p>+91 9744 914 308</p>
                  </div>
             </div>
          </div>
          
       </div>
      </div>       */}

          <div className="map_container" data-aos="fade-up">
          <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Ashis%20Building%20,Marine%20Drive%20Hign%20Court%20JN,%20Ernakulam%20682031&t=&z=19&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </div>
           <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 footer">
            <div className="d-flex flex-row footer_details" id="footer_detail">
              <div className=" footer_logo" data-aos="fade-bottom">
                <img src={logo} />
                <p><em>EIMT aims the transformation <br></br>of a student to professional.</em></p>
              </div>
              <div className="footer_details_1" data-aos="fade-bottom">
              <p className="footer_head">Locations</p>
              <p>ERNAKULAM, KALADY, KALLUMALA, UAE</p>
              <p className="footer_head">Head Office:</p>
              <p>Ebenezer Villa, House No. 16/209A, Piraroor P.O, Kalady<br></br>683574</p>
              </div>
              <div className="col-lg-flex col-xl-flex footer_details_2" data-aos="fade-bottom">
              <p className="footer_head">Quick Links</p>
                <Link style={{ textDecoration: 'none', color: 'black' }} to="/"><p>Home</p></Link>
                <Link style={{ textDecoration: 'none', color: 'black' }} to="/about"><p>About</p></Link>
                <Link style={{ textDecoration: 'none', color: 'black' }} to="/courses"><p>Courses</p></Link>
                <p>Contact</p>
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
               <a href=""><img src={youtube}/></a>
              </p>
              </div>
            </div>
        </div>
        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 rights">
          <p>© 2022 Copyright. Designed by <a href="https://luc.to/aaron" >ATJ</a></p>
        </div>
        </div>)}
        </section>
    );
}

export default Contact;