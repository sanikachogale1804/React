import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2>Welcome to the App!</h2>
      <p>
        <Link to="/login">Go to Login</Link>
      </p>
    </div>
  )
}

export default Home
