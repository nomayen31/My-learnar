import React, { useContext } from 'react'
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import {
    Button,
    Form,
    Container,
    Row,
    Col,
    Card,
} from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import toast from 'react-hot-toast';

const LoginPage = () => {

    // dynamic Route Link 
    const location = useLocation();
    const from = location.state?.from?.pathname || '/home';
    const navigate = useNavigate()

    // Provider
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const { providerLogin, signIn } = useContext(AuthContext);

    // user and password loing 
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                form.reset()
                toast.success('Login Successful ');
                navigate(from, { replace: true });

            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);

            });
    }

    // github and gmail login 
    const handleProviderLogin = (provider) => {
        providerLogin(provider)
            .then((result) => {
                toast.success('Login Successful ');
                navigate(from, { replace: true });

            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);

            });
    }
    return (
        <Container>
            <Row className="vh-80  align-items-center my-5 justify-content-md-center">
                <Col lg="4">
                    <Card className='shadow-lg text-center'>
                        <Card.Body>
                            <h3 className='t-primary qt-hero mb-5 txt-color-one fw-bold mt-3'>Login</h3>
                            <Form onSubmit={handleSubmit}>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        id="floatingInputCustom"
                                        type="email"
                                        placeholder="name@example.com"
                                        name="email"
                                        required
                                    />
                                    <label htmlFor="floatingInputCustom">Email address</label>
                                </Form.Floating>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        id="floatingPasswordCustom"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        required
                                    />
                                    <label htmlFor="floatingPasswordCustom">Password</label>
                                </Form.Floating>

                                <div className="d-grid gap-2 d-md-flex justify-content-center mb-3">
                                    <Button variant="outline-secondary" type="submit">
                                        Login
                                    </Button>
                                </div>
                            </Form>
                            <p>Don't  have an account Please <Link className='text-info' to='/account/register'>Register</Link></p>
                            <hr />
                            <div className="mb-3">
                                <Button variant="secondary" className='text-white' onClick={() => handleProviderLogin(googleProvider)}>
                                    <FaGoogle />
                                </Button>
                                <Button variant="secondary" className='text-white mx-2' onClick={() => handleProviderLogin(gitProvider)}>
                                    <FaGithub />
                                </Button>
                            </div>

                        </Card.Body>

                    </Card>

                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage