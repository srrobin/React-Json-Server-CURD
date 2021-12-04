import axios from 'axios';
import React ,{useState,useEffect}from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {

    
    const [users,setUser] =useState([]); 
    const[searchTerm,setSearchTerm]=useState("");

    useEffect(() =>{ 
       userLoads();
    },[])
    
   const userLoads = async() =>{ 
       const result= await axios.get('http://localhost:3003/users');
       setUser(result.data.reverse());
   }

    return (

        <>
            <section className="main py-5">
                <div className="container-lg py-5">
                    <div className="row ">
                        <div className="col-lg-10 text-capitalize  d-flex justify-content-between"> 
                            <h2 className="fs-4">{props.title}</h2>
                            <Link to="/add_info"  className=" btn btn-dark btn-sm">add info</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <input type="search" placeholder="search by name" 
                            className="form-control form-control-sm"
                            onChange={(e) =>{setSearchTerm(e.target.value);}}
                            />
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col-lg-10 "> 
                            <table className="table table-bordered table-responsive">
                                <thead>
                                    <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">name</th>
                                    <th scope="col">username</th>
                                    <th scope="col">website</th>
                                    <th scope="col">action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  { 
                                   users.filter((user) => { 
                                       if(searchTerm==""){
                                            return user;
                                       }else if(user.name.toLowerCase().includes(searchTerm.toLowerCase())){
                                           return user;
                                       }
                                   }).map((user,index) =>( 
                                    <tr key={user.id}>
                                    <th scope="row">{index+1}</th>
                                    <td>{user.name} </td>
                                    <td>{user.username}</td>
                                    <td>{user.website}</td>
                                    <td>
                                        <div className="btn-group btn-group-sm " role="group">
                                            <Link  to={`/edit_info/${user.id}`} type="button" className=" text-success fw-bold btn btn-outline-dark text-capitalize">edit</Link>
                                            <Link to={`/display_info/${user.id}`} type="button" className="fw-bold  btn btn-outline-dark text-capitalize">show</Link>
                                            {/* <Link to=""  onClick={() => deleteUser(user.id)} type="button" 
                                            className=" text-danger fw-bold  btn btn-outline-dark text-capitalize">delete</Link> */}
                                            <Link to={`/delete_info/${user.id}`}  type="button" 
                                            className=" text-danger fw-bold  btn btn-outline-dark text-capitalize">delete</Link>
                                        </div>
                                    </td>
                                    </tr>
                                   ))
                                  }
                                </tbody>
                            </table> 
                        </div>
                    </div>
                </div>
            </section>
         </>   
    );
};

export default Home;