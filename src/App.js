import logo from './logo.svg';
import './App.css';
import DropdownMenu from './componentes/restaurante';
import CarouselComponent from './componentes/carousel'; // Corregir la importación

function App() {
  return (
    <div className="App">
      <DropdownMenu/>
      <CarouselComponent/>
    </div>
  );
}

export default App;
