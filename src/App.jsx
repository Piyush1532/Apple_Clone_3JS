import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import ProductViewer from './Components/ProductViewer'
import gsap from 'gsap'
import { ScrollTrigger,SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <ProductViewer/>
    </main>
  )
}

export default App