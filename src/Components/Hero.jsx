import React, { useEffect, useRef } from 'react'

const Hero = () => {

const videoRef=useRef()
useEffect(()=>{
if (videoRef.current){
    videoRef.current.playbackRate=2
}
},[])
  return (
    <div id='hero' className=''>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="" />
        <video src="/videos/hero.mp4" autoPlay muted playsInline ref={videoRef} className='overflow-hidden'></video>
        <button>Buy</button>
        <p>$1699 or $144/mo for 12 months</p>
        </div>
  )
}

export default Hero