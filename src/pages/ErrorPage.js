import React from 'react'
import { FaRegSadCry } from "react-icons/fa";
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className='vh-100 d-flex justify-content-center align-items-center flex-column'>
            <FaRegSadCry style={{ fontSize: "200px" }} />
            <h3 className='mt-3 t-primary'>Opps..</h3>
            {
                error && (
                    <div className='text-center mt-3 pb-5'>
                        <div className='fs-1 fw-bold'>{error.status}</div>
                        <div className='fs-3 text-danger'>{error.statusText || error.message}</div>
                    </div>
                )
            }
            <Link to="/" className='btn btn-outline-secondary fw-bold'>Go to Home</Link>
        </div>
    )
}

export default ErrorPage