import { Routes, Route, NavLink} from "react-router-dom";
import Home from "../src/Pages/Home.jsx";
import Info from "./Info";
import './App.scss';

function App() {
  return (
    <div className="app">
    <nav>
    <NavLink to="/home" className="link">Home</NavLink>
    </nav>
    <Routes>
      <Route path="/home" element={<Home/>}/>
    </Routes>
    <Info/>
    </div>
  );
}

export default App;
