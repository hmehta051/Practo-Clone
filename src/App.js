import './App.css';
import {Routes, Route} from "react-router-dom"

import { Medicine } from './components/medicine/medicine';
import { MedecineCategories } from './components/medicine/medicineCategories';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/medicines"} element={<Medicine/>}></Route>
        <Route path={"/medicines/:id"} element={<MedecineCategories/>}></Route>
      </Routes>    
    </div>
  );
}

export default App;
