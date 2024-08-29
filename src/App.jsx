import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'
import PropertiesPage from './pages/PropertiesPage/PropertiesPage'
import PropertyDetails from './pages/PropertyDetails/PropertyDetails'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/properties' element={<PropertiesPage />} />
          <Route path='/propertyDetails' element={<PropertyDetails />} />
          <Route path='/contactUs' element={<ContactUsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
