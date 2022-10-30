import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import siteLogo from '../../logo.png'

const Footer = () => {
    return (
        <Container fluid className='border-top bg-success'>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-4 container">
                <p className=" mb-0">&copy;nomayen hossain</p>

                <Link to="/" className='logo'>
                    <img src={siteLogo} width="50" alt="E-Academy" /> My-learnar
                </Link>

            </footer>
        </Container>
    )
}

export default Footer