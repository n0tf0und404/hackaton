import { useState } from 'react'
import ChatItem from '../ChatItem/ChatItem'
import styles from './ChatsList.module.css'

import avatar1 from '../../assets/avatar_1.jpg'
import avatar2 from '../../assets/avatar_2.jpg'
import { ChatUserData } from '../../types/chat.types'

const ChatsList = () => {

    const [ exampleData, setExampleData ] = useState<Array<ChatUserData>>([
        {
            id: 1,
            profileImage: avatar1,
            username: 'EricWithC04',
            message: 'hola, como andas?',
            clicked: false,
        },
        {
            id: 2,
            profileImage: avatar2,
            username: 'wiclok',
            message: 'nah bueno, hermano es una banda...',
            clicked: false,
        },
    ]) 

    const handleSelectChat = (id: number) => {
        const data: Array<ChatUserData> = exampleData.map((user: ChatUserData) => {
            if (user.id === id) {
                return { ...user, clicked: true }
            } else {
                return { ...user, clicked: false }
            }
        })
        setExampleData(data)
    }

    return (
        <div className={styles['chats-list-container']}>
            {
                exampleData.map((data, index) => {
                    return (
                        <ChatItem
                            key={index}
                            profileImage={data.profileImage}
                            username={data.username}
                            message={data.message}
                            clicked={data.clicked}
                            handleSelectChat={() => handleSelectChat(data.id)}
                        />
                    )
                })
            }
        </div>
    )
}

export default ChatsList