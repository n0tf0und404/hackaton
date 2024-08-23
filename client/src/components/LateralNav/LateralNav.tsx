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
            url: "/dashboard",
            icon: <ImTable2 />
        },
        {
            name: "Citas",
            url: "#",
            icon: <ImCalendar />
        },
        {
            name: "Doctores",
            url: "/chat",
            icon: <ImBubbles />
        },
        {
            name: "Historial",
            url: "#",
            icon: <ImFilesEmpty />
        },
        {
            name: "Medicaciones",
            url: "#",
            icon: <ImAlarm />
        },
        {
            name: "DoctorIA",
            url: "/doctoria",
            icon: <ImBubbles />
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
                            onClick={() => {
                                handlePageChange(index + 1)
                                navigate(page.url)
                            }}
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