import {Routes,Route} from 'react-router-dom';
import { Login } from './components/Login';
import { MainPage } from './components/MainPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/otp"></Route>
        <Route path="/signup" element={<MainPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
