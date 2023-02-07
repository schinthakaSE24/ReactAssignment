import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DepListing = () => {
    const [depdata, setDepart] = useState(null);
    

    useEffect(() => {
        axios.get("/api/v1.0/Departments",{
            headers:{
                "apiToken":"?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf",
            }
        }).then((res) => {
            console.log(res)
            setDepart(res.data)
            
        
        })
        .catch((err) => {
            console.log(err.message);
        })
    }, [])


    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Departments</h2>
                  
                </div>
                <div className="card-body">
                    
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>Department Code</td>
                                <td>Department Name</td>
                                <td>Status</td>
                               
                              
                            </tr>
                        </thead>
                        <tbody>

                            {depdata &&
                                depdata.map(item => (
                                    <tr>
                                        <td key={item.departmentCode}>{item.departmentCode}</td>
                                        <td>{item.departmentName}</td>
                                        <td>{item.isActive ? <button type="button" class="btn btn-outline-success">Active</button> : <button type="button" class="btn btn-outline-danger">Deactive</button>}</td>
                                       
                                       
                                    </tr>
                                ))
                            }

                        </tbody>
                        <Link to="/" className="btn btn-danger">Back</Link>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default DepListing;