import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from "./pages/Register";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Administrator from "./pages/Administrator";
import Candidat from "./pages/Candidat";

function App() {
  return (
    <BrowserRouter>
		<Routes>
			<Route path="/" index element={<Register />} />
			<Route path="/admin" element={<Login />} />
			<Route path="/dashboard" element={<Dashboard/>} />
			<Route path="/administrator" element={<Administrator/>} />
			<Route path="/candidat" element={<Candidat/>} />
		</Routes>
	</BrowserRouter>
  );
}

export default App;
