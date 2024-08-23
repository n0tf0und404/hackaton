import { useState, useRef, useEffect } from 'react'
import styles from './ChatDoctorIAMessages.module.css'

const ChatDoctorIA = () => {

    const [messages, setMessages] = useState([
        {
            sender: 1,
            content: "Hola, en que puedo ayudarte?"
        }
    ])

    const [newMessage, setNewMessage] = useState("")

    const [ws, setWs] = useState<any>(null);

    const messageEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        if (messageEndRef.current) {
            messageEndRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8000/ws/chat');

        socket.onopen = () => {
            console.log("WebSocket connection established");
        };

        socket.onmessage = (event) => {
            const token = event.data;

            setMessages((prev) => {
                const updatedMessages = [...prev];
                const lastMessage = updatedMessages[updatedMessages.length - 1];
                
                if (lastMessage.sender === 1) {
                    updatedMessages[updatedMessages.length - 1] = {
                        ...lastMessage,
                        content: token,
                    };
                } else {
                    updatedMessages.push({ content: token, sender: 1 });
                }

                return updatedMessages;
            });
        };

        socket.onclose = () => {
            console.log("WebSocket connection closed");
        };

        setWs(socket);

        return () => {
            socket.close();
        };
    }, [])

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewMessage(e.target.value)
    }

    const handleSendMessage = (e: React.KeyboardEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (ws && newMessage.trim() !== "") {
            setMessages([...messages, { content: newMessage, sender: 2 }]);
            ws.send(newMessage);
            setNewMessage("");
        }
    }

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