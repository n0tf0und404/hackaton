import { useState } from 'react'
import { ImAlarm, ImCalendar, ImBubbles, ImTable2, ImFilesEmpty, ImExit } from 'react-icons/im'
import styles from './LateralNav.module.css'
import { useNavigate } from 'react-router-dom'

const LateralNav = () => {

    const navigate = useNavigate()

    const [currentPage, setCurrentPage] = useState<number>(1)

    const pages = [
        {
            name: "Dashboard",
            icon: <ImTable2 />
        },
        {
            name: "Citas",
            icon: <ImCalendar />
        },
        {
            name: "Doctores",
            icon: <ImBubbles />
        },
        {
            name: "Historial",
            icon: <ImFilesEmpty />
        },
        {
            name: "Medicaciones",
            icon: <ImAlarm />
        },
    ]

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    return (
        <nav className={styles["lateral-nav"]}>
            <h2>HealthHackathon</h2>
            <ul>
                {
                    pages.map((page, index) => (
                        <li 
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={currentPage === index + 1 ? styles["selected-page"] : ""}
                        >
                            {page.icon}
                            <p>{page.name}</p>
                        </li>
                    ))
                }
            </ul>
            <div 
                className={styles.logout}
                onClick={() => navigate("/")}
            >
                <ImExit />
                <p>Logout</p>
            </div>
        </nav>
    )
}

export default LateralNav