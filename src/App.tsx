import './App.css'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import {Homepage} from "./pages/Homepage.tsx";
import {Tours} from "./pages/Tours.tsx";
import {Flights} from "./pages/Flights.tsx";
import {ContactUs} from "./pages/ContactUs.tsx";
import {Hmm} from "./pages/Hmm.tsx";

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
                  <Route path="/Letter" element={<Hmm/>}/>
              </Route>
          </Routes>
      </Router>
  )
}

export default App
