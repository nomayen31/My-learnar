import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../components/common/Footer'
import Menubar from '../components/common/Menubar'
import MiniHero from '../components/common/MiniHero'

const Blog = () => {
    return (
        <>
            <Menubar />
            <MiniHero title={'Our Exciting Blogs'} />
            <Container>
                <div className='my-5'>
                    <Row>
                        <Col>
                            <h3>What is cors?</h3>
                            <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                                <br />
                                An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.
                            </p>
                        </Col>
                        <div>
                            <span className="tag me-1">cors</span>
                            <span className="tag me-1">web</span>
                            <span className="tag me-1">devlopment</span>
                        </div>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                            <p>The reason why we are using Firebase Authentication is it provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                            <strong>5 Common Authentication Types</strong>
                            <ul>
                                <li>Password-based authentication. Passwords are the most common methods of authentication.</li>
                                <li>Multi-factor authentication.</li>
                                <li>Certificate-based authentication.</li>
                                <li>Biometric authentication.</li>
                                <li>Token-based authentication.</li>
                            </ul>
                            <strong> Here are few Firebase Alternatives</strong>
                            <ul>


                                <li>Back4App</li>
                                <li>Parse</li>
                                <li>AWS Amplify</li>
                                <li>Backendless</li>
                                <li>Kuzzle</li>
                                <li>Supabase</li>
                            </ul>
                        </Col>
                        <div>
                            <span className="tag me-1">firebase</span>
                            <span className="tag me-1">devlopment</span>
                            <span className="tag me-1">authentication</span>

                        </div>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <h3>How does the private route work?</h3>
                            <p>The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>

                        </Col>
                        <div>
                            <span className="tag me-1">route</span>
                            <span className="tag me-1">devlopment</span>

                        </div>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <h3>What is Node? How does Node work?</h3>
                            <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.

                                <br />Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                                <br />Node.js basically works on two concept
                                <br />Asynchronous
                                <br />Non-blocking I/O
                                <br />Non-blocking I/o: Non-blocking i/o  means working with multiple requests without blocking the thread for a single request. I/O basically interacts with external systems such as files, databases. Node.js is not used for CPU-intensive work means for calculations, video processing because a single thread cannot handle the CPU works.
                                <br />Asynchronous: Asynchronous is executing a callback function. The moment we get the response from the other server or database it will execute a callback function. Callback functions are called as soon as some work is finished and this is because the node.js uses an event-driven architecture. The single thread doesn’t work with the request instead it sends the request to another system which resolves the request and it is accessible for another request.
                                <br />To implement the concept of the system to handle the request  node.js uses the concept of Libuv.
                                <br />Libuv is an open-source library built-in C. It has a strong focus on asynchronous and  I/O, this gives node access to the underlying computer operating system, file system, and networking.
                            </p>
                        </Col>
                        <div>
                            <span className="tag me-1">node</span>
                            <span className="tag me-1">nodeJs</span>
                            <span className="tag me-1">javascript</span>
                            <span className="tag me-1">devlopment</span>

                        </div>
                    </Row>
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default Blog