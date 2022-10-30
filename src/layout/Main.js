import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Footer from '../components/common/Footer'
import Menubar from '../components/common/Menubar'
import Sidebar from '../components/common/Sidebar'

const Main = () => {
    return (
        <>
            <Menubar />
            <Container fluid>
                <Row>
                    <Col lg={3}>
                        <Sidebar />
                    </Col>
                    <Col lg={9} >
                        <Outlet />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Main