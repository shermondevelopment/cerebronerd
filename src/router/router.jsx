import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* pages */
import Home from '../pages/home/index.jsx'
import Course from '../pages/Course/Course.jsx'

const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/curso/:id" element={<Course/>} exact />
    </Routes>
  </BrowserRouter>
)

export default Routers