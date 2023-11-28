import '../App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/index.jsx';
import AboutMe from '../Pages/About-me/index';
import Projects from '../Pages/Projects/index';
import Tools from '../Pages/Tools/index';
import Navbar from '../components/Navbar';


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about-me' element={<AboutMe />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/tools' element={<Tools />}></Route>
      </Routes>

    </>
  )
}

export default App
