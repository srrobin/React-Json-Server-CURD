import React ,{useState,useEffect}from 'react';
import axios from "axios";
import { useParams,Link } from "react-router-dom";

const DisplayInfo = () => {

    const{ id } = useParams();

    const [user,setUser]=useState({ name:"",username:"",email:"",phone:"",website:""});
    
    useEffect(() =>{ 
        loadUser();
    },[]);


    const loadUser = async ()  =>{ 
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(res.data);
    }


    return (
        <> 
          <section className="sow-user py-5">
              <div className="container-lg py-5">
                  <div className="row">
                      <div className="col-lg-5"> 
                        <div className="display-area shadow-sm bg-white p-5"> 
                            <p className="name">Name : <b>{user.name}</b> </p>
                            <p className="username"> Usernamr : <b>{user.username}</b></p>
                            <p className="email">Email : <b>{user.email}</b></p>
                            <p className="phone">Phone : <b>{user.phone}</b></p>
                            <p className="website"> Website : <b>{user.website}</b></p>
                            <Link to="/" className="btn btn-outline-secondary btn-sm text-capitalize float-end"> back to home</Link>

                        </div>
                      </div> 
                  </div> 
              </div>
          </section>
        </>
    );
};

export default DisplayInfo;