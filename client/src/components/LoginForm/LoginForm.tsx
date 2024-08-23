import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.css';

const LoginForm = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState<{ email?: string; password?: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const validate = () => {
        let errors: { email?: string; password?: string } = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!data.email.length) errors.email = 'El correo es requerido';
        else if (!emailRegex.test(data.email)) errors.email = 'Debes introducir un correo válido';
        if (!data.password.length) errors.password = 'La contraseña es requerida';
        else if (data.password.length < 8) errors.password = 'La contraseña debe tener al menos 8 caracteres';
        return errors;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const errors = validate();
        setError(errors);

        if (Object.keys(errors).length > 0) return;

        fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('token', JSON.stringify(data.token));
                navigate('/dashboard')
            })
            .catch(err => console.log(err));
    };

    return (
        <form className={styles['main-form']} onSubmit={handleSubmit}>
            <h3>Iniciar Sesión</h3>
            <div className={styles['form-inputs']}>
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={data.email}
                    autoComplete="off"
                />
                {error.email && <p className={styles['field-error']}>{error.email}</p>}
                <input
                    name="password"
                    type="password"
                    placeholder="Contraseña"
                    onChange={handleChange}
                    value={data.password}
                    autoComplete="off"
                />
                {error.password && <p className={styles['field-error']}>{error.password}</p>}
            </div>
            <button type="submit" className={styles['login-button']}>Iniciar Sesión</button>
        </form>
    );
};

export default LoginForm;