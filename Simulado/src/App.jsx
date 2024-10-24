
import './App.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.JS'
import Navbar from './components/Navbar/Navbar'
import Header from "./components/Header/header"
import { Outlet } from 'react-router-dom'


function App() {
  return (
    <>
  <Navbar />
  <Header />
    </>
    
  )}

export default App
