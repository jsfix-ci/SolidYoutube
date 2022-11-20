import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { useTranslation } from 'react-i18next'
import VideoPage from './pages/videoPage/VideoPage'

function App() {
  const { t } = useTranslation()

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/VideoPage' element={<VideoPage />} />
      </Routes>
      {t('greeting')}
    </div>
  )
}
export default App
