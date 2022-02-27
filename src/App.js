import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import FindDoctors from './components/FindDoctors/FindDoctors';
import SearchbarWrapper from './components/SearchBar/SearchbarWrapper';
import SearchWrapper from './components/SearchResults/SearchWrapper';
import Searchbar from './components/SearchBar/Searchbar';
import ConsultPage from './components/ConsultPage/ConsultPage';
import {Login} from "./components/Login/Login"
import { MainPage } from './components/MainPage/MainPage';
import {Medicine} from "./components/medicine/medicine"
import {MedecineCategories} from "./components/medicine/medicineCategories"
import Payment from "./components/payment/payment";
import {HomePage} from "./pages/homepage/homepage/HomePage.jsx"
function App() {
	return (
		<div className='App'>
		    <Navbar />
			
			<Routes>
			<Route path = "/" element = {<HomePage/>}></Route>
				<Route path = "/doctors" element = {<FindDoctors/>}></Route>
				<Route path="/search" element={<><SearchbarWrapper><Searchbar /></SearchbarWrapper><SearchWrapper /></>}/>
				<Route path = "/consultpage" element = {<ConsultPage/>}></Route>
				<Route path="/login" element={<Login/>}></Route>
       			 <Route path="/signup" element={<MainPage/>}></Route>
					<Route path={"/medicines"} element={<Medicine/>}></Route>
       			 <Route path={"/medicines/:id"} element={<MedecineCategories/>}></Route>
					<Route path="/payment" element={<Payment />} />
			</Routes>
			<Footer />
		</div>
	);
}
export default App;