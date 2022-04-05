import logo from './logo.svg';
import './App.css';
import Home from'./pages/home';
import Menu from './pages/menu';
import {  BrowserRouter, Router,Route, Routes,Switchn,useParams } from "react-router-dom";
import React from 'react';

import Brokenpeices from './pages/brokenpeices'
import Afficheproducts from './pages/afficheproducts';
import Affichbroken from './pages/affichbroken';
import Updateitem from './pages/updateitem';
import Listecomposantbackend from "./pages/listecomposantbackend";
import EditComposant from "./pages/EditComposant";
import DetailCompoBack from "./pages/DetailCompoBack";
import AjoutComposant from "./pages/ajoutComposant";
import ComposantDetailFront from "./pages/composantdetailFront";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Myproducts from './pages/myproducts';

import AddLivreur from './pages/Livreur/AddLivreur';
import Listlivreur from './pages/Livreur/ListLivreur';
import AdminLivreur from './pages/Livreur/LivreurBack';
import DetailLivreur from './pages/Livreur/LivreurDetails';
import Profil from './pages/Livreur/Profil';
import ProfilP from './pages/Livreur/ProfilP';

import AjoutService from './pages/Service/AddService';
import Listservice from './pages/Service/AffServices';
import DetailServices from './pages/Service/DetailService';
import Mailer from './pages/Service/Mailer';
import Email from './pages/Livreur/Mailer';
import Login from './pages/Livreur/Login';



function App() {
  return (
  
    <div className='App'>
      <Menu/>
      <BrowserRouter>
      <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/broken' element={<Brokenpeices/>} />
      <Route path='/affiche' element={<Afficheproducts/>} />
      <Route path='/afficher' element={<Affichbroken/>} />
      <Route path='/update/:_id' element={<Updateitem/>} />
      <Route path='/myproducts' element={<Myproducts/>} />




          <Route path='/listecomposant' element={<Listecomposantbackend/>} />
          <Route path='/updateCompo/:id' element={<EditComposant/>} />
          <Route path='/addcomposant' element={<AjoutComposant/>} />
          <Route path='/viewcomposant/:id' element={<DetailCompoBack/>} />
          <Route path='/viewcomposantfront/:id' element={<ComposantDetailFront/>} />

          <Route path='/list' element={<Listlivreur/>} />
          <Route path='/add' element={<AddLivreur/>} />  
          <Route path='/livreurBack' element={<AdminLivreur/>} />  
          <Route path='/DetailLivreur/:id' element={<DetailLivreur/>} />
          <Route path='/profil/:id' element={<Profil/>} />  
          <Route path='/profilp' element={<ProfilP/>} />  

          <Route path='/AjoutService' element={<AjoutService/>} />  
          <Route path='/listService' element={<Listservice/>} />
          <Route path='/detailServices/:id' element={<DetailServices/>} />    
          <Route path='/mail' element={<Mailer/>} />
          <Route path='/email' element={<Email/>} />
          <Route path='/' element={<Login/>} />

      </Routes>
      </BrowserRouter>
      <ToastContainer />

     </div>
     
      
      

  );
}

export default App;
