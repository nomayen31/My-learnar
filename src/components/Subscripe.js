import React from 'react'
import { InputGroup, Form, Container, Row, Col } from 'react-bootstrap'

const Subscripe = () => {
    return (
        <div>
            <div className='section-title'>
                <h6 className='txt-color-two mt-5'>GO AT YOUR OWN PACE</h6>
                <h2 className='text-dark fw-bold'>Subscribe To Our Newsletter</h2>
                <p>If you wants to learn more about us and latest trands please subscribe our newsletter for more information</p>
            </div>
            <Container>
                <Row className='justify-content-center pb-5'>
                    <Col md={6}>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text id="basic-addon2" className='btn btn-secondary'> Subscribe Now </InputGroup.Text>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default Subscripe