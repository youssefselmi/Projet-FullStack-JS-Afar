import React , {useState,useEffect,useContext} from "react";
import {BrowserRouter, Route, Link, useNavigate,NavLink,useParams} from "react-router-dom";


import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';



const DetailServices = () => {
    



    

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const { id } = useParams("");
    console.log(id);
    

    const history = useNavigate();


    const getdata = async () => {

        const res = await fetch(`http://localhost:3000/service/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
       

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    return(
        <div>





            <div id="layout-wrapper">


                <header id="page-topbar">

               
                </header>



                <div class="main-content">

                    <div class="page-content">
                        <div class="container-fluid">


                            <div class="row">
                                <div class="col-12">
                                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                                        <h4 class="mb-sm-0 font-size-18 text-center">service details</h4>





                                    </div>
                                </div>
                            </div>







                            <div class="row">


                                <div className="row">
                                    <div className="col-16">
                                        <div className="card">
                                            <div className="card-body">

                                       
                                               













                                                <div className="container mt-3">
                                                    <h3 style={{ fontWeight: 400 }}>{getuserdata.title}</h3>

                                                    <Card sx={{ maxWidth: 1000 }}>
                                                        <CardContent>
                                                           
                                                            <div className="row">
                                                                <div className="left_view col-lg-6 col-md-6 col-12">
                                                                   
                                                                <img src="assets/images/users/avatar-5.jpg"  alt="" className="rounded-circle avatar-md height=30" />
                                                                    <h4 className="mt-3">Type: <span >{getuserdata.type}</span></h4>
                                                                    <p className="mt-3">Max Number of Participants: <span>{getuserdata.maxPart}</span></p>
                                                                    <p className="mt-3">Disponibility: <span>{getuserdata.disponibility},{getuserdata.weekend},{getuserdata.day},{getuserdata.night}</span></p>
                                                                    <p className="mt-3"><WorkIcon />Description: <span>{getuserdata.description}</span></p>
                                                                    <ul className="list-inline mb-0">
                                    
                                    
                                    <li className="list-inline-item me-3">
                                   
                                    <Link to={`/listService`}>
                                      <button type="button" className="btn btn-info btn-rounded waves-effect waves-light">Back</button>
                                      </Link>
                                    </li>
                                    <li className="list-inline-item me-3">
                                    
                                    <button type="button" className="btn btn-success btn-rounded waves-effect waves-light">Join service</button>
                                      
                                    </li>
                                  </ul>
                                                                </div>
                                                                
                                         
                                                                
                                    

                                                                
                                                                <div className="right_view  col-lg-6 col-md-6 col-12">

                                                                    <p className="mt-5">Governorate : <span>{getuserdata.governorate}</span></p>
                                                                    <p className="mt-3">City : <span>{getuserdata.city}</span></p>
                                                                     <p className="mt-3">Zip Code : <span>{getuserdata.zipcode}</span></p>
                                                                     <p className="mt-3">User Name : <span>Houssem Chebbi</span></p>
                                                                     <p className="mt-3">Added At : <span>{getuserdata.addedat}</span></p>
                                                                     <p className="mt-3"><PhoneAndroidIcon />Phone Number: <span>21136520</span></p>
                                                                     
                                                                </div>
                                                            </div>

                                                        </CardContent>
                                                    </Card>
                                                </div>

                                         </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>



                    <footer class="footer">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-sm-6">
                                    <script>document.write(new Date().getFullYear())</script> © Skote.
                                </div>
                                <div class="col-sm-6">
                                    <div class="text-sm-end d-none d-sm-block">
                                        Design and Develop by Themesbrand
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>


            </div>
      <div class="right-bar">
                <div data-simplebar class="h-100">
                    <div class="rightbar-title d-flex align-items-center px-3 py-4">

                        <h5 class="m-0 me-2">Settings</h5>

                        <a href="#/" class="right-bar-toggle ms-auto">
                            <i class="mdi mdi-close noti-icon"></i>
                        </a>
                    </div>



                   

                </div>
            </div>



           
        </div>





    )


}



export default DetailServices;