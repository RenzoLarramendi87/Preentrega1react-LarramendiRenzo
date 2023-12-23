import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarComponent from './components/NavBarComponent/NavBarComponent'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';
import Productsd from './components/Products/Products';
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
      <div className='product-card-container'>
      <Productsd />
      </div>
      
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ItemListContainer}></Route>
          <Route path="/category/id:" element={ItemListContainer}></Route>
          <Route path="/item/id:" element={ItemDetailContainer}></Route>

        </Routes>
      </BrowserRouter>
    </DataProvider>

      
    </div> 

  );  


}

export default App;
