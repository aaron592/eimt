import '../css/Header.css';
import '../css/About.css';
import '../css/contact.css';
import {useEffect ,useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/eimt_final.png';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';
import about_img from '../images/preview.jpg';


function Contact(){
    
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
                  <p className="nav_p">Home</p>
                  <Link to="/about"><p className="nav_p">About</p></Link>
                  <Link to="/courses"><p className="nav_p">Courses</p></Link>
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
                  <p className="nav_p">Home</p>
                  <Link to="/about"><p className="nav_p">About</p></Link>
                  <Link to="/courses"><p className="nav_p">Courses</p></Link>
                  <Link to="/contact"><p className="nav_p">Contact</p></Link>
              </div>
              <div className="col-lg-2 col-xl-2 col-sm-6 col-md-8 login_details_new">
                 <button className="register">APPLY NOW</button> 
              </div>
              </section>
              ):null}
              <div className="col-xl-4 col-sm-6 col-md-8 nav_details">
                  <p className="nav_p">Home</p>
                  <Link to="/about"><p className="nav_p">About</p></Link>
                  <Link to="/courses"><p className="nav_p">Courses</p></Link>
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
               <h1>Contact Us</h1>
             </div>
             <div className="text_h">
             <div className="text_head">Get in touch</div> 
             <div className="text_head"> 
               <span>&nbsp;and let us know how we can help you</span>
             </div>
             </div>
          </div>
       </span>
    </div>

      <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 contact_form">
         <div className="contact_form_div">
             <div className="contact_form_div1">
             <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Ashis%20Building%20,Marine%20Drive%20Hign%20Court%20JN,%20Ernakulam%20682031&t=&z=19&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
             </div>
             <div className="contact_form_div2">
               <h2>Contact Form</h2>

               <input type="text"/>
               <input type="text"/>
               <input type="text"/>
               <input type="text"/>
               <button>Submit</button>

             </div>
         </div>
      </div>

      <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 contact_divs">
        <div className="contact">
          <div className="col-lg-3 col-xl-3 col-md-12 col-sm-6 contact_tabs">
             <div className="contact_logo1">
                <img src="https://openclipart.org/image/800px/234349"/>
             </div>
             <div className="contact_details1">
                  <div className="locations">
                      <h6>Head Office</h6>
                      <p>SMICT Piraroor P.O, Kalady, Kerala, India 683574</p>
                      <h6>Centre</h6>
                      <p>Ashis Building ,Marine Drive Hign Court JN, Ernakulam 682031</p>
                  </div>
             </div>

          </div>
          <div className="col-lg-3 col-xl-3 col-md-12 col-sm-6 contact_tabs">
          <div className="contact_logo1">
                <img src="https://portcities.net/web/image/11572/Homepage_Illu_2.png"/>
             </div>
             <div className="contact_details1">
                  <div className="locations">
                      <h6>Email</h6>
                      <p>ebenzer2022@gmail.com</p>
                      <h6>Phone number</h6>
                      <p>+91 963738783</p>
                      <h6>Landline</h6>
                      <p>0479 2495952</p>
                  </div>
             </div>
          </div>
          
       </div>
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
    );
}

export default Contact;