import React, {useState} from 'react'
import {Card, Button, Alert} from 'react-bootstrap'
import {useAuth} from "../contexts/AuthContexts"
import {Link, useHistory} from'react-router-dom'

export default function Dashboard() {
    const [error, setError] = useState("")
    const {logout} = useAuth()
    const history = useHistory()

    async function handleLogout(){
        setError("")

        try{
            await logout()
            history.push('/login') 
        }catch{
            setError('Failed to Log Out')
        }

    }

    return (
        <>
            <Card>
                <h2 className="text-center mb-4">Dashboard</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Link to="/Update-profile" className="btn btn-primary w-100 mt-3"> Update Profile </Link>
            </Card>

            <div className= "w-100 text-center mt-2">
            <Button variant="link" onClick={handleLogout}>Log Out</Button>   
            </div> 
        </>
    )
}
