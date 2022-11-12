import '../css/registration.css';
import {useState} from 'react';

function Registration(){

    const[page1,setPage1] = useState('1');
    const[page2,setPage2] = useState(null);
    const[page3,setPage3] = useState(null);

    const [head1,setHead1] = useState('1');
    const [head2,setHead2] = useState('2');
    const [head3,setHead3] = useState('3');

    const [isActive1, setIsActive1] = useState(true);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);

    function handleClick2(){
      setIsActive2(true);
    }

    function handleClick3(){
      setIsActive3(true);
    }
    
    function headChange1(){
      setHead1('✓');
    }
    function headChange2(){
      setHead2('✓');
    }
    function headChange3(){
      setHead3('✓');
    }

    return(
        <div className="registration_cont">
          <div className="registration_head">
            <div className="step_1_cont">
             <div className="step_1" style={{backgroundColor: isActive1? 'green' : '', color: isActive1? 'white':''}}>
                <h4>{head1}</h4>
             </div>
             <h6>COURSE/PROGRAMME</h6>
            </div>

            <div className="step_1_cont">
             <div className="step_1" style={{backgroundColor: isActive2? 'green' : '', color: isActive2? 'white':''}}>
                <h4>{head2}</h4>
             </div>
             <h6>PERSONAL DETAILS</h6>
            </div>

            <div className="step_1_cont">
             <div className="step_1" style={{backgroundColor: isActive3? 'green' : '', color: isActive3? 'white':''}}>
                <h4>{head3}</h4>
             </div>
             <h6>ACADEMIC QUALIFICATIONS</h6>
            </div>
          </div>
         {page1==='1'?(
            <div className="registration_forms">
             <h4>Course / Programme</h4>
             <div className="registration_form_head">
             <label><input type="checkbox" required/> Fresh (1st Sem) </label>
             <label><input type="checkbox" required/> Lateral (3rd Sem) </label>
             </div>
             
             <div className="registration_form">
             <div className="course_choose">
                <h4>B.Tech</h4>
                <label><input type="checkbox"/> Computer Science & Engineering</label>
                <label><input type="checkbox"/> Mechanical Engineering </label>
                <label><input type="checkbox"/> Electronics & Comm. Engineering  </label>
                <label><input type="checkbox"/> Electrical & Electronics Engineering </label>
                <label><input type="checkbox"/> Civil Engineering </label>
             </div>
             <div className="course_choose">
                <h4>M.Tech </h4>
                <label><input type="checkbox"/> Computer Science & Engineering</label>
                <label><input type="checkbox"/> Mechanical Engineering </label>
             </div>
             <div className="course_choose">
                <h4>Diploma </h4>
                <label><input type="checkbox"/> Mechanical Engineering</label>
                <label><input type="checkbox"/> Electrical Engineering  </label>
                <label><input type="checkbox"/> Civil Engineering  </label>
             </div>
             <div className="course_choose">
                <h4>MBA </h4>
                <label><input type="checkbox"/> HR</label>
                <label><input type="checkbox"/> IB  </label>
                <label><input type="checkbox"/> IT  </label>
                <label><input type="checkbox"/> Finance  </label>
                <label><input type="checkbox"/> Marketing  </label>
             </div>
             <div className="course_choose">
                <h4>Mgmt. /Others </h4>
                <label><input type="checkbox" /> BBA</label>
                <label><input type="checkbox"/> BCA  </label>
             </div>
          </div>
          <div className="course_btn">
                <button type="submit" onClick={()=>{
                    setPage2('2');
                    setPage1(null);
                    handleClick2();
                    headChange1();
                }}>Next</button>
          </div>
        </div>
         ):null}

         {page2==='2'?(<div className="registration_forms">
             <h4>Personal Details</h4>
             <div className="registration_form_head1">
             <input type="text" placeholder="Student’s Name" required/>
             <input type="text" placeholder="Father’s Name" required/>
             <input type="text" placeholder="Mother's Name" required/>
             </div>
             <div className="registration_form_head1">
             <input type="text" placeholder="Email ID" required/>
             <label>Gender:  &nbsp;&nbsp;&nbsp;&nbsp;
             <label> <input type="radio" required/> Male </label>&nbsp;&nbsp;
             <label><input type="radio" required/> Female </label>
             </label>
             <label> Date of Birth: &nbsp;&nbsp;
             <input type="date"  required/>
             </label>
             
             </div>
             <div className="registration_form_head2">
               <input type="text" placeholder="Correspondence Address:" required/>
               <input type="text" placeholder="Permanent Address:" required/>
             </div>
             <div className="registration_form_head1">
               <input type="text" placeholder="Mobile Number" required/>
               <input type="text" placeholder="Nationality" required/>
             </div>
             <div className="registration_form_head1">
             <label>Category: </label>
             <label><input type="checkbox"/> General</label>
             <label><input type="checkbox"/> OBC-I </label>
             <label><input type="checkbox"/> OBC-II</label>
             <label><input type="checkbox"/> SC</label>
             <label><input type="checkbox"/> ST</label>
             </div>
            
          <div className="course_btn">
                <button onClick={()=>{
                    setPage3('3');
                    setPage2(null);
                    setPage1(null);
                    handleClick3();
                    headChange2();
                }}>Next</button>
          </div>
        </div>):null}

        {page3==='3'?(<div className="registration_forms">
             <h4>Academic Qualifications</h4>
             <div className="registration_form_head3">
             <input type="text" value="X (10th)" />
             
             </div>
             <div className="registration_form_head1">
             <select>
               <option>select board</option>
               <option>CBSE</option>
               <option>Kerala State Board</option>
               <option>ICSE</option>
             </select>
             <select>
               <option>select subject</option>
               <option>Science</option>
               <option>Commerce</option>
               <option>Computer - Mathematics</option>
             </select>
             <input type="number" placeholder="Year of completion" required/>
             <input type="number" placeholder="Mark Obtained in %" required/>
             </div>
             <div className="registration_form_head3">
             <input type="text" value="XII (12th)" />
             
             </div>
             <div className="registration_form_head1">
             <select>
               <option>select board</option>
               <option>CBSE</option>
               <option>Kerala State Board</option>
               <option>ICSE</option>
             </select>
             <select>
               <option>select subject</option>
               <option>Science</option>
               <option>Commerce</option>
               <option>Computer - Mathematics</option>
             </select>
             <input type="number" placeholder="Year of completion" required/>
             <input type="number" placeholder="Mark Obtained in %" required/>
             </div>
             <div className="registration_form_head3">
             <input type="text" value="Degree (optional)" />
             
             </div>
             <div className="registration_form_head1">
             <select>
               <option>select board</option>
               <option>CBSE</option>
               <option>Kerala State Board</option>
               <option>ICSE</option>
             </select>
             <select>
               <option>select subject</option>
               <option>Science</option>
               <option>Commerce</option>
               <option>Computer - Mathematics</option>
             </select>
             <input type="number" placeholder="Year of completion" required/>
             <input type="number" placeholder="Mark Obtained in %" required/>
             </div>
             <div className="registration_form_head1">
             <h6 style={{color:'red'}}>Declaration : </h6>
             </div>
             <div className="registration_form_head1">
             
             <label> <input type="checkbox" required/> I  hereby  solemnly  affirm &  declare that I  have read the  contents of  College’s Prospectus  clearly  and have 
understood  the points mentioned in the undertaking. I shall abide by the rules and regulations of the college as 
mentioned in the prospectus and also the changes which may be notified from time to time. I further confirm that 
the information  given in the application form is correct and true to the best of my knowledge & belief. </label>
             </div>
             <div className="registration_form_head1">
               <label>Signature :</label>
             </div>
             <div className="registration_form_head1">
             <input type="text" placeholder="Full Name" required/>
             </div>
          <div className="course_btn">
                <button type="submit" onClick={headChange3}>Submit</button>
          </div>
        </div>):null}
          
        </div>
    )
}

export default Registration;