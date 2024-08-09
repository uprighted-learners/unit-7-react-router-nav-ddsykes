import React from 'react'
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <div>
<h1>About Page</h1>
<Link to="/">Go to Home</Link>
<Link t0="/contact">Got to Contact.</Link>
    </div>
  )
}

export default About