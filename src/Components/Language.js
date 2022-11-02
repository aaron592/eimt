import {Link} from 'react-router-dom';
import {useState} from 'react';
import eimt from '../images/eimt.png';
import '../css/Header.css';
import '../css/language.css';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';
import logo from '../images/logo.png';
import lan from '../images/lan_banner.png';




function Language(){

    let [menubar,setMenu] = useState(false);
    let [menubar1,setMenu1] = useState(false);

    return(
         <section>
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
                 {/* <button className="register" onClick={saveForm}>APPLY NOW</button>   */}
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
                 {/* <button className="register" onClick={saveForm}>APPLY NOW</button>  */}
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
              {/* <div className="col-lg-2 col-xl-2 col-sm-6 col-md-8 login_details">
                <button className="register" onClick={saveForm}>APPLY NOW</button>
              </div>
               */}
           </div>
          
        </div>

        <div className="lan_banner">
          <div className="lan_ban_img">
            <img src={lan} />
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
      
        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 footer">
            <div className="d-flex flex-row footer_details" id="footer_detail">
              <div className=" footer_logo" >
                <img src={logo} />
                <p><em>EIMT aims the transformation <br></br>of a student to professional.</em></p>
              </div>
              <div className="footer_details_1" >
              <p className="footer_head">Locations</p>
              <p>ERNAKULAM, KALADY, KALLUMALA, UAE</p>
              <p className="footer_head">Head Office:</p>
              <p>Ebenezer Villa, House No. 16/209A,<br></br>Piraroor P.O, Kalady. 683574</p>
              </div>
              <div className="col-lg-flex col-xl-flex footer_details_2" >
              <p className="footer_head">Quick Links</p>
              <Link style={{ textDecoration: 'none', color: 'black' }} to="/"><p>Home</p></Link>
                <Link style={{ textDecoration: 'none', color: 'black' }} to="/about"><p>About</p></Link>
                <p>Courses</p>
                <Link style={{ textDecoration: 'none', color: 'black' }} to="/contact"> <p>Contact</p></Link>
              </div>
              <div className="footer_details_3" >
              <p className="footer_head">Courses</p>
              <p>Language</p>
              <p>Programming</p>
              <p>Musical</p>
              </div>
              <div className="footer_details_4" >
              <p className="footer_head">Connect Us</p>
              <p className="social">
              <a href="https://www.instagram.com/eveslanguagecentre"><img src={instagram}/></a>
               <a href="https://www.facebook.com/eveslanguagecentre/"><img src={facebook}/></a>
               <a href="https://twitter.com/EvesLanguage/"><img src={twitter}/></a>
               <a href="https://www.youtube.com/channel/UCi2dr4FDVgew1AjFi0tQjGA"><img src={youtube}/></a>
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

export default Language;