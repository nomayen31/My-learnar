import React from 'react'
import { Container } from 'react-bootstrap'

const MiniHero = ({ title }) => {
    return (
        <Container fluid className='bg-light py-5 mb-5 text-center'>
            <h1 className='py-5 hero-title fw-bold'>{title}</h1>
        </Container>
    )
}

export default MiniHero