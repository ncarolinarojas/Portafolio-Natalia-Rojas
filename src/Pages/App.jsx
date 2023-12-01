import '../App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/index.jsx';
import Navbar from '../components/Navbar';
import AboutMe from '../components/Aboutme/index.jsx';
import Projects from '../components/Projects/index.jsx';
import { PortfolioProvider } from '../Context/index.jsx';
import Footer from '../components/Footer/index.jsx';

function App() {

  return (
    <>
      <PortfolioProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='#about-me' element={<AboutMe/>}></Route>
          <Route path='#projects' element={<Projects/>}></Route>
        </Routes>
        <Footer/>
      </PortfolioProvider>
    </>
  )
}

export default App
