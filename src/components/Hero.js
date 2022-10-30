import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import hero from '../hero.png';
import image1 from '../image1.png'
import image2 from '../image2.jpg'
import image3 from '../image3.png'

const Hero = () => {
    return (
        <div className="ea-hero">
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6} md={12}>
                        <div className=' hero-textarea'>
                            <h4 className='txt-color-two mt-5 text-success'>DISTANCE LEARNING..</h4>
                            <h2 className='text-success fw-bold'>Feel Like You Are Attending Your <br /> classNamees Physically!</h2>
                            <p className='text-primary'>Vdemy training programs can bring you a super exciting experience <br /> of learning through online! You never face any negative experience <br /> while enjoying your classNamees virtually by sitting in your comfort zone.<br /> Our  flexible learning initiatives will help you to learn better and quicker <br /> than the  traditional ways of learning skills.</p>
                            <Link to='/courses' className='btn btn-secondary mt-3'>Explore</Link>
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div className='hero-img-area'>
                            <img src={hero} alt="banner" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr />
            <Container className='bg-gray mt-10'>
            <div className="card-group">
  <div className="card">
    <img className="card-img-top" src={image1} alt="Card image cap"  />
    <div className="card-body">
      <h5 className="card-title">Web Development</h5>
      <p className="card-text">Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. </p>
      
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={image2} alt="Card image cap"  />
    <div className="card-body">
      <h5 className="card-title">Wordpress Development</h5>
      <p className="card-text">In Bengal
In English
A WordPress developer is a type of web developer. They specialize in building websites with WordPress. They are also full-stack developers, meaning they can develop the front-end and back-end of a website. </p>
      
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={image3} alt="Card image cap"  />
    <div className="card-body">
      <h5 className="card-title">Graphics Design</h5>
      <p className="card-text">Graphic design is a profession, applied art and academic discipline whose activity consists in projecting visual communications intended to transmit specific messages to social groups, with specific objectives</p>
     
    </div>
  </div>
</div>
            </Container>
            <hr />
   
            
            
        </div>
        
    )
}

export default Hero