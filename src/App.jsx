import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarComponent from './components/NavBarComponent/NavBarComponent'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';
import "./App.css";
import { useEffect } from 'react';
import DataProvider from './Context/DataContext';

import MainLayout from './layouts/MainLayout';
//Importacion de estilos boostraps
import 'bootstrap/dist/css/bootstrap.min.css';

import { getProducts } from './services';


const App = () => {
 
  

  return (
    
    <div style={{width: '100vw', height: '100vh'}}>
      <NavBarComponent/> 
      <ItemListContainer gretting="Bienvenidos a mi tienda de libros"/> 
      
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ItemListContainer}></Route>
          <Route path="/cart" element={CartWidget}></Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>

      
    </div> 

  );  


}

export default App;
