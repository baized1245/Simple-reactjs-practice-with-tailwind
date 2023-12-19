import { useState } from 'react'
import React from 'react'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Experts from './Components/Experts'
import NewsLetter from './Components/NewsLetter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <Experts/>
      <NewsLetter/>
    </>
  )
}

export default App
