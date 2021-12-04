import React ,{useState,useEffect}from 'react';
import axios from "axios";
import { useHistory,useParams } from "react-router-dom";


const EditInfo = (props) => {

    let history = useHistory();
    const{ id } = useParams();

    const [user,setUser]=useState({ name:"",username:"",email:"",phone:"",website:""});

    const{name,username,email,phone,website} = user;

    const onInputChange = e =>{ 
        setUser({...user,[e.target.name]: e.target.value});
    };

    const onSubmit = async e =>{ 
      e.preventDefault();
      await axios.put(`http://localhost:3003/users/${id}`, user);
      history.push("/");
    }

    
    useEffect(() =>{ 
        loadUser();
    },[]);


    const loadUser = async ()  =>{ 
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data); 
    }

return (  
    <> 
    <section className="infoform py-5">
	<div className="container-lg py-5">
		<div className="row ">
			<div className="col-lg-10 text-capitalize"> 
			     <h2 className="fs-4">{props.title}</h2>
			</div>
		</div>
		<div className="row py-3">
			<div className="col-lg-7 "> 
			   <div className="contact-form shadow-lg p-5"> 
			     <form onSubmit={e => onSubmit(e)}> 
				    <div className="row">
				    	<div className="col-lg-12 mb-4"> 
                            <input type="text"
                             placeholder=" your name" 
                             className=" form-control form-control-lg
                              text-capitalize fs-6 border-0 shadow-sm"
                              name="name"
                              value={name}
                              onChange={e =>onInputChange(e)}
                              /> 
						</div>
				    </div> 
                    
				    <div className="row">
				    	<div className="col-lg-12 mb-4"> 
                            <input type="text"
                             placeholder=" your username" 
                             className=" form-control form-control-lg
                              text-capitalize fs-6 border-0 shadow-sm"
                              name="username"
                              value={username}
                              onChange={e =>onInputChange(e)}
                              /> 
						</div>
				    </div>
                    
				    <div className="row">
				    	<div className="col-lg-12 mb-4"> 
                            <input type="text"
                             placeholder=" your email" 
                             className=" form-control form-control-lg
                              text-capitalize fs-6 border-0 shadow-sm"
                              name="email"
                              value={email}
                              onChange={e =>onInputChange(e)}
                              /> 
						</div>
				    </div>
                    
				    <div className="row">
				    	<div className="col-lg-12 mb-4"> 
                            <input type="text"
                             placeholder=" your phone" 
                             className=" form-control form-control-lg
                              text-capitalize fs-6 border-0 shadow-sm"
                              name="phone"
                              value={phone}
                              onChange={e =>onInputChange(e)}
                              /> 
						</div>
				    </div>
                    
				    <div className="row">
				    	<div className="col-lg-12 mb-4"> 
                            <input type="text"
                             placeholder=" your website" 
                             className=" form-control form-control-lg
                              text-capitalize fs-6 border-0 shadow-sm"
                              name="website"
                              value={website}
                              onChange={e =>onInputChange(e)}
                              /> 
						</div>
				    </div>
				    <div className="row">
				    	<div className="col-lg-12 mb-4"> 
					   	<button  className="px-3 text-capitalize btn btn-dark btn-sm">update info</button>
						</div>
				    </div>
				 </form>
			   </div>
			</div>
		</div>
	</div>
</section>

    </>

    );
};

export default EditInfo;



