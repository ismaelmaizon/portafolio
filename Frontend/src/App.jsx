
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Inicio from './components/Inicio/inicio'
import NavBar from './components/NavBar/navBar'
import Footer from './components/Footer/footer'

function App() {

  return (
      <div className='container_1' >
        <NavBar/>
        <div className='container_2'>
          <Routes>
            <Route element={<Inicio/>} path='/Hola' ></Route>
          </Routes>
        </div>
        <div className='container_3' >
          <Footer/>
        </div>
      </div>
  )
}

export default App
