import { useEffect } from "react"

const Dashboard = () => {

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
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>Dashboard</div>
    )
}

export default Dashboard