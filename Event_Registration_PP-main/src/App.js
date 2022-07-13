import './App.css';
import Homepage from './components/Homepage';
import {BrowserRouter,Routes ,Route} from 'react-router-dom'
import Eventpage from './components/Eventpage'
import Login from "./components/Login";
import Register from "./components/Register";
import EventRegister from "./components/EventRegister";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Homepage/>} />
          <Route exact path='/events' element={<Eventpage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/EventRegister" element={<EventRegister />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
