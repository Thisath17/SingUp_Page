import React, {useState} from 'react'
import {Card, Button, Alert} from 'react-bootstrap'
import {useAuth} from "../contexts/AuthContexts"
import {Link, useHistory} from'react-router-dom'

export default function Dashboard() {
    return (
        <>
            <Card>
                
            </Card>

            <div className= "w-100 text-center mt-2">
                <Button >Log Out</Button>
            </div> 
        </>
    )
}
