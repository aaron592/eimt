import '../css/Header.css';
import '../css/Admin.css';
import logo from '../images/eimt_final.png';
import {Link} from 'react-router-dom';
import {useEffect ,useState, React} from 'react';
import { PieChart, Pie} from 'recharts';

function Admin(){

  

    let newItems={};

    let [datas, setData] = useState([])

    let [modal,setModal] = useState(false);

    let [messages,setMessage] = useState(null);

    let [courses,setCourses] = useState([])

    const data = [
      {name: courses.course, students: datas.length}
    ];
   

    useEffect(() => {
        fetch("https://eimt-backend.herokuapp.com/data")
        .then((response)=>response.json())
        .then((data)=>{
            // console.log(data);
            setData(data);
        })
        .catch((err)=>{
            console.log(err);
        })

        fetch("https://eimt-backend.herokuapp.com/courses")
      .then((response)=>response.json())
      .then((courseData)=>{
          setCourses(courseData);
      })
      .catch((err)=>{
          console.log(err);
      })
      }, []);
    
      let [menubar,setMenu] = useState(false);
      let [menubar1,setMenu1] = useState(false);

      function addItem(){
        fetch(`https://eimt-backend.herokuapp.com/course`,{
          method:"POST",
          headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(newItems)
        })
        .then((response)=>response.json())
        .then((data)=>{
          setMessage(data.message)
          setTimeout(()=>{
            setMessage(null);
         },8000)
        })
        .catch((err)=>{
          console.log(err);
        })
      }

      function readValue(property,value){
        newItems[property]=value;
      }

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
                     
                     
              <div className="col-lg-2 col-xl-2 col-sm-6 col-md-8 login_details_new">
                <button className="register_new">Logout</button>
              </div>
              </section>
                    ):null}
              
              <div className="col-lg-2 col-xl-3 col-md-3 col-sm-2 menu_div">
                <button className="menu" onClick={()=>{setMenu1(true)}}>☰</button>
              </div>
              {menubar1===true?(
                <section className="cover" onClick={()=>{setMenu1(false)}}>
               
              <div className="col-lg-2 col-xl-2 col-sm-6 col-md-8 login_details_new">
                <button className="register_new">Logout</button>
              </div>
              </section>
              ):null}
              
              <div className="col-lg-2 col-xl-2 col-sm-6 col-md-8 login_details">
                <button className="register">Logout</button>
              </div>
              
           </div>
          
        </div>
          {
            modal===true?
            (
              <div className="add_modal">
           <div className="add_container">
              <div className="add_head">
                 <h3>Add Course</h3>
                 <button onClick={()=>{setModal(false)}}>&#10006;</button>
              </div>
              <div className="add_field">
              {
                messages!==null?(
                          <p> {messages}</p>    
                ):null
              }
                 <input placeholder="Enter course name" onChange={(event)=>{readValue("name", event.target.value)}}/>
                 <input placeholder="Enter image url" onChange={(event)=>{readValue("image", event.target.value)}}/>
                 <input placeholder="Enter description" onChange={(event)=>{readValue("description", event.target.value)}}/>
                 <input placeholder="Enter course type" onChange={(event)=>{readValue("course", event.target.value)}}/>
              </div>
              <div className="add_button">
                <button onClick={()=>{addItem()}}>Submit</button>
              </div>
           </div>
        </div>
            ):null
          }
        

        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 admin_panel">
           <div className="col-lg-2 col-xl-2 col-md-12 col-sm-12 course_nut">
           <PieChart width={100} height={100}>
          <Pie data={data} dataKey="students" outerRadius={50} innerRadius={25} fill="#900C3F" />
        </PieChart>
           </div>
           <div className="col-lg-2 col-xl-2 col-md-12 col-sm-12 course_nut">
           <div className="">
            <h3>&#x1f441;</h3>
           </div>
           <div className="contact_count">
             <h1>{datas.length}</h1><p>Contact Lists</p>
           </div>
           </div>
           <div className="col-lg-3 col-xl-3 col-md-12 col-sm-12 add_btn">
               <button onClick={()=>{setModal(true)}}>Add Course</button>
           </div>
        </div>

        <div className="data_container">
            <div className="data_table">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>Message</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    datas.map((data,index)=>{

                       return(
                        <tr key={index}>
                          <td>{data.username}</td>
                          <td>{data.email}</td>
                          <td>{data.phone}</td>
                          <td>{data.msg}</td>
                        </tr>
                       )                     
 
                    })
                  }
                   
                  </tbody>
                </table>
            </div>

        </div>
    </section>
    )

}

export default Admin;