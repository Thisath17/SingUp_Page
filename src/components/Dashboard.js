import React, {useState} from 'react'
import {Card, Button, Alert} from 'react-bootstrap'
import {useAuth} from "../contexts/AuthContexts"
import {Link, useHistory} from'react-router-dom'

export default function Profile() {
    const [error, setError] = useState("")

    function handleLogout(){}

    return (
    <>
    <Card>
        <Card.Body>
            <h2 className="text-center mb-4">Dashboard</h2>
            {error && <Alert variant="danger">{error}</Alert>}
        </Card.Body>
    </Card>

    <div className= "w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>Log Out</Button>   
    </div> 
    </>
    )
}