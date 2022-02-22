import {Routes,Route} from 'react-router-dom';
import { MainPage } from './components/MainPage';
import { SignUp } from './components/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login"></Route>
        <Route path="/otp"></Route>
        <Route path="/main" element={<MainPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
