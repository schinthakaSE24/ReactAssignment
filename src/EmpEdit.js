import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EmpEdit = () => {
    const  {empId}  = useParams()
    useEffect(() =>{
        axios.get("/api/v1.0/Employee/" + empId,{
            headers:{
                "apiToken":"?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf",
            }
    }).then((resp) => {
            empNochange(resp.empNo);
            empNamechange(resp.empName);
            empAddressLine1change(resp.empAddressLine1);
            empAddressLine2change(resp.empAddressLine2);
            empAddressLine3change(resp.empAddressLine3);
            departmentCodechange(resp.departmentCode);
            dateOfJoinchange(resp.dateOfJoin);
            dateOfBirthchange(resp.dateOfBirth);
            basicSalarychange(resp.basicSalary);
            activechange(resp.isActive);
        }).catch((err) => {
            console.log(err.message);
        })
    
    },[]);

    const [empNo, empNochange] = useState("");
    const [empName, empNamechange] = useState("");
    const [empAddressLine1, empAddressLine1change] = useState("");
    const [empAddressLine2, empAddressLine2change] = useState("");
    const [empAddressLine3, empAddressLine3change] = useState("");
    const [departmentCode, departmentCodechange] = useState(0);
    const [dateOfJoin, dateOfJoinchange] = useState("");
    const [dateOfBirth, dateOfBirthchange] = useState("");
    const [basicSalary, basicSalarychange] = useState(0);
    const [ active, activechange] = useState("true");
 
   


    const navigate=useNavigate();
    
    const handlesubmit=(e)=>{
      e.preventDefault();
       const empdata = {empNo,empName,empAddressLine1,empAddressLine2,empAddressLine3,departmentCode,dateOfJoin,dateOfBirth,basicSalary,active};
      
      

      axios.put("/api/v1.0/Employee/"+ empId,{
        headers:{
            "apiToken":"?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf",
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(empdata)
      }).then(()=>{
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
                            <h4>Edit Employee Details</h4>
                        </div>
                        <div className="card-body">

                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Employee Number</label>
                                        <input value={empNo}  onChange={e=>empNochange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input required value={empName}  onChange={e=>empNamechange(e.target.value)} className="form-control"></input>
                                    
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Employee AddressLine1</label>
                                        <input value={empAddressLine1} onChange={e=>empAddressLine1change(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Employee AddressLine2</label>
                                        <input value={empAddressLine2} onChange={e=>empAddressLine2change(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Employee AddressLine3</label>
                                        <input value={empAddressLine3} onChange={e=>empAddressLine3change(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Department code</label>
                                        <input value={departmentCode} onChange={e=>departmentCodechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Date Join</label>
                                        <input value={dateOfJoin} onChange={e=>dateOfJoinchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Date Birth</label>
                                        <input value={dateOfBirth} onChange={e=>dateOfBirthchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Salary</label>
                                        <input value={basicSalary} onChange={e=>basicSalarychange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-check">
                                    <input checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
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
 
export default EmpEdit;