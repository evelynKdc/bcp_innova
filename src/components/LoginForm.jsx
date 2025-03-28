import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); 

    const [formData, setFormData] = useState({
        dni: "",
        password: "",
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
                    <label>Documento de identidad</label>
                    <input
                        type="text"
                        name="dni"
                        value={formData.dni}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="campo" style={{ position: "relative" }}>
                    <label>Contraseña</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={{ paddingRight: "40px" }} // Espacio para el ícono
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                            position: "absolute",
                            right: "10px",
                            bottom: ".2px",
                            transform: "translateY(-50%)",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>
                <button type="submit" className="btn-submit">Continuar</button>
            </form>
            <Link to="/registro" className="gradient-text">Aún no tengo cuenta</Link>
        </div>
    );
}
