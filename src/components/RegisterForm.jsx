import { useState } from "react";

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        edad: "",
        ocupacion: "",
        ingreso: "",
        motivacion: "",
        objetivo: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
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
                    <label>¿Cuál es tu motivación principal?</label>
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

                <div className="campo">
                    <label>¿Cuál es tu objetivo?</label>
                    <select
                        name="objetivo"
                        value={formData.objetivo}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Selecciona una opción</option>
                        <option value="Aprender estrategias para salir de deudas y mejorar mi situación financiera.">
                            Aprender estrategias para salir de deudas y mejorar mi situación financiera.
                        </option>
                        <option value="Aprender técnicas de ahorro para lograr mis metas financieras.">
                            Aprender técnicas de ahorro para lograr mis metas financieras.
                        </option>
                        <option value="Aprender sobre inversiones para hacer crecer mi negocio.">
                            Aprender sobre inversiones para hacer crecer mi negocio.
                        </option>
                    </select>
                </div>

                <button type="submit" className="btn-submit">Continuar</button>
            </form>
        </div>
    );
}
