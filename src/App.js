import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './Components/Create/Create';
import Navbar from './Components/Navbar/Navbar';
import Read from './Components/Read/Read';
import Update from './Components/Update/Update';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='main'>
        <h2 className="main-header">React Crud Operations</h2>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/read' element={<Read/>}/>
          <Route path='/update' element={<Update/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
