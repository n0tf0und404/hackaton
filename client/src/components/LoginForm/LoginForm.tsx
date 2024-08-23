import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.css';

const LoginForm = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

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
                <input
                    name="password"
                    type="password"
                    placeholder="Contraseña"
                    onChange={handleChange}
                    value={data.password}
                    autoComplete="off"
                />
            </div>
            <button type="submit" className={styles['login-button']}>Iniciar Sesión</button>
        </form>
    );
};

export default LoginForm;