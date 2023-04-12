import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from "./pages/Register";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Administrator from "./pages/Administrator";
import Candidat from "./pages/Candidat";
import Offer from "./pages/Offer";
import Domaine from "./pages/Domaine";
import AddAdmin from "./pages/AddAdmin";

function App() {
  return (
    <BrowserRouter>
		<Routes>
			<Route path="/" index element={<Register />} />
			<Route path="/admin" element={<Login />} />
			<Route path="/dashboard" element={<Dashboard/>} />
			<Route path="/administrator" element={<Administrator/>} />
			<Route path="/candidat" element={<Candidat/>} />
			<Route path="/offer" element={<Offer/>} />
			<Route path="/domaine" element={<Domaine/>} />
			<Route path="/addAdmin" element={<AddAdmin/>} />
		</Routes>
	</BrowserRouter>
  );
}

export default App;
