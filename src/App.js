import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      {t('greeting')}
    </div>
  )
}
export default App
