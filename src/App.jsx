import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Initiatives from "./pages/Initiatives"
// import SuccessStories from "./pages/SuccessStories"
// import Events from "./pages/Events"
// import Join from "./pages/Join"
// import Gallery from "./pages/Gallery"
// import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="initiatives" element={<Initiatives />} />
          {/* <Route path="success-stories" element={<SuccessStories />} />
          <Route path="events" element={<Events />} />
          <Route path="join" element={<Join />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
