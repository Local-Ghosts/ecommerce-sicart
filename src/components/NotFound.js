import React from 'react';
import {Link} from "react-router-dom";

function NotFound() {
    return (
        <div>
            <h2>Sorry</h2>
            <p>That page cannot be found or doesnt exist.</p>
            <Link to="/">Back to Homepage</Link>
        </div>
    )
}

export default NotFound;