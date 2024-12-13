import './App.css'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import {Homepage} from "./pages/Homepage.tsx";

function App() {

  return (
      <Router>
          <Routes>
              <Route>
                  <Route path="*" element={<Homepage/>}/>
                  <Route path="/" element={<Homepage/>}/>
              </Route>
          </Routes>
      </Router>
  )
}

export default App
