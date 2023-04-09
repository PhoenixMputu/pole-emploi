import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from "./pages/Register";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
		<Routes>
			<Route path="/" index element={<Register />} />
			<Route path="/admin" element={<Login />} />
			<Route path="/dashboard" element={<Dashboard/>} />
		</Routes>
	</BrowserRouter>
  );
}

export default App;
