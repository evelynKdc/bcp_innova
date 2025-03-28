import { useState } from 'react'
import bcpLogo from '/bcp-logo.png'
import WomenFoto from '../assets/image87.svg'
import firstImageRow from '../assets/image94.svg'
import secondImageRow from '../assets/image98.svg'
import thirdImageRow from '../assets/image102.svg'
import fourImageRow from '../assets/image104.svg'


import Descubre from "../assets/descubre.svg"
import avatar from "../assets/avatar.svg"


import { useNavigate } from 'react-router-dom';
import { AccessAlarm, AccountCircle } from '@mui/icons-material';
export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className='nav_header custom-navbar '>

        <h1>
          Participa en sorteos de s/500  y gift cards de s/50
        </h1>


        {/* <button onClick={() => navigate("/registro")}>Entrar</button> */}
      </nav>
      <section className='heroSection heroSection_custom'>
        <div className='heroTextGroup'>
          <p className='heroText'>Campus Warmi Yachay</p>
          <p className='heroTextHeader'>Empodérate y transforma tu futuro<br /> financiero con Warmi Yachay
          </p>
          <button className='buttonRegister' onClick={() => navigate("/registro")}>

            <AccountCircle />
            <p>Registrate aqui</p>
          </button>
        </div>

        <img src={WomenFoto} className="womenPhoto" alt="women photo" />


        <div className='cardsLevels'>
          <div className="business-card">
            <img src={firstImageRow} className="business-image" alt="women photo" />

            <div className="business-content">
              <div className="badge">Nivel plata</div>
              <h3>¿Cómo manejar mi negocio?</h3>
              <p>Aprende a planificar y gestionar</p>

              <div className="business-time">
                <AccessAlarm />
                <p>1h 10m</p>
              </div>
            </div>
          </div>
          <div className="business-card business-card-diamante">
            <img src={secondImageRow} className="business-image" alt="women photo" />

            <div className="business-content">
              <div className="badge badge_diamante">Nivel diamante</div>
              <h3>Llevando tu negocio al siguiente nivel</h3>
              <p>Conoce la mejor forma de invertir</p>

              <div className="business-time">
                <AccessAlarm />
                <p>2h 07m</p>
              </div>
            </div>
          </div>


          <div className="business-card business-card-blue">
            <img src={thirdImageRow} className="business-image" alt="women photo" />

            <div className="business-content">
              <div className="badge badge_blue">Nivel bronce</div>
              <h3>Finanzas familiares</h3>
              <p>Gestiona tus gastos en cuestión de minutos</p>

              <div className="business-time">
                <AccessAlarm />
                <p>1h 55m</p>
              </div>
            </div>
          </div>




          <div className="business-card">
            <img src={fourImageRow} className="business-image" alt="women photo" />

            <div className="business-content">
              <div className="badge">Nivel plata</div>
              <h3>SOS: Quiero ahorrar</h3>
              <p>Aplica los mejores métodos de ahorro</p>

              <div className="business-time">
                <AccessAlarm />
                <p>1h 55m</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='sectionTemplate categorieSection '>
        <p className='titleCategories'>Categorias destacadas</p>
        <div className='flex '>
          <div class="module-border-wrap"><div class="module">
            La ruta del ahorro </div></div>

          <div class="module-border-wrap"><div class="module">
            Inversiones </div></div>

          <div class="module-border-wrap"><div class="module">
            Psicología del dinero </div></div>

          <div class="module-border-wrap"><div class="module">
            Metas financieras </div></div>

          <div class="module-border-wrap"><div class="module">
            Plan de retiros</div></div>
        </div>
      </section>


      <section className='sectionCenter'>
        <p className='titleFijas'>Las fijas de <span className='spanFijas'>Warmi Yachay</span></p>
        <p className='subFijas'>Aprende como manejar tu dinero de forma sencilla y divertida</p>
      </section>


      <section className='sectionCenter'>
        <img src={Descubre} className="descubreImage" alt="women photo" />
      </section>


      <section className='generalSection flex'>
<p className='titleTop'>TOP 10 de la Liga Diamante</p>
<p className='subTop'>Completa las misiones y participa de los beneficios del ranking</p>
       <div className='flexrow'>
       <div className='column'>
          <img src={avatar} className="avatar" alt="women photo" />
          <p className='name'>Eufrasina</p>
          <p className='city'>Ayacucho</p>
        </div>

        <div className='column'>
          <img src={avatar} className="avatar" alt="women photo" />
          <p className='name'>Natalia</p>
          <p className='city'>Cusco</p>
        </div>
        <div className='column'>
          <img src={avatar} className="avatar" alt="women photo" />
          <p className='name'>Tiffany</p>
          <p className='city'>Ancash</p>
        </div>
        <div className='column'>
          <img src={avatar} className="avatar" alt="women photo" />
          <p className='name'>Andrea</p>
          <p className='city'>Cerro de Pasco</p>
        </div>
        <div className='column'>
          <img src={avatar} className="avatar" alt="women photo" />
          <p className='name'>Ana</p>
          <p className='city'>Arequipa</p>
        </div>
       </div>
      </section>

    </>
  )
}
