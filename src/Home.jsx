import React from 'react'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
<h1>Homepage</h1>
<Link to="/about">Go to about</Link>
<Link to="/contact">Go to contact</Link>
    </div>
  )
}

export default Home