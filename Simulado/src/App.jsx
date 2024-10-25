
import './App.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.JS'
import Navbar from './components/Navbar/Navbar'
import Header from "./components/Header/header"
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <>
  <Navbar />
  <Header />
  <Footer />
  <Outlet />
    </>
    
  )}

export default App
