import '../css/Header.css';
import '../css/Admin.css';
import logo from '../images/eimt_final.png';
import {Link} from 'react-router-dom';
import {useEffect ,useState, React,useRef} from 'react';
import { PieChart, Pie} from 'recharts';
import {Chart as ChartJS, BarElement,ArcElement,Tooltip,Legend ,CategoryScale, LinearScale} from 'chart.js';
import {Bar,Doughnut} from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,Tooltip,Legend
)

function Admin(){
  
  let navigate = useNavigate();
  let token=useRef(JSON.parse(localStorage.getItem("admin")).token);
  // console.log(token.current)
  
  const [chart, setChart] = useState([])

  let courseUrl = "https://eimt-backend.herokuapp.com/courses"
// console.log(chart.filter(x => x.course === 'Hotel Management').length);
   var data2= {
    labels: ['Programming','Aviation','Hotel Management','Dubbing'],
    datasets: [{
        label: '5 of Votes',
        data : [chart.filter(x => x.course === 'Programming').length,chart.filter(x => x.course === 'Aviation').length,chart.filter(x => x.course === 'Hotel Management').length,chart.filter(x => x.course === 'Dubbing').length],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
}
 var options= {
  maintainAspectRatio: false,
  scales: {
      y: {
          beginAtZero: true
      }
  }, 
  legend:{
    labels:{
      fontSize: 26
    }
  }
}

const logout = () => {
  localStorage.removeItem('admin');
  navigate('/login');
  
};

    let newItems={};

    let [datas, setData] = useState([])

    let [modal,setModal] = useState(false);

    let [messages,setMessage] = useState(null);

    let [courses,setCourses] = useState([])

    const data = [
      {name: courses.course, students: datas.length}
    ];
   

    useEffect(() => {

        readValue();
        fetch("https://eimt-backend.herokuapp.com/data",{
          method:"GET",
          headers:{
              "Authorization": `Bearer ${token.current}`
          }
      })
        .then((response)=>response.json())
        .then((data)=>{
            // console.log(data);
            setData(data);
        })
        .catch((err)=>{
            console.log(err);
        })

        const fetchCourses = async()=>{
          await fetch(`${courseUrl}`,{
            method: 'GET',
            headers:{
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          }).then((response)=>{
            response.json().then((json)=>{
              setChart(json);
            })
          }).catch(error=>{
            console.log(error);
          })
        }

        fetchCourses();

      //   fetch("https://eimt-backend.herokuapp.com/courses")
      // .then((response)=>response.json())
      // .then((courseData)=>{
      //     setCourses(courseData);
      // })
      // .catch((err)=>{
      //     console.log(err);
      // })
      }, [courseUrl]);
    
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
                <button className="register_new" onClick={()=>{logout()}}>Logout</button>
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
                <button className="register" onClick={()=>{logout()}}>Logout</button>
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
               <Bar 
               data={data2}
               height={100}
               options={options}
               />
           </div>
           <div className="col-lg-2 col-xl-2 col-md-12 col-sm-12 course_nut">
               <Doughnut
                 data={data2}
               height={100}
               options={options}
               />
           </div>
           <div className="col-lg-2 col-xl-2 col-md-12 col-sm-12 course_nut1">
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