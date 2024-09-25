import React from 'react'
import img1 from '../Assets/img_1426.jpg'

export default function Home() {
  return (
    <div style={{
        backgroundImage:`url(${img1})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',  
        width: '100%',
    }}>
          
    </div>
  )
}
