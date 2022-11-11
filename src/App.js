<<<<<<< HEAD
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
=======
import './App.css';
import { useTranslation } from 'react-i18next';
>>>>>>> 615a432 (feat: add i18next)

function App() {
  const { t} = useTranslation();

  return (
    <div className="App">
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
=======
      {t('greeting')}
>>>>>>> 615a432 (feat: add i18next)
    </div>
  );
}

export default App;