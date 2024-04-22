
import "./styles/main.css"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import Project from './pages/Project'
import ScrollToTop from './utils/ScrollToTop'

function App() {


  return (
<div className="App">
<Router>
<ScrollToTop />
<Navbar />

<Routes>
  
  <Route path='/' element ={<Home></Home>}></Route>
  <Route path="/projects" element={<Projects></Projects>}/>
  <Route path='/project/:id' element={<Project></Project>}/>
  <Route path='/contacts' element={<Contacts></Contacts>}/>
</Routes>




<Footer />

</Router>

</div>
  )
}

export default App
