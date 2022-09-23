import '../css/login.css';
import logo from '../images/logo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){
   let admin ={};
   let navigate = useNavigate();
   let [message,setMessage] = useState(null);

   function readValue(property,value){
      admin[property]=value;
  }

   function login(){
      fetch("https://eimt-backend.herokuapp.com/admin/login",{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(admin)
      })
      .then((response)=>response.json())
      .then((data)=>{
          console.log(data);
          if(data.success===true){
            localStorage.setItem('admin',JSON.stringify(data));
            navigate('/admin');
          }else{
            setMessage(data.message);

            setTimeout(()=>{
              setMessage(null);
            },8000)
          }
      })
      .catch((err)=>{
        console.log(err);
      })
    }

    return(
        <div className="login_container">
           <div className="log_cont">
              <div className="login_img">
                 <img src={logo} />
              </div>
              <div className="login_inp">
                <input type="text" placeholder="User Id" onChange={(event)=>{
                     readValue("name", event.target.value)
                 }}/>
                <input type="password" placeholder="Password" onChange={(event)=>{
                     readValue("password", event.target.value)
                 }}/>
                 {
                  message!==null?
                  (
                       <p>{message}</p>
                  ):
                  null
               }
                <button onClick={()=>{
                           login()
                       }}>Login</button>
              </div>

           </div>

        </div>
    )
}

export default Login;