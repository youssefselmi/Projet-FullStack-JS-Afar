import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {toast} from "react-toastify";


  export default function ListLivreur(props) {

  var [livreurs, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);
  const onDeleteLivreur = async (id) => {

    if(window.confirm("Are you sure to delete this service"))
    {

        const response = await axios.delete(`http://localhost:3000/livreur/deletef/${id}`);
        if (response.status === 200)
        {
            toast.success(response.data);
            loadUsers();
        }
    }



}
  

  var loadUsers = async () => {
    var result = await axios.get("http://localhost:3000/livreur/list");
    setUser(result.data.reverse());
    console.log(result);
  };
  
  


        
      return (
        <div>
          {/* Mirrored from themesbrand.com/skote-django/layouts/ecommerce-add-product.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 15 Feb 2022 20:58:08 GMT */}
          <meta charSet="utf-8" />
          <title>Livreur </title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
          <meta content="Themesbrand" name="author" />
          {/* App favicon */}
          <link rel="shortcut icon" href="assets/images/favicon.ico" />
          {/* select2 css */}
          <link href="assets/libs/select2/css/select2.min.css" rel="stylesheet" type="text/css" />
          {/* dropzone csss */}
          <link href="assets/libs/dropzone/min/dropzone.min.css" rel="stylesheet" type="text/css" />
          {/* Bootstrap Css */}
          <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
          {/* Icons Css */}
          <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
          {/* App Css*/}
          <link href="assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
          {/* <body data-layout="horizontal" data-topbar="dark"> */}
          {/* Begin page */}
          <div id="layout-wrapper">
            <header id="page-topbar">
              <div className="navbar-header">
                <div className="d-flex">
                  {/* LOGO */}
                  <div className="navbar-brand-box">
                    <span className="logo-lg">
                      <img src="assets/images/afar-logo.png" alt="" height={70} width={240} />
                    </span>
                  </div>
                  <div>
                  </div>
                  <div>
                  </div>
                  {/* App Search*/}
                  <form className="app-search d-none d-lg-block ms-5">
                    <div className="position-relative">
                      <input type="text" className="form-control" placeholder="Search..." />
                      <span className="bx bx-search-alt" />
                    </div>
                  </form>
                  <div className="dropdown dropdown-mega d-none d-lg-block ms-5">
                    <button type="button" className="btn header-item waves-effect" data-bs-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                      <span key="t-megamenu">Menu</span>
                      <i className="mdi mdi-chevron-down" /> 
                    </button>
                    <div className="dropdown-menu dropdown-megamenu">
                      <div className="row">
                        <div className="col-sm-8">
                          <div className="row">
                            <div className="col-md-4">
                              <h5 className="font-size-14" key="t-ui-components">UI Components</h5>
                              <ul className="list-unstyled megamenu-list">
                                <li>
                                  <a href="javascript:void(0);" key="t-lightbox">Lightbox</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" key="t-range-slider">Range Slider</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" key="t-sweet-alert">Sweet Alert</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" key="t-rating">Rating</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" key="t-forms">Forms</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" key="t-tables">Tables</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" key="t-charts">Charts</a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-4">
                              <h5 className="font-size-14" key="t-applications">Applications</h5>
                              <ul className="list-unstyled megamenu-list">
                                <li>
                                  <a href="javascript:void(0);" key="t-ecommerce">Ecommerce</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" key="t-calendar">Calendar</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" key="t-email">Email</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" key="t-projects">Projects</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" key="t-tasks">Tasks</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" key="t-contacts">Contacts</a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-4">
                              <h5 className="font-size-14" key="t-extra-pages">Extra Pages</h5>
                              <ul className="list-unstyled megamenu-list">
                                <li>
                                  <a href="javascript:void(0);" key="t-light-sidebar">Light Sidebar</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" key="t-compact-sidebar">Compact Sidebar</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" key="t-horizontal">Horizontal layout</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" key="t-maintenance">Maintenance</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" key="t-coming-soon">Coming Soon</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" key="t-timeline">Timeline</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" key="t-faqs">FAQs</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="row">
                            <div className="col-sm-6">
                              <h5 className="font-size-14" key="t-ui-components">UI Components</h5>
                              <ul className="list-unstyled megamenu-list">
                                <li>
                                  <a href="javascript:void(0);" key="t-lightbox">Lightbox</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" key="t-range-slider">Range Slider</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" key="t-sweet-alert">Sweet Alert</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" key="t-rating">Rating</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" key="t-forms">Forms</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" key="t-tables">Tables</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" key="t-charts">Charts</a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-5">
                              <div>
                                <img src="assets/images/megamenu-img.png" alt="" className="img-fluid mx-auto d-block" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="dropdown d-inline-block d-lg-none ms-2">
                    <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="mdi mdi-magnify" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-search-dropdown">
                      <form className="p-3">
                        <div className="form-group m-0">
                          <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                            <div className="input-group-append">
                              <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify" /></button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="dropdown d-inline-block">
                    <button type="button" className="btn header-item waves-effect" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img id="header-lang-img" src="assets/images/flags/tn.png" alt="Header Language" height={16} />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      {/* item*/}
                      <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="en">
                        <img src="assets/images/flags/us.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">English</span>
                      </a>
                      {/* item*/}
                      <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="sp">
                        <img src="assets/images/flags/spain.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Spanish</span>
                      </a>
                      {/* item*/}
                      <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="gr">
                        <img src="assets/images/flags/germany.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">German</span>
                      </a>
                      {/* item*/}
                      <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="it">
                        <img src="assets/images/flags/italy.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Italian</span>
                      </a>
                      {/* item*/}
                      <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="ru">
                        <img src="assets/images/flags/russia.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Russian</span>
                      </a>
                    </div>
                  </div>
                  <div className="dropdown d-none d-lg-inline-block ms-1">
                    <button type="button" className="btn header-item noti-icon waves-effect" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="bx bx-customize" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                      <div className="px-lg-2">
                        <div className="row g-0">
                          <div className="col">
                            <a className="dropdown-icon-item" href="#">
                              <img src="assets/images/brands/github.png" alt="Github" />
                              <span>GitHub</span>
                            </a>
                          </div>
                          <div className="col">
                            <a className="dropdown-icon-item" href="#">
                              <img src="assets/images/brands/bitbucket.png" alt="bitbucket" />
                              <span>Bitbucket</span>
                            </a>
                          </div>
                          <div className="col">
                            <a className="dropdown-icon-item" href="#">
                              <img src="assets/images/brands/dribbble.png" alt="dribbble" />
                              <span>Dribbble</span>
                            </a>
                          </div>
                        </div>
                        <div className="row g-0">
                          <div className="col">
                            <a className="dropdown-icon-item" href="#">
                              <img src="assets/images/brands/dropbox.png" alt="dropbox" />
                              <span>Dropbox</span>
                            </a>
                          </div>
                          <div className="col">
                            <a className="dropdown-icon-item" href="#">
                              <img src="assets/images/brands/mail_chimp.png" alt="mail_chimp" />
                              <span>Mail Chimp</span>
                            </a>
                          </div>
                          <div className="col">
                            <a className="dropdown-icon-item" href="#">
                              <img src="assets/images/brands/slack.png" alt="slack" />
                              <span>Slack</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown d-none d-lg-inline-block ms-1">
                    <button type="button" className="btn header-item noti-icon waves-effect" data-bs-toggle="fullscreen">
                      <i className="bx bx-fullscreen" />
                    </button>
                  </div>
                  <div className="dropdown d-inline-block">
                    <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="bx bx-bell bx-tada" />
                      <span className="badge bg-danger rounded-pill">3</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">
                      <div className="p-3">
                        <div className="row align-items-center">
                          <div className="col">
                            <h6 className="m-0" key="t-notifications"> Notifications </h6>
                          </div>
                          <div className="col-auto">
                            <a href="#!" className="small" key="t-view-all"> View All</a>
                          </div>
                        </div>
                      </div>
                      <div data-simplebar style={{maxHeight: '230px'}}>
                        <a href="javascript: void(0);" className="text-reset notification-item">
                          <div className="d-flex">
                            <div className="avatar-xs me-3">
                              <span className="avatar-title bg-primary rounded-circle font-size-16">
                                <i className="bx bx-cart" />
                              </span>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="mb-1" key="t-your-order">Your order is placed</h6>
                              <div className="font-size-12 text-muted">
                                <p className="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                                <p className="mb-0"><i className="mdi mdi-clock-outline" /> <span key="t-min-ago">3 min ago</span></p>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a href="javascript: void(0);" className="text-reset notification-item">
                          <div className="d-flex">
                            <img src="assets/images/users/avatar-3.jpg" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                            <div className="flex-grow-1">
                              <h6 className="mb-1">James Lemire</h6>
                              <div className="font-size-12 text-muted">
                                <p className="mb-1" key="t-simplified">It will seem like simplified English.</p>
                                <p className="mb-0"><i className="mdi mdi-clock-outline" /> <span key="t-hours-ago">1 hours ago</span></p>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a href="javascript: void(0);" className="text-reset notification-item">
                          <div className="d-flex">
                            <div className="avatar-xs me-3">
                              <span className="avatar-title bg-success rounded-circle font-size-16">
                                <i className="bx bx-badge-check" />
                              </span>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="mb-1" key="t-shipped">Your item is shipped</h6>
                              <div className="font-size-12 text-muted">
                                <p className="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                                <p className="mb-0"><i className="mdi mdi-clock-outline" /> <span key="t-min-ago">3 min ago</span></p>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a href="javascript: void(0);" className="text-reset notification-item">
                          <div className="d-flex">
                            <img src="assets/images/users/avatar-4.jpg" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                            <div className="flex-grow-1">
                              <h6 className="mb-1">Salena Layfield</h6>
                              <div className="font-size-12 text-muted">
                                <p className="mb-1" key="t-occidental">As a skeptical Cambridge friend of mine occidental.</p>
                                <p className="mb-0"><i className="mdi mdi-clock-outline" /> <span key="t-hours-ago">1 hours ago</span></p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="p-2 border-top d-grid">
                        <a className="btn btn-sm btn-link font-size-14 text-center" href="javascript:void(0)">
                          <i className="mdi mdi-arrow-right-circle me-1" /> <span key="t-view-more">View More..</span> 
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown d-inline-block">
                  <Link to={`/add`}>
                   <button type="button" className="btn btn-info btn-rounded waves-effect waves-light">+registration</button>
                    </Link>
                    <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img className="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg" alt="Header Avatar" />
                      <span className="d-none d-xl-inline-block ms-1" key="t-henry">Chebbi</span>
                      <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      {/* item*/}
                      <a className="dropdown-item" href="#"><i className="bx bx-user font-size-16 align-middle me-1" /> <span key="t-profile">Profile</span></a>
                      <a className="dropdown-item" href="#"><i className="bx bx-wallet font-size-16 align-middle me-1" /> <span key="t-my-wallet">My Wallet</span></a>
                      <a className="dropdown-item d-block" href="#"><span className="badge bg-success float-end">11</span><i className="bx bx-wrench font-size-16 align-middle me-1" /> <span key="t-settings">Settings</span></a>
                      <a className="dropdown-item" href="#"><i className="bx bx-lock-open font-size-16 align-middle me-1" /> <span key="t-lock-screen">Lock screen</span></a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item text-danger" href="#"><i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" /> <span key="t-logout">Logout</span></a>
                    </div>
                  </div>
                  <div className="dropdown d-inline-block">
                    <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
                      <i className="bx bx-cog bx-spin" />
                    </button>
                  </div>
                </div>
              </div>
            </header>
            {/* ========== Left Sidebar Start ========== */}
            {/* ============================================================== */}
            {/* Start right Content here */}
            {/* ============================================================== */}
            <div className="main-content">
              <div className="page-content">
                <div className="container-fluid">
                  {/* start page title */}
                  <div className="row">
                    <div className="col-12">
                      <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 className="mb-sm-0 font-size-18">Livreur</h4>
                        <div className="page-title-right">
                          <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item"><a href="javascript: void(0);">Afar by Skolls</a></li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end page title */}
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">Livreur</h4>
                        </div>
                      </div>
                      <div className="row">
                      {livreurs && livreurs.map((livreur,index)=>
                                (
                        <div className="col-xl-4 col-sm-4">
                          <div className="card">
                            <div className="card-body">
                              <div className="d-flex">
                                <div className="flex-shrink-0 me-4">
                                  <div className="avatar-md">
                                    <span className="avatar-title rounded-circle bg-light text-danger font-size-16">
                                      <img src="assets/images/users/avatar-5.jpg" alt="" className="rounded-circle avatar-md height=30" />
                                    </span>
                                  </div>
                                </div>
                              
        
                                <div className="flex-grow-1 overflow-hidden">
                              
                                  <h5 className="text-truncate font-size-15"><a href="javascript: void(0);" className="text-dark">{livreur.nom}</a></h5>
                              
                                  <p className="text-muted mb-4">{livreur.prenom}</p>
                                  <div className="avatar-group">
                                   
                                  
                                    </div>
                                </div>
                              </div>
       
                              <div>
                                <p> </p>
                                <div className="px-4 py-3 border-top">
                                  <p className="text-muted mb-4">{livreur.addr}</p>
                                  <p className="text-muted mb-4">{livreur.region}</p>
                                  <div className="rating-star">
                                    <span style={{cursor: 'default'}}><div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}><div className="rating-symbol-background mdi mdi-star-outline text-muted" style={{visibility: 'hidden'}} /><div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto'}}><span className="mdi mdi-star text-primary" /></div></div><div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}><div className="rating-symbol-background mdi mdi-star-outline text-muted" style={{visibility: 'hidden'}} /><div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto'}}><span className="mdi mdi-star text-primary" /></div></div><div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}><div className="rating-symbol-background mdi mdi-star-outline text-muted" style={{visibility: 'hidden'}} /><div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto'}}><span className="mdi mdi-star text-primary" /></div></div><div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}><div className="rating-symbol-background mdi mdi-star-outline text-muted" style={{visibility: 'visible'}} /><div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: '0%'}}><span /></div></div><div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}><div className="rating-symbol-background mdi mdi-star-outline text-muted" style={{visibility: 'visible'}} /><div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: '0px'}}><span /></div></div></span><input type="hidden" className="rating" data-filled="mdi mdi-star text-primary" data-empty="mdi mdi-star-outline text-muted" data-readonly defaultValue={3} /><span className="badge bg-info">3</span>
                                  </div>
                                </div>
                                <div className="px-4 py-3 border-top">
                                  <ul className="list-inline mb-0">
                                    <li className="list-inline-item me-3">
                                      <button type="button" className="btn btn-success btn-rounded waves-effect waves-light">Join</button>
                                    </li>
                                    <li className="list-inline-item me-3">
                                    <Link to={`/email`}>
                                      <button type="button" className="btn btn-danger btn-rounded waves-effect waves-light">Report</button>
                                      </Link>
                                    </li>
                                    <li className="list-inline-item me-3">
                                    <Link to={`/profil/${livreur._id}`}>
                                      <button type="button" className="btn btn-info btn-rounded waves-effect waves-light">+info</button>
                                      </Link>
                                    </li>
                                    <li className="list-inline-item me-3">
                                    <Link to={`/updatelivreur/${livreur._id}`}>
                                      <button type="button" className="btn btn-link btn-rounded waves-effect waves-light">update</button>
                                      </Link>
                                     <button class="btn btn-link" onClick={() => onDeleteLivreur(livreur._id)}> Delete</button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div> {/* container-fluid */}
                        </div>
                          ))}
                      </div>
                      {/* end main content*/}
                    </div>
                    {/* END layout-wrapper */}
                    {/* Right Sidebar */}
                    <div className="right-bar">
                      <div data-simplebar className="h-100">
                        <div className="rightbar-title d-flex align-items-center px-3 py-4">
                          <h5 className="m-0 me-2">Settings</h5>
                          <a href="javascript:void(0);" className="right-bar-toggle ms-auto">
                            <i className="mdi mdi-close noti-icon" />
                          </a>
                        </div>
                        {/* Settings */}
                        <hr className="mt-0" />
                        <h6 className="text-center mb-0">Choose Layouts</h6>
                        <div className="p-4">
                          <div className="mb-2">
                            <img src="assets/images/layouts/layout-1.jpg" className="img-thumbnail" alt="layout images" />
                          </div>
                          <div className="form-check form-switch mb-3">
                            <input className="form-check-input theme-choice" type="checkbox" id="light-mode-switch" defaultChecked />
                            <label className="form-check-label" htmlFor="light-mode-switch">Light Mode</label>
                          </div>
                          <div className="mb-2">
                            <img src="assets/images/layouts/layout-2.jpg" className="img-thumbnail" alt="layout images" />
                          </div>
                          <div className="form-check form-switch mb-3">
                            <input className="form-check-input theme-choice" type="checkbox" id="dark-mode-switch" />
                            <label className="form-check-label" htmlFor="dark-mode-switch">Dark Mode</label>
                          </div>
                          <div className="mb-2">
                            <img src="assets/images/layouts/layout-3.jpg" className="img-thumbnail" alt="layout images" />
                          </div>
                          <div className="form-check form-switch mb-3">
                            <input className="form-check-input theme-choice" type="checkbox" id="rtl-mode-switch" />
                            <label className="form-check-label" htmlFor="rtl-mode-switch">RTL Mode</label>
                          </div>
                          <div className="mb-2">
                            <img src="assets/images/layouts/layout-4.jpg" className="img-thumbnail" alt="layout images" />
                          </div>
                          <div className="form-check form-switch mb-5">
                            <input className="form-check-input theme-choice" type="checkbox" id="dark-rtl-mode-switch" />
                            <label className="form-check-label" htmlFor="dark-rtl-mode-switch">Dark RTL Mode</label>
                          </div>
                        </div>
                      </div> {/* end slimscroll-menu*/}
                    </div>
                    {/* /Right-bar */}
                    {/* Right bar overlay*/}
                    <div className="rightbar-overlay" />
                    {/* JAVASCRIPT */}
                    {/* select 2 plugin */}
                    {/* dropzone plugin */}
                    {/* init js */}
                    {/* App js */}
                    {/* Mirrored from themesbrand.com/skote-django/layouts/ecommerce-add-product.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 15 Feb 2022 20:58:09 GMT */}
                  </div></div></div></div></div></div>
      );

    }
  
