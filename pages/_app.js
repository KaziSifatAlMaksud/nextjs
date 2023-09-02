import React from 'react';
import Image from 'next/image';
import { config } from '@fortawesome/fontawesome-svg-core'
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import bgimg from '../public/homebg.jpg'
import "../public/css/style.css"

import Cards from "../pages/component/Cards"

export default function Home() {
  return (
    <>
    <div style={{zIndex: -1, position:"fixed", width:"100vw", height:"100vh" }}>
      {/* <Image
          src={bgimg} 
          alt="background"
          layout="fill"
          objectFit='cover'
        /> */}
    </div>
     
    <div className="home" >   
      <header className='header'>
        <h1>MAEMAN</h1>
        <p>WHAT'S INCLUDED</p>
      </header>
      <Cards/>
    </div>
    </>
 
  )
}
