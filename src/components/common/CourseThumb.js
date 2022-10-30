import React from 'react'
import { Button, Card, Col, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CourseThumb = ({ courses }) => {

    const { id, thumbnail_url, title, details, duration } = courses

    return (
        <Col lg={6} md={2} className="mb-3 d-flex align-items-stretch">
            <Card>
                <Card.Img variant="top" src={thumbnail_url} />
                <Card.Body className='d-flex flex-column'>
                    <Card.Title>{title}</Card.Title>

                    {details.length > 100
                        ?
                        <Card.Text>{details.slice(0, 100) + "..."}<br /><Button variant="secondary mt-3"><Link to={`/course/${id}`} className='text-black '>View Details</Link></Button>  </Card.Text>
                        :
                        <Card.Text>{details}</Card.Text>}

                </Card.Body>
                <Card.Footer className='course-card-footer'>Duration: <span className='duration'>{duration}</span></Card.Footer>
                {/* <div className="card-footer bg-transparent "></div> */}
                {/* <div className="btn-group" role="group" aria-label="Basic example">
                <span className="badge bg-secondary">New</span>
                <span className="badge bg-secondary">New</span>
                </div> */}
            </Card>
        </Col>
    )
}

export default CourseThumb