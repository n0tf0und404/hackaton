import styles from './ChatItem.module.css'
import { ChatItemProps } from '../../types/chat.types'

const ChatItem = ({ profileImage, username, message, clicked, handleSelectChat }: ChatItemProps) => {

    return (
        <div 
            className={`${styles["chat-item-container"]} ${clicked ? styles["item-clicked"] : ""}`}
            onClick={handleSelectChat}
        >
            <img src={profileImage} alt="foto" />
            <div className={styles["chat-item-info"]}>
                <p className={styles["chat-item-username"]}>{username}</p>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default ChatItem