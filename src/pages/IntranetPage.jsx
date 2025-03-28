import { AccessTime, Group, Groups } from '@mui/icons-material'
import React from 'react'
import ModuleImage from "../assets/module.svg"
import PointsImage from "../assets/points.svg"

export const IntranetPage = () => {
    return (
        <>
            <nav className='nav_header'>
                <div>

                    <h1>
                        Warmi Yachay
                    </h1>
                </div>


                <p className='pointsValue'>Warmy Points: 25</p>


                {/* icon aqui falta */}
            </nav>
            <section className="welcomeSection">
                <p className='greeting'>¡Hola, Lucia! ¡Te damos la bienvenida a WARMI YACHAY!</p>
                <p>"Warmi Yachay: Aprende, Ahorra e Invierte para Transformar tu Futuro"</p>
            </section>
            <section className='modulesSection'>
                <div className='modulesRow'>
                    <div>
                        <p>Modulo 1</p>
                        <div className='indicator'></div>
                    </div>
                    <div>
                        <p>Modulo 2</p>
                        <div className='indicator'></div>

                    </div>
                    <div>
                        <p>Modulo 3</p>
                        <div className='indicator'></div>

                    </div>
                </div>
                <section className="cardsGroup">
                    <div className='flex'>
                        <div className="card">
                            <img src={ModuleImage} className="moduleImage" alt="Vite logo" />
                            <p className="title">Huyendo de los hábitos financieros</p>
                            <p className="points">6 Warmy Points</p>
                            <button className='buttonEnter'>Ingresar</button>
                        </div>
                        <div className="card">
                            <img src={ModuleImage} className="moduleImage" alt="Vite logo" />
                            <p className="title">Ahorrando y aprendiendo</p>
                            <p className="points">8 Warmy Points</p>
                            <button className='buttonEnter'>Ingresar</button>
                        </div>
                        <div className="card">
                            <img src={ModuleImage} className="moduleImage" alt="Vite logo" />
                            <p className="title">Velando por un futuro</p>
                            <p className="points">4 Warmy Points</p>
                            <button className='buttonEnter'>Ingresar</button>
                        </div>
                    </div>
                </section>


            </section>
            <section className='modulesSection '>
                <p className="greeting">Utiliza tus Warmy Points</p>
                <div className='flex'>
                    <div className="custom-card">
                        <img src={PointsImage} className="custom-module-image" alt="Vite logo" />

                        <div className="custom-content">
                            <p className="custom-title">Diagnóstico Financiero</p>
                            <p className="custom-subtitle">Asesoría personalizada</p>

                            <div className="custom-info">
                                <div className="custom-info-item">
                                    <Groups />
                                    <span>250</span>
                                </div>
                                <div className="custom-info-item">
                                    <AccessTime />
                                    <span>12:50 m</span>
                                </div>
                            </div>

                            <p className="custom-points">49 Warmy points</p>
                            <button className="buttonEnter">Canjear</button>
                        </div>
                    </div>
                    <div className="custom-card">
                        <img src={PointsImage} className="custom-module-image" alt="Vite logo" />

                        <div className="custom-content">
                            <p className="custom-title">Diagnóstico Financiero</p>
                            <p className="custom-subtitle">Plan financiero de negocios</p>

                            <div className="custom-info">
                                <div className="custom-info-item">
                                    <Groups />
                                    <span>3502</span>
                                </div>
                                <div className="custom-info-item">
                                    <AccessTime />
                                    <span>7h 16m</span>
                                </div>
                            </div>

                            <p className="custom-points">70 Warmy points</p>
                            <button className="buttonEnter">Canjear</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
