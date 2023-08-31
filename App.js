import './App.css';
import ListaDeCompra from './components/composition/ListaDeCompra';
import Controlador from './components/mvc/Controlador';

function App() {

  const listaCompleta = [
    { nombre: "Coca-cola", cantidad:1},
    { nombre: "Picada", cantidad:1}
  ];

  return (
    <div >
      <Controlador/>
      <h1>Lista de Compras</h1>
      <ListaDeCompra 
        items={listaCompleta}
        />
    </div>
  );
}

export default App;
