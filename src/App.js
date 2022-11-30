import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { useTranslation } from 'react-i18next'
import VideoPage from './pages/VideoPage'
import { useDispatch } from 'react-redux'
import { fethVideo } from './redux/videoSlice'
import { useEffect } from 'react'

function App() {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fethVideo())
  }, [])

  return (
    <div className='App'>
      <Routes>
        <Route path='/HomePage' element={<HomePage />} />
        <Route path='/VideoPage' element={<VideoPage />} />
      </Routes>
      {t('greeting')}
    </div>
  )
}
export default App
