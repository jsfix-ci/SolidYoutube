import './App.css';
import {
  Routes,
  Route,
  } from 'react-router-dom';
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/HomePage.jsx' element={<HomePage/>} />
      </Routes>
    </div>
  );
}

export default App;
