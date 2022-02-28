import "./App.css";
import { Routes, Route } from "react-router-dom";
import StarWars from "./components/StarWars.jsx";
import Films from "./components/Films.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<StarWars />} />
        <Route path="/films/:id" element={<Films />} />
      </Routes>
    </div>
  );
}

export default App;
