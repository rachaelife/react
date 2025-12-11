import { Bs0Circle } from "react-icons/bs"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import EcobazarNavbar from "./components/nav"
import Homepage from "./pages/homepage"


function App() {
  

  return (
 <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Homepage/>} />  
  </Routes>
  </BrowserRouter>
</>
  )
}

export default App
