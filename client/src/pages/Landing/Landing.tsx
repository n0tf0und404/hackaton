import styles from './Landing.module.css'
import landingImg from "../../assets/landing_img.png" 
import { useNavigate } from 'react-router-dom'

const Landing = () => {

    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <div className={styles["img-landing"]}>
                <img src={landingImg} alt="image" />
            </div>
            <div className={styles["presentation-landing"]}>
                <h1>HealthHackathon</h1>
                <p>Administración de Historial Clínico</p>
                <div className={styles["buttons-container"]}>
                    <button onClick={() => navigate("/login")}>Iniciar sesión</button>
                    <button  onClick={() => navigate("/register")}>Registrarse</button>
                </div>
            </div>
        </div>
    )
}

export default Landing