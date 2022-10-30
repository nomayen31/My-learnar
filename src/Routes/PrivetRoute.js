import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivetRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className='d-flex justify-content-center mt-5'>
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }

    if (!user) {
        return <Navigate to="/account/login" state={{ from: location }} replace></Navigate>
    }
    return children;
}

export default PrivetRoute