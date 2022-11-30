import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { useTranslation } from 'react-i18next'
import Sidebar from './sidebar/Sidebar'
import Shorts from './pages/Shorts'
import Subscriptions from './pages/Subscriptions'
// import { useEffect } from 'react'
// import Api from './api/Api'

function App() {
  const { t } = useTranslation()

  // useEffect(() => {
  //   Api.getList()
  //   .then((res) => {console.log(res)})
  // })

  return (
    <div className='App'>
      <Sidebar>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/shorts' element={<Shorts />} />
          <Route path='/subscriptions' element={<Subscriptions />} />
          <Route path='/library' element={<HomePage />} />
          <Route path='/history' element={<HomePage />} />
          <Route path='/yourVideo' element={<HomePage />} />
          <Route path='/watchLater' element={<HomePage />} />
          <Route path='/liked' element={<HomePage />} />
          <Route path='/settings' element={<HomePage />} />
          <Route path='/complaints' element={<HomePage />} />
          <Route path='/reference' element={<HomePage />} />
          <Route path='/review' element={<HomePage />} />
        </Routes>
      </Sidebar>
      {t('greeting')}
    </div>
  )
}
export default App
