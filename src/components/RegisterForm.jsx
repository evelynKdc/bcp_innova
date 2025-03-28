import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
    const navigate = useNavigate(); 

    const [formData, setFormData] = useState({
        edad: "",
        ocupacion: "",
        ingreso: "",
        motivacion: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        navigate("/intranet")
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Para conocerte Mejor</h2>
            <h3 className="form-title-sub"> Queremos saber más de tu perfil para adaptar los módulos a tus necesidades</h3>

            <form onSubmit={handleSubmit} className="form">


                <div className="campo">
                    <label>¿Cuál es tu edad?</label>
                    <input
                        type="number"
                        name="edad"
                        value={formData.edad}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="campo">
                    <label>¿Cuál es tu ocupación?</label>
                    <input
                        type="text"
                        name="ocupacion"
                        value={formData.ocupacion}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="campo">
                    <label>¿Cuál es el promedio de tu ingreso mensual?</label>
                    <input
                        type="text"
                        name="ingreso"
                        value={formData.ingreso}
                        onChange={handleChange}
                        placeholder="Esta información es confidencial"
                    />
                </div>

                <div className="campo">
                    <label>¿Cuál es tu objetivo financiero?</label>
                    <select
                        name="motivacion"
                        value={formData.motivacion}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Selecciona una opción</option>
                        <option value="deudas">Quiero pagar mis deudas</option>
                        <option value="ahorro">Quiero ahorrar para cumplir mis metas</option>
                        <option value="inversion">Quiero invertir para mi negocio</option>
                    </select>
                </div>



                <button type="submit" className="btn-submit">Comenzar</button>
            </form>
        </div>
    );
}
