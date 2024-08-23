import { useEffect } from "react"
import { io } from "socket.io-client"
import LateralNav from "../../components/LateralNav/LateralNav"

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

    return (
        <div>
            <LateralNav></LateralNav>
        </div>
    )
}

export default Dashboard