import styles from './LoginForm.module.css';

const LoginForm = () => {
    return (
        <form className={styles['main-form']}>
            <h3>Iniciar Sesión</h3>
            <div className={styles['form-inputs']}>
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    autoComplete="off"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Contraseña"
                    autoComplete="off"
                />
            </div>
            <button type="submit" className={styles['login-button']}>Iniciar Sesión</button>
        </form>
    );
};

export default LoginForm;