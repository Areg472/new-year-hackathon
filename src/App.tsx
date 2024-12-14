import './App.css'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import {Homepage} from "./pages/Homepage.tsx";
import {Tours} from "./pages/Tours.tsx";
import {Flights} from "./pages/Flights.tsx";
import {ContactUs} from "./pages/ContactUs.tsx";

function App() {
  return (
      <Router>
          <Routes>
              <Route>
                  <Route path="*" element={<Homepage/>}/>
                  <Route path="/" element={<Homepage/>}/>
                  <Route path="/Tours" element={<Tours/>}/>
                  <Route path="/Flights" element={<Flights/>}/>
                  <Route path="/Contact-Us" element={<ContactUs/>}/>
              </Route>
          </Routes>
      </Router>
  )
}

export default App
