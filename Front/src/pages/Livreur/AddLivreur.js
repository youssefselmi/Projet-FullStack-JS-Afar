import React, { useState } from "react";
import axios from 'axios'
import { useHistory ,useNavigate} from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";


function onChange(value){
    
}

export default function AddLivreur (props){
  const history = useNavigate();
  var [livreur, setlivreur] = useState({
    nom: "",
    prenom: "",
    num:"",
    addr:"",
    password:"",
    region:"",
    modele:"",
    email:"",
    type:"",
    age:"",
    disponibilite:"",
    picture:"",
  });

  var { nom, prenom, num,disponibilite,age, addr,password,region,modele,type ,email,picture} = livreur;
  var onInputChange = e => {
    setlivreur({ ...livreur, [e.target.name]: e.target.value });
    
  };
  console.log(livreur);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3000/livreur/add", livreur);
    
    alert("votre livreur a ete ajoute")
    history("/list")

  };
  return (
    <div>
      {/* Mirrored from themesbrand.com/skote-django/layouts/auth-register.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 15 Feb 2022 20:58:52 GMT */}
      <meta charSet="utf-8" />
      <title>Register | Skote - Admin &amp; Dashboard Template</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
      <meta content="Themesbrand" name="author" />
      {/* App favicon */}
      <link rel="shortcut icon" href="assets/images/favicon.ico" />
      {/* Bootstrap Css */}
      <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
      {/* Icons Css */}
      <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
      {/* App Css*/}
      <link href="assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
      <div className="account-pages my-5 pt-sm-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card overflow-hidden">
                <div className="bg-primary bg-soft">
                  <div className="row">
                    <div className="col-7">
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Free Register</h5>
                        <p>Get your free Delevry account now.</p>
                      </div>
                    </div>
                    <div className="col-5 align-self-end">
                      <img src="assets/images/profile-img.png" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0"> 
                  <div>
                    <a href="index.html">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img src="assets/images/logo.svg" alt="" className="rounded-circle" height={34} />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="p-2">
                    <form className="needs-validation" noValidate onSubmit={e => onSubmit(e)} >
                      <div className="mb-3">
                        <label htmlFor="firstname" className="form-label">First Name</label>
                        <input type="text" className="form-control" name="nom" value={nom} onChange={e => onInputChange(e)}  placeholder="Enter First Name" required />
                        <div className="invalid-feedback">
                          Please Enter First name
                        </div>  
                      </div>
                    
                      <div className="mb-3">
                        <label htmlFor="lastname" className="form-label">Last Name</label>
                        <input type="text" className="form-control" name="prenom"  value={prenom} onChange={(e) => onInputChange(e)} placeholder="Enter Last Name" required />
                        <div className="invalid-feedback">
                          Please Enter Last name
                        </div>  
                      </div>
                      <div className="mb-3">
                        <label htmlFor="age" className="form-label">Age</label>
                        <input type="text" className="form-control" name="age"  value={age} onChange={(e) => onInputChange(e)} placeholder="Enter Last Name" required />
                        <div className="invalid-feedback">
                          Please Enter Your Age
                        </div>  
                      </div>
                      <div className="mb-3">
                        <label htmlFor="phonenumber" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" name="num" value={num} onChange={(e) => onInputChange(e)}  placeholder="Enter Phone Number" required />
                        <div className="invalid-feedback">
                          Please Enter Phone Number
                        </div>  
                      </div>
                      <div className="mb-3">
                        <label htmlFor="adress" className="form-label">Adress</label>
                        <input type="text" className="form-control" name="addr" value={addr} onChange={(e) => onInputChange(e)}  placeholder="Enter Adress" required />
                        <div className="invalid-feedback">
                          Please Enter Adress
                        </div>  
                      </div>
                      <div className="mb-3">
                        <label htmlFor="region" className="form-label">Region</label>
                        <input type="text" className="form-control" name="region" value={region} onChange={(e) => onInputChange(e)} placeholder="Enter Region" required />
                        <div className="invalid-feedback">
                          Please Enter Region
                        </div>  
                      </div>
                      <div className="mb-3">
                        <label htmlFor="vehicle"   className="form-label">Vehicle</label>
                      </div>
                      <div className="mb-3">
                      <select name="type" value={type} onChange={(e) => onInputChange(e)} required  >
                          <option value>Please choose Type</option>
                          <option value="Isuzu">Isuzu</option>
                          <option value="Peugeot">Peugeot</option>
                          <option value="Volswagen">Volswagen</option>
                          <option value="Ford">Ford</option>
                        </select>
                          <select name="modele" value={modele} onChange={(e) => onInputChange(e)} required  >
                          <option value>Please choose Model</option>
                          <option value="2010">2010</option>
                          <option value="2011">2011</option>
                          <option value="2012">2012</option>
                          <option value="2013">2013</option>
                        </select>
                      </div>   
                      
                     
                      
                      <div className="mb-3">
                     <label htmlFor="disponibilite">disponibilite</label>
                   
                          <select name="disponibilite" value={disponibilite} onChange={(e) => onInputChange(e)} required  >
                          <option value>Please choose Model</option>
                          <option value="all day">all day</option>
                          <option value="afternoon">afternoon</option>
                          <option value="the morning">the morning</option>
                          <option value="weekend">weekend</option>
                        </select>                     
                     </div>  
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => onInputChange(e)}  name="email" placeholder="Enter email" required />  
                        <div className="invalid-feedback">
                          Please Enter Email
                        </div>      
                      </div>
                      <div className="mb-3">
                        <label htmlFor="userpassword" className="form-label">Password</label>
                        <input type="password" className="form-control" value={password} name="password" onChange={(e) => onInputChange(e)}  placeholder="Enter password" required />
                        <div className="invalid-feedback">
                          Please Enter Password
                        </div>       
                      </div>
                      <div className="mt-4 d-grid">
                        <label htmlFor="picture" >Picture</label>
                        <input type="file"  value={picture} name="picture" onChange={(e) => onInputChange(e)}   required />
                        <div className="invalid-feedback">
                          Please Chose a Picture
                        </div>       
                      </div>
                      <div className="col-6">
                            <ReCAPTCHA 
                             sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                             onChange={onChange}
                              />,
                              </div>
                      
                      <div className="mt-4 d-grid">
                        <button className="btn btn-primary waves-effect waves-light" type="submit">Register</button>
                      </div>
                      <div className="mt-4 text-center">
                        <h5 className="font-size-14 mb-3">Sign up using</h5>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="javascript::void()" className="social-list-item bg-primary text-white border-primary">
                              <i className="mdi mdi-facebook" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="javascript::void()" className="social-list-item bg-info text-white border-info">
                              <i className="mdi mdi-twitter" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="javascript::void()" className="social-list-item bg-danger text-white border-danger">
                              <i className="mdi mdi-google" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-4 text-center">
                        <p className="mb-0">By registering you agree to the Skote <a href="#" className="text-primary">Terms of Use</a></p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <div>
                  <p>Already have an account ? <a href="auth-login.html" className="fw-medium text-primary"> Login</a> </p>
                  <p>©  Skote. Crafted with <i className="mdi mdi-heart text-danger" /> by Themesbrand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* JAVASCRIPT */}
      {/* validation init */}
      {/* App js */}
      {/* Mirrored from themesbrand.com/skote-django/layouts/auth-register.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 15 Feb 2022 20:58:52 GMT */}
    </div>
  )}