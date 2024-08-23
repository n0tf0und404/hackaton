import { useEffect } from "react"
import { io } from "socket.io-client"
import LateralNav from "../../components/LateralNav/LateralNav"
import imgReport1 from "../../assets/medic_document_1.jpg"
import imgReport2 from "../../assets/medic_document_2.jpg"
import imgReport3 from "../../assets/medic_document_3.jpg"
import styles from "./Dashboard.module.css"

let socket: any = null

const Dashboard = () => {

    useEffect(() => {
        socket = io('http://localhost:3000')
    }, [])

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token') as string).token
        
        fetch(`http://localhost:3000/users/userByToken`, {
            method: 'GET',
            headers: {
                'authorization': token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem("username", data.username)
            })
            .catch(err => console.log(err))
    }, [])


    useEffect(() => {
        socket.emit('set name', localStorage.getItem('username'))

        return () => {
            socket.off('message')
        }
    }, [])

    const reports = [
        {
            title: 'Informe 1',
            content: 'Contenido del informe 1',
            img: imgReport1
        },
        {
            title: 'Informe 2',
            content: 'Contenido del informe 2',
            img: imgReport2
        },
        {
            title: 'Informe 3',
            content: 'Contenido del informe 3',
            img: imgReport3
        },
    ]

    return (
        <div className={styles["main-container"]}>
            <LateralNav></LateralNav>
            <div className={styles["elements-container"]}>
                <div className={styles["elements-grid"]}>
                    <div className={`${styles["element"]} ${styles["element-report"]}`}>
                        <h2>Informes</h2>
                        <div className={styles["report-container"]}>
                            {
                                reports.map((report) => (
                                    <div className={styles["report-element"]}>
                                        <div>
                                            <h3>{report.title}</h3>
                                            <p>{report.content}</p>
                                        </div>
                                        <img src={report.img} alt="image" /> 
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={styles["element"]}>
                        <h2>Doctores</h2>
                    </div>
                    <div className={styles["element"]}>
                        <h2>Estado Medico</h2>
                        <div className={styles["medic-status"]}>
                            <div className={styles["medic-status-element"]}>
                                <h1>A+</h1>
                                <p>Estado Actual</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Dashboard