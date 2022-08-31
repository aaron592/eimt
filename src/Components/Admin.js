import '../css/Header.css';
import '../css/Admin.css';
import logo from '../images/eimt_final.png';
import {Link} from 'react-router-dom';
import {useEffect ,useState} from 'react';

function Admin(){
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
                  <p className="">Home</p>
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
                  <p className="">Home</p>
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
                  <p className="">Home</p>
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
        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 admin_panel">
           <div className="col-lg-3 col-xl-3 col-md-12 col-sm-12 course_nut"></div>
           <div className="col-lg-3 col-xl-3 col-md-12 col-sm-12 course_nut"></div>
           <div className="col-lg-3 col-xl-3 col-md-12 col-sm-12 add_btn">
               <button>Add Course</button>
           </div>
        </div>
    </section>
    )

}

export default Admin;