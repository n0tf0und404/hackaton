import { useState, useRef, useEffect } from 'react'
import io from 'socket.io-client'
import styles from './ChatDoctorIAMessages.module.css'

let socket: any = null

const ChatDoctorIA = () => {

    const [messages, setMessages] = useState([
        {
            sender: 1,
            content: "Hola, en que puedo ayudarte?"
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
        socket.on('message ia', (data: any) => {
            console.log(data);
            
            setMessages((prev) => [...prev, { sender: 2, content: data.message }])
        })

        return () => {
            socket.off('message ia')
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
        socket.emit('message ia', newMessage);
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

export default ChatDoctorIA