import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'
import katieZaferes from '/katie-zaferes.png';




export default function App() {
  return (
    <>
      <Navbar/>
      <div className='card-grid'>
        <Card
          img={katieZaferes}
          rating="5.0" 
          reviews={6}
          location="USA" 
          title="Life lessons with Katie Zaferes" 
          price={136}/>
        <Card
          img={katieZaferes}
          rating="4.0" 
          reviews={6}
          location="USA" 
          title="Life lessons with Katie Zaferes" 
          price={0}/>
      </div>
    </>
  )
}