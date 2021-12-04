import React ,{useState,useEffect}from 'react';
import axios from "axios";
import { useParams,Link } from "react-router-dom";
const Delete = (props) => {
    // let history = useHistory();
    const{ id } = useParams();
    const [user,setUser] =useState([]); 

    useEffect(() =>{ 
        loadUser();
    },[]);


    const loadUser = async ()  =>{ 
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data); 
    }

    const deleteUser =async id =>{ 
        await axios.delete(`http://localhost:3003/users/${id}`);
        // history.push("/");
       }

    return (
        <>
            <section className="main py-5">
                <div className="container-lg py-5">
                    <div className="row ">
                        <div className="col-lg-5 text-capitalize  d-flex justify-content-between"> 
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">{props.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted"></h6>
                                     <p className="card-text">Are you sure you want to delete <b>{user.name} </b>?</p>
                                    <Link to="/" className=" px-3 btn btn-outline-secondary btn-sm text-capitalize">back</Link>
                                    <Link  to="" className="ms-3 px-3 btn btn-outline-danger btn-sm text-capitalize" onClick={() => deleteUser(user.id)} >delete</Link>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Delete;