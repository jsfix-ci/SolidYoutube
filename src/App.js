import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const { t} = useTranslation();

  return (
    <div className="App">
      {t('greeting')}
    </div>
  );
}

export default App;