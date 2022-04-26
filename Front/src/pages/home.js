import React, {Component} from "react";
import {  useNavigate } from "react-router-dom";
import emailjs from "emailjs-com"
//import { BrowserRouter, Route, Link } from "react-router-dom";
import ItemDataService from "../services/item.services";
//import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';



export default class Home extends Component{
    
    
    constructor(props){
        super(props)
        
        
        this.state = {
           
            itemName:"",
            picture:"",
            price:"",
            categorie:"",
            descreption:"",
            submitted:false,
    
        };
        //const form = useRef();
        console.log(this.state)
        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.onChangePicture =  this.onChangePicture.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeCategorie = this.onChangeCategorie.bind(this);
        this.onChangeDescreption=this.onChangeDescreption.bind(this);
        this.saveItem=this.saveItem.bind(this);
        
    }
    
    onChangeItemName(e){
        this.setState({
            itemName: e.target.value
        });
    }
    onChangePicture(e){
        this.setState({
            picture: e.target.files[0]
        });
    }
    onChangeCategorie(e){
        
        this.setState({
            categorie:e.target.value
        });
    }
    onChangePrice(e){
        this.setState({
            price: e.target.value
        });
    }
    onChangeDescreption(e){
        this.setState({
            descreption: e.target.value
        });
    }
   /* saveItem(){
        //console.log(this.state)
        var formData = new FormData()
       var data ={
            
            itemName: this.state.itemName,
            picture: this.state.picture,
            price: this.state.price,
            categorie:this.state.categorie,
            
            
        };
        ItemDataService.create(formData)
        .then(response => { 
          
            
            FormData.append('picture',this.state.picture)
            formData.append('itemName',data.itemName)
            formData.append('categorie',data.categorie)
            formData.append('price',data.price)
            this.setState({
            id : response.data.id,
            itemName: response.data.itemName,
            categorie:response.data.categorie,
            picture : response.data.picture,
            price:response.data.price,
            submitted:true,
           

        });
        
        console.log(Response.data);
    })
    .catch(e=>{
        console.log(e)
    });
}*/
// form = useRef();
saveItem(e){
    
  //var navigate = useNavigate();
  var formData = new FormData()
  formData.append('photo',this.state.picture)
  formData.append('itemName',this.state.itemName)
  formData.append('categorie',this.state.categorie)
  formData.append('price',this.state.price)
  formData.append('descreption',this.state.descreption)
  ItemDataService.create(formData)
  .then(response => {
    //var form=this.state
    console.log(response)
    toast("vous avez ajoute un produit")
    var templateParams = {
        name: 'item',
        notes: 'hi'
    };
    
   // const form = useRef();
    //e.preventDefault();
   //emailjs.send('service_mt4njrq', 'template_trd09xj',templateParams, '_wbRyyw5RN5zysiVt')
    
      
      //e.target.reset();
   // navigate('/affiche')
   
  })
}
newItem(){
    this.setState({
        id: null,
        itemName:"",
        picture:"",
        price:"",
        categorie:"",
        descreption:"",
        submitted:false

    });
}
render() 
{const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
    return (
     
      <div>
          
            
      <div>
      <div id="layout-wrapper">

  
<header id="page-topbar">

<div class="d-flex">
  
  <div class="navbar-brand-box">
      <a href="index.html" class="logo logo-dark">
      <span class="logo-sm">
              <img src="assets/images/logo.svg" alt="" height="22"/>
          </span>
          <span class="logo-lg">
              <img src="assets/images/loogo.png" alt="" height="55"/>
          </span>
      </a>

      <a href="index.html" class="logo logo-light">
          <span class="logo-sm">
              <img src="assets/images/logo-light.svg" alt="" height="22"/>
          </span>
          <span class="logo-lg">
              <img src="assets/images/logo-light.png" alt="" height="19"/>
          </span>
      </a>
  </div>

  <button type="button" class="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn">
      <i class="fa fa-fw fa-bars"></i>
  </button>

  
  <form class="app-search d-none d-lg-block">
      <div class="position-relative">
          <input type="text" class="form-control" placeholder="Search..."/>
          <span class="bx bx-search-alt"></span>
      </div>
  </form>

 
<div class="d-flex">

  <div class="dropdown d-inline-block d-lg-none ms-2">
      <button type="button" class="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
      data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="mdi mdi-magnify"></i>
      </button>
      <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
          aria-labelledby="page-header-search-dropdown">

          <form class="p-3">
              <div class="form-group m-0">
                  <div class="input-group">
                      <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
                      <div class="input-group-append">
                          <button class="btn btn-primary" type="submit"><i class="mdi mdi-magnify"></i></button>
                      </div>
                  </div>
              </div>
          </form>
      </div>
  </div>

  <div class="dropdown d-inline-block">
      <button type="button" class="btn header-item waves-effect"
      data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img id="header-lang-img" src="assets/images/flags/us.jpg" alt="Header Language" height="16"/>
      </button>
      
  </div>

  <div class="dropdown d-none d-lg-inline-block ms-1">
      <button type="button" class="btn header-item noti-icon waves-effect"
      data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="bx bx-customize"></i>
      </button>
      <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
          <div class="px-lg-2">
              <div class="row g-0">
                  <div class="col">
                      <a class="dropdown-icon-item" href="#/">
                          <img src="assets/images/brands/github.png" alt="Github"/>
                          <span>GitHub</span>
                      </a>
                  </div>
                  <div class="col">
                      <a class="dropdown-icon-item" href="#/">
                          <img src="assets/images/brands/bitbucket.png" alt="bitbucket"/>
                          <span>Bitbucket</span>
                      </a>
                  </div>
                  <div class="col">
                      <a class="dropdown-icon-item" href="#/">
                          <img src="assets/images/brands/dribbble.png" alt="dribbble"/>
                          <span>Dribbble</span>
                      </a>
                  </div>
              </div>

              <div class="row g-0">
                  <div class="col">
                      <a class="dropdown-icon-item" href="#/">
                          <img src="assets/images/brands/dropbox.png" alt="dropbox"/>
                          <span>Dropbox</span>
                      </a>
                  </div>
                  <div class="col">
                      <a class="dropdown-icon-item" href="#/">
                          <img src="assets/images/brands/mail_chimp.png" alt="mail_chimp"/>
                          <span>Mail Chimp</span>
                      </a>
                  </div>
                  <div class="col">
                      <a class="dropdown-icon-item" href="#/">
                          <img src="assets/images/brands/slack.png" alt="slack"/>
                          <span>Slack</span>
                      </a>
                  </div>
              </div>
          </div>
      </div>
  </div>

  <div class="dropdown d-none d-lg-inline-block ms-1">
      <button type="button" class="btn header-item noti-icon waves-effect" data-bs-toggle="fullscreen">
          <i class="bx bx-fullscreen"></i>
      </button>
  </div>

  <div class="dropdown d-inline-block">
      <button type="button" class="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown"
      data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="bx bx-bell bx-tada"></i>
          <span class="badge bg-danger rounded-pill">3</span>
      </button>
      <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
          aria-labelledby="page-header-notifications-dropdown">
          <div class="p-3">
              <div class="row align-items-center">
                  <div class="col">
                      <h6 class="m-0" key="t-notifications"> Notifications </h6>
                  </div>
                  <div class="col-auto">
                      <a href="#!" class="small" key="t-view-all"> View All</a>
                  </div>
              </div>
          </div>
          <div data-simplebar >
              <a href="#/" class="text-reset notification-item">
                  <div class="d-flex">
                      <div class="avatar-xs me-3">
                          <span class="avatar-title bg-primary rounded-circle font-size-16">
                              <i class="bx bx-cart"></i>
                          </span>
                      </div>
                      <div class="flex-grow-1">
                          <h6 class="mb-1" key="t-your-order">Your order is placed</h6>
                          <div class="font-size-12 text-muted">
                              <p class="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                              <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span key="t-min-ago">3 min ago</span></p>
                          </div>
                      </div>
                  </div>
              </a>
              <a href="#/" class="text-reset notification-item">
                  <div class="d-flex">
                      <img src="assets/images/users/avatar-3.jpg"
                          class="me-3 rounded-circle avatar-xs" alt="user-pic"/>
                      <div class="flex-grow-1">
                          <h6 class="mb-1">James Lemire</h6>
                          <div class="font-size-12 text-muted">
                              <p class="mb-1" key="t-simplified">It will seem like simplified English.</p>
                              <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span key="t-hours-ago">1 hours ago</span></p>
                          </div>
                      </div>
                  </div>
              </a>
              <a href="#/" class="text-reset notification-item">
                  <div class="d-flex">
                      <div class="avatar-xs me-3">
                          <span class="avatar-title bg-success rounded-circle font-size-16">
                              <i class="bx bx-badge-check"></i>
                          </span>
                      </div>
                      <div class="flex-grow-1">
                          <h6 class="mb-1" key="t-shipped">Your item is shipped</h6>
                          <div class="font-size-12 text-muted">
                              <p class="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                              <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span key="t-min-ago">3 min ago</span></p>
                          </div>
                      </div>
                  </div>
              </a>

              <a href="#/" class="text-reset notification-item">
                  <div class="d-flex">
                      <img src="assets/images/users/avatar-4.jpg"
                          class="me-3 rounded-circle avatar-xs" alt="user-pic"/>
                      <div class="flex-grow-1">
                          <h6 class="mb-1">Salena Layfield</h6>
                          <div class="font-size-12 text-muted">
                              <p class="mb-1" key="t-occidental">As a skeptical Cambridge friend of mine occidental.</p>
                              <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span key="t-hours-ago">1 hours ago</span></p>
                          </div>
                      </div>
                  </div>
              </a>
          </div>
          <div class="p-2 border-top d-grid">
              <a class="btn btn-sm btn-link font-size-14 text-center" href="#/">
                  <i class="mdi mdi-arrow-right-circle me-1"></i> <span key="t-view-more">View More..</span> 
              </a>
          </div>
      </div>
  </div>

  <div class="dropdown d-inline-block">
      <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown"
      data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img class="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg"
              alt="Header Avatar"/>
          <span class="d-none d-xl-inline-block ms-1" key="t-henry">Henry</span>
          <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
      </button>
      <div class="dropdown-menu dropdown-menu-end">
          
          <a class="dropdown-item" href="#/"><i class="bx bx-user font-size-16 align-middle me-1"></i> <span key="t-profile">Profile</span></a>
          <a class="dropdown-item" href="#/"><i class="bx bx-wallet font-size-16 align-middle me-1"></i> <span key="t-my-wallet">My Wallet</span></a>
          <a class="dropdown-item d-block" href="#/"><span class="badge bg-success float-end">11</span><i class="bx bx-wrench font-size-16 align-middle me-1"></i> <span key="t-settings">Settings</span></a>
          <a class="dropdown-item" href="#/"><i class="bx bx-lock-open font-size-16 align-middle me-1"></i> <span key="t-lock-screen">Lock screen</span></a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item text-danger" href="#/"><i class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i> <span key="t-logout">Logout</span></a>
      </div>
  </div>

  <div class="dropdown d-inline-block">
      <button type="button" class="btn header-item noti-icon right-bar-toggle waves-effect">
          <i class="bx bx-cog bx-spin"></i>
      </button>
  </div>

</div>
</div>
</header>



<div class="main-content">

<div class="page-content">
<div class="container-fluid">


<div class="row">
  <div class="col-12">
      <div class="page-title-box d-sm-flex align-items-center justify-content-between">
          <h4 class="mb-sm-0 font-size-18 text-center">Add new  Piece</h4>

       



      </div>
  </div>
</div>


<div class="row">
  <div class="col-12">
      <div class="card">
          <div class="card-body">

         
  <center>
          <div className="form-group" class="mb-3 col-lg-6 col-md-6 col-12">
        <label htmlFor="itemName">Name</label>
        <input
          type="text"
          className="form-control"
          id="itemName"
          required
          value={this.state.itemName}
          onChange={this.onChangeItemName}
          name="itemName"
        />
      </div>
      </center>
      <center>
      <div className="form-group" class="mb-3 col-lg-6 col-md-6 col-12">
        <label htmlFor="picture">Picture</label>
        <input
          type="file"
          className="form-control"
          id="picture"
          required
          
          onChange={this.onChangePicture}
          name="picture"
        />
      </div>
      </center>
      <center>
      <div className="form-group" class="mb-3 col-lg-6 col-md-6 col-12">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          className="form-control"
          id="price"
          required
          value={this.state.price}
          onChange={this.onChangePrice}
          name="price"
        />
      </div> 
      </center>
      <center>
      <div className="mb-3 col-lg-6 col-md-6 col-12">
                                                            <label htmlFor="exampleInputPassword1"
                                                                   className="form-label">Gategorie</label>
                                                            <select value={this.state.categorie}  onChange={this.onChangeCategorie} name="categorie"
                                                                    className="form-control" id="exampleInputPassword1">
                                                                <option value="Clothes">Clothes</option>
                                                                <option value="Animals">Animals</option>
                                                                <option value="Electronique">Electronique</option>
                                                                <option value="Cars">CARS</option>
                                                                <option value="Jardinage">Jardinage</option>

                                                            </select>
                                                        </div>
                                                        </center>
      <center><div className="form-group" class="mb-3 col-lg-8 col-md-10 col-12">
        <label htmlFor="descreption">Descreption</label>
        <textarea
          type="textarea"
          className="form-control"
          id="descreption"
          options={this.options}
          required
          value={this.state.descreption}
          onChange={this.onChangeDescreption}
          name="descreption"
        />
      </div>
      </center>
      <button onClick={this.saveItem} className="btn btn-success">
        Submit
        
      </button>
      <ToastContainer />

      


      













           
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


<hr class="mt-0" />
<h6 class="text-center mb-0">Choose Layouts</h6>

<div class="p-4">
<div class="mb-2">
  <img src="assets/images/layouts/layout-1.jpg" class="img-thumbnail" alt="layout images"/>
</div>

<div class="form-check form-switch mb-3">
  <input class="form-check-input theme-choice" type="checkbox" id="light-mode-switch" checked />
  <label class="form-check-label" for="light-mode-switch">Light Mode</label>
</div>

<div class="mb-2">
  <img src="assets/images/layouts/layout-2.jpg" class="img-thumbnail" alt="layout images"/>
</div>
<div class="form-check form-switch mb-3">
  <input class="form-check-input theme-choice" type="checkbox" id="dark-mode-switch"/>
  <label class="form-check-label" for="dark-mode-switch">Dark Mode</label>
</div>

<div class="mb-2">
  <img src="assets/images/layouts/layout-3.jpg" class="img-thumbnail" alt="layout images"/>
</div>
<div class="form-check form-switch mb-3">
  <input class="form-check-input theme-choice" type="checkbox" id="rtl-mode-switch"/>
  <label class="form-check-label" for="rtl-mode-switch">RTL Mode</label>
</div>

<div class="mb-2">
  <img src="assets/images/layouts/layout-4.jpg" class="img-thumbnail" alt="layout images"/>
</div>
<div class="form-check form-switch mb-5">
  <input class="form-check-input theme-choice" type="checkbox" id="dark-rtl-mode-switch"/>
  <label class="form-check-label" for="dark-rtl-mode-switch">Dark RTL Mode</label>
</div>


</div>

</div> 
</div>



<div class="rightbar-overlay"></div>


<script src="assets/libs/jquery/jquery.min.js"></script>
<script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="assets/libs/metismenu/metisMenu.min.js"></script>
<script src="assets/libs/simplebar/simplebar.min.js"></script>
<script src="assets/libs/node-waves/waves.min.js"></script>

<script src="assets/js/app.js"></script>
  </div>
  );
}
}
