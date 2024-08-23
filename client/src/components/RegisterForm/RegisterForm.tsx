import { useState } from "react"
import { RegisterData } from "../../types/register.types"
import styles from "./RegisterForm.module.css"
import { useNavigate } from "react-router-dom"

const RegisterForm = () => {

    const navigate = useNavigate()

    const [ data, setData ] = useState<RegisterData>({
        name: "",
        username: "",
        description: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const { name, value } = e.target as HTMLInputElement

        setData({ ...data, [name]: value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(_data => navigate("/login"))
            .catch(err => console.log(err))
    }

    return (
        <form className={styles["main-form"]} onSubmit={handleSubmit}>
            <h3>Registro</h3>
            <div className={styles["form-inputs"]}>
                <input 
                    name="name" 
                    type="text" 
                    placeholder="Nombre" 
                    onChange={handleChange} 
                    value={data.name}
                    autoComplete="off" />
                <input 
                    name="username" 
                    type="text" 
                    placeholder="Nombre de Usuario" 
                    onChange={handleChange} 
                    value={data.username}
                    autoComplete="off" />
                <input 
                    name="description" 
                    type="text" 
                    placeholder="Descripción" 
                    onChange={handleChange} 
                    value={data.description}
                    autoComplete="off" />
                <input 
                    name="email" 
                    type="email" 
                    placeholder="Email" 
                    onChange={handleChange}
                    value={data.email} 
                    autoComplete="off" />
                <input 
                    name="password" 
                    type="password" 
                    placeholder="Contraseña" 
                    onChange={handleChange}
                    value={data.password} 
                    autoComplete="off" />
                <input 
                    name="confirmPassword" 
                    type="password" 
                    placeholder="Repetir Contraseña" 
                    onChange={handleChange}
                    value={data.confirmPassword} 
                    autoComplete="off" />
            </div>
            <button type="submit" className={styles["register-button"]}>Registrarse</button>
        </form>
    )
}

export default RegisterForm