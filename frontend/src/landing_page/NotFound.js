import React from "react";

function NotFound() {
  return (
    <div className="container p-5  mb-5">
      <div className="row text-center">
        <alert className="alert alert-danger">404 Not Found</alert>
        <p>
          Sorry, the page you are looking for does not exist.
        </p>
        <a href="/">Go to the Home Page</a>
      </div>
    </div>
  );
}

export default NotFound;
