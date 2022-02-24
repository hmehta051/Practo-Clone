import {Routes,Route} from 'react-router-dom';
import { Login } from './componentsSP/Login';
import { MainPage } from './componentsSP/MainPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<MainPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
