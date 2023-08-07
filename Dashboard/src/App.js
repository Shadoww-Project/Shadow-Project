import { Routes, Route, Navigate, json } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Users from './Pages/Users/Users';
import Specialists from './Pages/Specialists/Specialists';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="home" />} />
        <Route path='/home' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/specialists' element={<Specialists />} />
      </Routes>
    </>
  )
}

export default App;
