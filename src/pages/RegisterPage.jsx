import React, { useState } from 'react'
import bcpLogo from '/bcp-logo.png'
import registerPhoto from '../assets/register.svg'
import RegisterForm from '../components/RegisterForm'
import { useNavigate } from 'react-router-dom'
import RegisterStep1 from '../components/RegisterStep1'


export const RegisterPage = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    return (
        <div className='generalPage'>
            <div className='designRegister'>
                <img onClick={() => navigate("/")} src={bcpLogo} className="logoRegister" alt="Vite logo" />
                <p className='textDesign'>¡Cada vez más empoderada! <br /> <span className='spanText'>Luchemos por un Perú mejor</span></p>
                <img src={registerPhoto} className="regiterPhoto" alt="registerPhoto" />

            </div>

            {step === 1 && <RegisterStep1 setStep={setStep} />}
            {step === 2 && <RegisterForm />}


        </div>
    )
}
