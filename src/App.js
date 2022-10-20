import { Routes, Route } from 'react-router-dom'
// ------ Layout ------
import Layout from './layout'
// ------ Pages ------
import Home from './pages/home'

export default function App() {

  return (
    <Layout>
      <Routes>
        <Route element={<Home />} path='/' />
      </Routes>
    </Layout>
  )
}
