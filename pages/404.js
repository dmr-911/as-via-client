import React from 'react';
import Link from 'next/link';

const ErrorPage = () => {
  return (
    <>
      <div className="error-area ptb-100 text-center">
        <div className="container">
          <img 
            src="/images/error.png"
            alt="image" 
          />

          <h3 className="mt-4">
            Error 404 : page not found
          </h3>

          <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>

          <Link href="/">
            <a className="default-button">Back to Homepage</a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ErrorPage;