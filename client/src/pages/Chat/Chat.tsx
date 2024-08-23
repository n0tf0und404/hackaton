import ChatMessages from '../../components/ChatMessages/ChatMessages'
import ChatsList from '../../components/ChatsList/ChatsList'
import styles from './Chat.module.css'

const Chat = () => {
    return (
        <div className={styles['container']}>
            <h1>Chat</h1>
            <div className={styles['chats-container']}>
                <ChatsList />   
                <ChatMessages />
            </div>
        </div>
    )
}

export default Chat