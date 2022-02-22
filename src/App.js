import './App.css';
import {Routes, Route} from "react-router-dom"

import { Medicine } from './components/medicine/medicine';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/medicines"} element={<Medicine/>}></Route>
      </Routes>     
    </div>
  );
}

export default App;
