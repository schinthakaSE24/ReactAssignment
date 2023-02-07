import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const EmpDetail = () => {
    const { empNo } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        axios.get("/api/v1.0/Employee/" + empNo,{
            headers:{
                "apiToken":"?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf",
            }
        })
        .then((res) => {
            empdatachange(res.data);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    return (

      
            

        <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Employee Details</h2>
                </div>
                <div className="card-body"></div>

             
                     
                    <div>
                        <h3>The Employee name is : <b>{empdata.empName}</b> ({empdata.empNo})</h3>
                   
                        <h5>Address Line 1: {empdata.empAddressLine1}</h5>
                        <h5>Address Line 2: {empdata.empAddressLine2}</h5>
                        <h5>Address Line 3: {empdata.empAddressLine3}</h5>
                        <h5>Departmentcode : {empdata.departmentCode}</h5>
                        <h5>Date Of Join : {empdata.dateOfJoin}</h5>
                        <h5>Date Of Birth : {empdata.dateOfBirth}</h5>
                        <h5>Salary : {empdata.basicSalary}</h5>
                        <h5>Current Status: {empdata.isActive ? <button type="button" class="btn btn-success btn-sm btn-block">Active</button>:<button type="button" class="btn btn-danger btn-sm btn-block">Deactive</button>}</h5>
                        <Link className="btn btn-danger" to="/">Back to Listing</Link>
                    </div>
                
            </div>
            </div>

      
           
   
    );
}

export default EmpDetail;