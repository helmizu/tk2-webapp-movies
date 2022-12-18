import React from 'react'
import { Link, useRouteError } from 'react-router-dom';
import Layout from '../components/Layout';

type ErrorRoute = { status: number, statusText: string };
const Error = () => {
  const error: ErrorRoute = useRouteError() as ErrorRoute;
  console.error(error);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 min-vw-100">
      <h2 className="mx-auto">{error?.status} | {error.statusText}</h2>
      <Link to="/" className='btn btn-lg btn-danger rounded-pill mt-4'>Back to Home</Link>
    </div>

  )
}

export default Error