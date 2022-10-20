import { Routes, Route } from 'react-router-dom'
// ------ Pages ------
import Home from './pages/home'

export default function App() {

  return (
    <Routes>
      <Route element={<Home />} path='/' />
    </Routes>
  )
}
