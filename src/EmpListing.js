import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {
    const [empdata, setData] = useState(null);
    const [header, empheader] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (empNo) => {
        navigate("/employee/detail/" + empNo);
    }
    const LoadEdit = (empNo) => {
        navigate("/employee/edit/" + empNo);
    }


   
      
    
    
    // useEffect(() => {
    //     axios.get("/",{
    //         headers:{
    //             "apiToken":"?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf",
               
    //         }
    //     }).then((res) => {
    //         return res.json();
    //     }).then((res) => {
    //         empheader(res.data);
    //     }).catch((err) => {
    //         console.log(err.message);
    //     })
    // }, []);

    const Removefunction = (empNo) => {
        if (window.confirm('Do you want to remove?')) {
            axios.delete("/api/v1.0/Employee/" + empNo, {
                headers:{
                    'apiToken':"?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf",

                }
            })
            .then(() => {
                alert('Removed successfully.')
                window.location.reload();
                
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
        axios.get("/api/v1.0/Employees",{
            method:"GET",
            headers:{
                'apiToken': "?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf",
               
            }
        }).then((res) => {
            console.log(res)
            setData(res.data);
           
        })
        .catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container-fluid">
            <div className="card">
                <div className="card-title">
                    <h2>Employee Listing</h2>
                    <h2>{header}</h2>

                   
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="employee/create" className="btn btn-success">Add New Employee</Link>
                    </div>
                    <div className="divbtn">
                        <Link to="/Departments" className="btn btn-success">View Departments</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>Employee Number</td>
                                <td>Employee Name</td>
                                <td>AddressLine1</td>
                                <td>AddressLine2</td>
                                <td>AddressLine3</td>
                                <td>Departmentcode</td>
                                <td>dateOfJoin</td>
                                <td>dateOfBirth</td>
                                <td>basicSalary</td>
                                <td>Status</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr>
                                        <td key={item.empNo}>{item.empNo}</td>
                                        <td>{item.empName}</td>
                                        <td>{item.empAddressLine1}</td>
                                        <td>{item.empAddressLine2}</td>
                                        <td>{item.empAddressLine3}</td>
                                        <td>{item.departmentCode}</td>
                                        <td>{item.dateOfJoin}</td>
                                        <td>{item.dateOfBirth}</td>
                                        <td>{item.basicSalary}</td>
                                        <td>{item.isActive ? <button type="button" class="btn btn-outline-success">Active</button> : <button type="button" class="btn btn-outline-danger">Deactive</button>}</td>
                                       

                                        <td>  
                                        <a onClick={() => { LoadDetail(item.empNo) }} className="btn btn-primary">Details</a>
                                        <a onClick={() => { LoadEdit(item.empNo) }} className="btn btn-success">Edit</a>
                                        <a onClick={() => { Removefunction(item.empNo) }} className="btn btn-danger">Remove</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                        

                    </table>
                </div>
            </div>
        </div>
    );
}

export default EmpListing;