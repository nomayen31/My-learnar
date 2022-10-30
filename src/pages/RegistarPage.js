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

const RegistarPage = () => {

    // dynamic Route Link 
    const location = useLocation();
    const from = location.state?.from?.pathname || '/home';
    const navigate = useNavigate()

    // Provider
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const { providerLogin, createUser, updateUserInfo } = useContext(AuthContext);

    const handleProviderLogin = (provider) => {
        providerLogin(provider)
            .then((result) => {
                toast.success('Login Successful');
                navigate('/')

            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);

            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.userName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log('first', name, photoURL, email, password)


        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                toast.success('Login Successful');
                navigate(from, { replace: true });
                handleUpdateUserProfile(name, photoURL);

            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);

            });
    }


    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserInfo(profile)
            .then(() => { })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);

            });
    }

    return (
        <Container>
            <Row className="vh-80 align-items-center my-5 justify-content-md-center">
                <Col lg="4">
                    <Card className='shadow-lg text-center'>
                        <Card.Body>
                            <h3 className='t-primary qt-hero mb-5 txt-color-one fw-bold mt-3'>Register</h3>
                            <Form onSubmit={handleSubmit}>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        id="floatingFullName"
                                        type="text"
                                        placeholder="name@example.com"
                                        name="userName"
                                        required
                                    />
                                    <label htmlFor="floatingFullName">Full name</label>
                                </Form.Floating>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        id="floatingPhotoUrl"
                                        type="text"
                                        placeholder="name@example.com"
                                        name="photoURL"
                                        required
                                    />
                                    <label htmlFor="floatingPhotoUrl">Photo URL</label>
                                </Form.Floating>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        id="floatingEmail"
                                        type="email"
                                        placeholder="name@example.com"
                                        name="email"
                                        required
                                    />
                                    <label htmlFor="floatingEmail">Email</label>
                                </Form.Floating>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        id="floatingPassword"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        required
                                    />
                                    <label htmlFor="floatingPassword">Password</label>
                                </Form.Floating>

                                <div className="d-grid gap-2 d-md-flex justify-content-center mb-3">
                                    <Button variant="outline-secondary" type="submit">
                                        Register
                                    </Button>
                                </div>
                            </Form>
                            <p>Already have an account, Please <Link className='text-info' to='/account/login'>Log In</Link></p>
                            <hr />
                            <p>Or Sign in with</p>
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

export default RegistarPage