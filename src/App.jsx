import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import VideoPage from './Pages/VideoPage'
import CelebDetail from './Pages/CelebDetail'
import SignIn from './Pages/SignIn'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoPage />} />
        <Route path="/celebrity/:id" element={<CelebDetail />} />
        <Route path="/registration/signin" element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App  