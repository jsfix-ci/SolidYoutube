import './App.css';
import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/test' element={<h1>hello user</h1>} />
      </Routes>
      <Link to='/test'>Click</Link>
    </div>
  );
}

export default App;
