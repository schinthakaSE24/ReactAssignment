import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const EmpCreate = () => {

    const [empNo, setNum] = useState("");
    const [empName, setName] = useState("");
    const [empAddressLine1, setadd1] = useState("");
    const [empAddressLine2, setadd2] = useState("");
    const [empAddressLine3, setadd3] = useState("");
    const [departmentCode, setCode] = useState();
    const [dateOfJoin, setDate1] = useState("");
    const [dateOfBirth, setDate2] = useState("");
    const [basicSalary, setSal] = useState(0);
    const [ active, setAct] = useState("");

  

  


   const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const empdata={empNo,empName,empAddressLine1,empAddressLine2,empAddressLine3,departmentCode,dateOfJoin,dateOfBirth,basicSalary,active};
      
    
      axios.post("/api/v1.0/Employee",{
        method:"POST",
        headers:{
            'apiToken': "?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf",
         
        },
        body:JSON.stringify(empdata)
       
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/');
      
      }).catch((err)=>{
        console.log(err.message)
      })

    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h2>Employee Creation</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Employee Number</label>
                                            <input type="number"value={empNo} onChange={e=>setNum(e.target.value)} className="form-control"></input>
                                        
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Employee Name</label>
                                            <input type="text" value={empName}   onChange={e=>setName(e.target.value)} className="form-control"></input>
                                           
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Employee AddressLine1</label>
                                            <input value={empAddressLine1} type="text" onChange={e=>setadd1(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Employee AddressLine2</label>
                                            <input value={empAddressLine2} type="text" onChange={e=>setadd2(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Employee AddressLine3</label>
                                            <input value={empAddressLine3} type="text" onChange={e=>setadd3(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Departmentcode</label>
                                            <input value={departmentCode} type="text" onChange={e=>setCode(e.target.value)} placeholder="HNB" className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Date OF Join</label>
                                            <input value={dateOfJoin} type="date" onChange={e=>setDate1(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Date OF Birth</label>
                                            <input value={dateOfBirth} type="date" onChange={e=>setDate2(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Basic Salary</label>
                                            <input value={basicSalary} type="text" onChange={e=>setSal(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-check">
                                        <input checked={active} onChange={e=>setAct(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label  className="form-check-label">Is Active</label>
                                            
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="btn btn-success" type="submit">Save</button>
                                           <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default EmpCreate;