import styles from "./RegisterForm.module.css"

const RegisterForm = () => {
    return (
        <form className={styles["main-form"]}>
            <h3>Registro</h3>
            <div className={styles["form-inputs"]}>
                <input 
                    name="name" 
                    type="text" 
                    placeholder="Nombre" 
                    autoComplete="off" />
                <input 
                    name="username" 
                    type="text" 
                    placeholder="Nombre de Usuario" 
                    autoComplete="off" />
                <input 
                    name="description" 
                    type="text" 
                    placeholder="Descripción" 
                    autoComplete="off" />
                <input 
                    name="email" 
                    type="email" 
                    placeholder="Email" 
                    autoComplete="off" />
                <input 
                    name="password" 
                    type="password" 
                    placeholder="Contraseña" 
                    autoComplete="off" />
                <input 
                    name="confirmPassword" 
                    type="password" 
                    placeholder="Repetir Contraseña" 
                    autoComplete="off" />
            </div>
            <button type="submit" className={styles["register-button"]}>Registrarse</button>
        </form>
    )
}

export default RegisterForm