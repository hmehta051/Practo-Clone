import {Routes,Route} from 'react-router-dom';
import { Login } from './componentsSP/Login';
import { MainPage } from './componentsSP/MainPage';
import {Footer} from './componentsSP/Footer';
import {Navbar} from './componentsSP/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<MainPage/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
