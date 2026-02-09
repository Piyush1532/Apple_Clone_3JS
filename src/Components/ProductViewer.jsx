import React from 'react'
import useMacBookStore from '../Store'
import clsx from 'clsx'
import {Canvas} from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei";
import MacbookModel14 from './models/Macbook-14';
import StudioLights from './StudioLights';
const ProductViewer = () => {
const {color,scale,setColor,setScale}=useMacBookStore()


  return (
    <section id='product-viewer'>
        <h2>Take a closer look</h2>
        <div className="controls mt-20">
            <p className='info'>Macbook Pro 16 Space Black</p>

            <div className='flex-center gap-5 mt-10'>
                <div className="color-control">
<div
  className={clsx(
    "bg-neutral-300",
    color === "#abe5bd" && "active"
  )}
  onClick={() => setColor("#abe5bd")}
/>
<div
  className={clsx(
    "bg-neutral-900",
    color === "#2e2c2e" && "active"
  )}
  onClick={() => setColor("#2e2c2e")}
/>
</div>
</div>
<div className="size-control">
<div
  className={clsx(scale===0.06 ?"bg-white text-black":"bg-transparent text-white")}
  onClick={() => setScale(0.06)}
><p>14"</p></div>

<div
  className={clsx(scale===0.08 ?"bg-white text-black":"bg-transparent text-white")}
  onClick={() => setScale(0.08)}
><p>16"</p></div>
 
</div>

                </div>

            <Canvas id="canvas" camera={{position:[0,2,5],fov:50,near:0.1,far:100}}>
          <StudioLights/>
<MacbookModel14 scale={0.06} position={[0,0,0]}/>

<OrbitControls enableZoom={false}/>
            </Canvas>
    </section>
  )
}

export default ProductViewer