import { useState, useRef, useEffect } from 'react'
import io from 'socket.io-client'
import styles from './ChatMessages.module.css'

let socket: any = null

const ChatMessages = () => {

    const [messages, setMessages] = useState([
        {
            sender: 1,
            content: "hola mundo"
        }
    ])

    const [newMessage, setNewMessage] = useState("")

    const messageEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        if (messageEndRef.current) {
            messageEndRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }

    useEffect(() => {
        socket = io('http://localhost:3000')
    }, [])

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    useEffect(() => {
        socket.emit('set name', localStorage.getItem('username'))

        socket.on('message', (data: any) => {
            console.log(data);
            
            const newMessageInfo = {
                sender: data.user === localStorage.getItem('username') ? 2 : 1,
                content: data.message
            }

            setMessages((prev) => [...prev, newMessageInfo])
        })

        return () => {
            socket.off('message')
        }
    }, [])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewMessage(e.target.value)
    }

    const handleSendMessage = (e: React.KeyboardEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (newMessage.length > 0) {
            sendMessage()
            setNewMessage("")
        }
    }

    const sendMessage = () => {    
        socket.emit('message', newMessage);
    };

    return (
        <div className={styles['messages-container']}>
            <div className={styles['messages-container-content']}>
                {
                    messages.map((message, index) => {
                        return (
                            <div 
                                key={index} 
                                className={`${styles['message-item']} ${message.sender === 1 ? styles['sender1'] : styles['sender2']}`}
                            >
                                <p>{message.content}</p>
                            </div>
                        )
                    })
                }
                <div ref={messageEndRef} />
            </div>
            <form onSubmit={handleSendMessage} className={styles['message-form']}>
                <input 
                    type="text" 
                    value={newMessage} 
                    onChange={handleInputChange}
                    placeholder='Escribe un mensaje...'
                />
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default ChatMessages