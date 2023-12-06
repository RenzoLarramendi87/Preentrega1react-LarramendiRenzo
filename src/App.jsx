
import NavBarComponent from './components/NavBarComponent/NavBarComponent'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "./App.css";
//Importacion de estilos boostraps
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
 

  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <NavBarComponent/> 
      <ItemListContainer gretting="Bienvenidos a mi tienda de libros"/> 
      


    </div> 

  );  


}

export default App;
