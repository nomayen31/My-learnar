import React, { useContext } from 'react'
import { Col, Container, Image, Row, Table } from 'react-bootstrap'
import toast from 'react-hot-toast'
import { Link, useLoaderData } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider'
import Footer from './common/Footer'
import Menubar from './common/Menubar'
import MiniHero from './common/MiniHero'

const Checkout = () => {

    const { user } = useContext(AuthContext);

    const courseCheckout = useLoaderData()

    const notify = () => toast('Yay! Thank You !!', {
        icon: '👏',
    });

    const { id, title, price, category_name } = courseCheckout
    return (
        <>
            <Menubar />
            <MiniHero title={'Checkout'} />
            <Container>
                <Row>
                    <Col lg={6}>
                        <h2 className='txt-color-two '>Billing Details</h2>
                        <hr className='pb-5' />
                        <Image
                            roundedCircle
                            className='border border-dark border-4'
                            width={'80px'}
                            src={user?.photoURL ? user?.photoURL : '/avater.jpg'}
                        />
                        <h3 className='mt-3'>{user?.displayName}</h3>
                        <h4 className='mt-3'>email : {user?.email}</h4>
                        <h4 className='mt-3'>Varified Email : {user?.emailVerified ? <>Yes</> : <>No</>}</h4>
                    </Col>
                    <Col lg={6}>
                        <h2 className='txt-color-two '>Your Order</h2>
                        <hr className='pb-5' />
                        <Table hover >
                            <tbody>
                                <tr>
                                    <td>Traking Id</td>
                                    <td>T-{id}</td>
                                </tr>
                                <tr>
                                    <td>Category Name</td>
                                    <td>{category_name}</td>

                                </tr>
                                <tr>
                                    <td>Course Name</td>
                                    <td>{title}</td>
                                </tr>
                                <tr>
                                    <td>Price</td>
                                    <td>${price}.00</td>
                                </tr>
                                <tr>
                                    <td>Sub Total</td>
                                    <td>${price}.00</td>
                                </tr>

                            </tbody>
                        </Table>

                        <div className="card text-bg-light my-5">
                            <div className="card-body">
                                <h5 className="card-title">Important</h5>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Direct Bank Transfer</label>
                                </div>
                                <p className="card-text">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>

                                <Link to='/' className='btn btn-secondary-outline my-2' onClick={notify}>Place Order</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Checkout