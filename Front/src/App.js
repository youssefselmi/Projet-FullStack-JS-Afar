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


      </Routes>
      </BrowserRouter>
      <ToastContainer />

     </div>
     
      
      

  );
}

export default App;
