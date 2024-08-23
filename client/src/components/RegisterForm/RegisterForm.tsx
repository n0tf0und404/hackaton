import { useState } from "react"
import { RegisterData, RegisterValidations } from "../../types/register.types"
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
    const [ error, setError ] = useState<RegisterValidations>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const { name, value } = e.target as HTMLInputElement

        setData({ ...data, [name]: value })
    }

    const validate = () => {
        let errors: RegisterValidations = {}
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!data.name.length) errors.name = "El nombre es requerido"
        else if (data.name.length < 3) errors.name = "Tu nombre debe tener al menos 3 caracteres"
        else if (!data.username.length) errors.username = "El nombre de usuario es requerido"
        else if (data.username.length < 4) errors.username = "El nombre de usuario es debe tener al menos 4 caracteres"
        else if (!data.description.length) errors.description = "La descripción es requerida"
        else if (!data.email.length) errors.email = "El correo es requerido"
        else if (!emailRegex.test(data.email)) errors.email = "Debes introducir un correo valido"
        else if (!data.password.length) errors.password = "La contraseña es requerida"
        else if (data.password.length < 8) errors.password = "La contraseña debe tener al menos 8 caracteres"
        else if (data.password === data.password.toLowerCase()) errors.password = "La contraseña debe tener al menos una letra mayúscula"
        else if (data.password === data.password.toUpperCase()) errors.password = "La contraseña debe tener al menos una letra minúscula"
        else if (data.password !== data.confirmPassword) errors.confirmPassword = "Las contraseñas no coinciden"
        return errors
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const errors = validate()
        setError(errors)

        if (Object.keys(errors).length > 0 ) return 

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
                {
                    error.hasOwnProperty("name") ? <p className={styles["field-error"]}>{error.name}</p> : null
                }
                <input 
                    name="username" 
                    type="text" 
                    placeholder="Nombre de Usuario" 
                    onChange={handleChange} 
                    value={data.username}
                    autoComplete="off" />
                {
                    error.hasOwnProperty("username") ? <p className={styles["field-error"]}>{error.username}</p> : null
                }
                <input 
                    name="description" 
                    type="text" 
                    placeholder="Descripción" 
                    onChange={handleChange} 
                    value={data.description}
                    autoComplete="off" />
                {
                    error.hasOwnProperty("description") ? <p className={styles["field-error"]}>{error.description}</p> : null
                }
                <input 
                    name="email" 
                    type="email" 
                    placeholder="Email" 
                    onChange={handleChange}
                    value={data.email} 
                    autoComplete="off" />
                {
                    error.hasOwnProperty("email") ? <p className={styles["field-error"]}>{error.email}</p> : null
                }
                <input 
                    name="password" 
                    type="password" 
                    placeholder="Contraseña" 
                    onChange={handleChange}
                    value={data.password} 
                    autoComplete="off" />
                {
                    error.hasOwnProperty("password") ? <p className={styles["field-error"]}>{error.password}</p> : null
                }
                <input 
                    name="confirmPassword" 
                    type="password" 
                    placeholder="Repetir Contraseña" 
                    onChange={handleChange}
                    value={data.confirmPassword} 
                    autoComplete="off" />
                {
                    error.hasOwnProperty("confirmPassword") ? <p className={styles["field-error"]}>{error.confirmPassword}</p> : null
                }
            </div>
            <button type="submit" className={styles["register-button"]}>Registrarse</button>
        </form>
    )
}

export default RegisterForm