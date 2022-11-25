import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import { useTranslation } from 'react-i18next'
import Header from './components/header/Header'

function App() {
  const { t } = useTranslation()
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      {t('greeting')}
    </div>
  )
}
export default App
