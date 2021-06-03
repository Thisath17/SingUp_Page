import React, {useState} from 'react'
import {Card, Button, Alert} from 'react-bootstrap'
import {useAuth} from "../contexts/AuthContexts"
import {Link, useHistory} from'react-router-dom'

export default function Dashboard() {



    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Welcome to Dashboard</h2>
                </Card.Body>
            </Card>

            // Creating logout button 
            <div className= "w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div> 
        </>
    )
}
