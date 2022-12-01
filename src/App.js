import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { useTranslation } from 'react-i18next'
import { PrivateRoute, PublicRoute } from './redux/routes'
import Dashboard from './components/dashboard/Dashboard'

function App() {
  const { t } = useTranslation()

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<PublicRoute Component={<HomePage />} />} />
        <Route path='/dashboard' element={<PrivateRoute Component={<Dashboard />} />} />
      </Routes>
      {t('greeting')}
    </div>
  )
}
export default App
