
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from './Pages/Search';
import Properties from './Pages/Properties';
import PropertyDetails from './Pages/PropertyDetails';
import 'mapbox-gl/dist/mapbox-gl.css';
import AddProperty from './Pages/AddProperty';


function App() {
  return (
    <div >
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Search/>} />
          <Route path='/properties' element={<Properties/>} />
          <Route path='/property/:id' element={<PropertyDetails/>} />
          <Route path='/addproperty' element={<AddProperty/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
