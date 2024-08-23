import styles from './ChatDoctorIA.module.css'
import ChatDoctorIAMessages from '../../components/DoctorIAMessages/ChatDoctorIAMessages'

const ChatDoctorIA = () => {
    return (
        <div className={styles['messages-container']}>
            <ChatDoctorIAMessages />
        </div>
    )
}

export default ChatDoctorIA