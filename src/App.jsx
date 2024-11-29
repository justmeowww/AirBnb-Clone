import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx';
import Card from './components/Card.jsx';
import cardData from './data/data.jsx';

export default function App() {
  const cards = cardData.map(x => {
    return(
      <Card 
        key={x.id}
        {...x}/>
    )
  })
  
  return (
    <>
      <Navbar/>
      <div className='card-grid'>
          {cards}
      </div>
    </>
  )
}