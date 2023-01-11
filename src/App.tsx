import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <h2>Movie Lib</h2>
      <Outlet />
    </div>
  )
}

export default App
