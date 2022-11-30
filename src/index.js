import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import './i18n'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDm9xO6N3VHS3I0acoPFd6OSSVyuP4gq2c',
  authDomain: 'solid-team-ab334.firebaseapp.com',
  projectId: 'solid-team-ab334',
  storageBucket: 'solid-team-ab334.appspot.com',
  messagingSenderId: '843780543210',
  appId: '1:843780543210:web:4e0542f88518f63949bd93',
  measurementId: 'G-M5V7Y4DJWG',
}

initializeApp(firebaseConfig)
const db = getFirestore()
const colRef = collection(db, 'books')

getDocs(colRef)
  .then((snapshot) => {
    let books = []
    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books)
  })
  .catch(err => {
    console.log(err.message)
  })

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
