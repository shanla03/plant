import React from 'react'
import './Footer.css';
import img3 from '../../Assets/instagram_icon.png'
import img4 from '../../Assets/whatsapp_icon.png'
import img5 from '../../Assets/logoplant.jpg'


export default function Footer() {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={img5} style={{display:{xs:'none',md:'flex'},marginRight:'8px',height:'40px'}}/>
            <p>Green Oasis</p>

        </div>
        <ul className="footer-links">
            <li> Products</li>
            <li> About</li>
            <li> Contact</li>
            
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={img3}/>

            </div>
            <div className="footer-icons-container">
            <img src={img4}/>

            </div>
        </div>
        <div className="footer-copyright"> 
            <hr/>
            <p>copyright @ 2024 All Right Reserved</p>

        </div>
      
    </div>
  )
}
