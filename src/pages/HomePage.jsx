import { useState } from 'react'
import bcpLogo from '/bcp-logo.png'
import WomenFoto from '../assets/womenPhoto.png'
import { useNavigate } from 'react-router-dom';
export const HomePage = () => {
    const navigate = useNavigate(); 
  return (
     <>
          <nav className='nav_header'>
            <div>
              <img src={bcpLogo} className="logo" alt="Vite logo" />
    
              <h1>
                Warmi Yachay
              </h1>
            </div>
    
            <button onClick={() => navigate("/registro")}>Entrar</button>
          </nav>
          <section className='heroSection'>
            <div className='heroTextGroup'>
              <p className='heroTextHeader'>ESPACIOS FEMENINOS COMPARTIDOS: <br />
                Aprende a ahorrar y gestionar gastos conjuntos con tu socias
              </p>
              <p className='heroText'>Abre una cuenta YAPE/BCP y descubre las subcuentas de Espacios compartidos. Funcionan como una cuenta conjunta en la que ahorrar, apartar dinero y compartir gastos con familiares y amigos.</p>
            </div>
    
            <img src={WomenFoto} className="womenPhoto" alt="women photo" />
          </section>
    
        </>
  )
}
