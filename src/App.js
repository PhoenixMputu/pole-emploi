import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from "./pages/Register"
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
			<Routes>
				<Route path="/" index element={<Register />} />
				<Route path="/admin" element={<Login />} />
			</Routes>
		</BrowserRouter>
  );
}

export default App;
