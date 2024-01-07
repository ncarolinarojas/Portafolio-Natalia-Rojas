import '../App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/index.jsx';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects/index.jsx';
import { PortfolioProvider } from '../Context/index.jsx';
import Footer from '../components/Footer/index.jsx';
import Contact from '../Pages/Contact/index.jsx'

function App() {

  return (
    <>
      <PortfolioProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        <Footer/>
      </PortfolioProvider>
    </>
  )
}

export default App
