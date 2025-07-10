import React from 'react'

const Register = () => {
  return (
    <div>
        <h2>Register Form</h2>
        <p>
            <input type="text" placeholder='First Name' />
        </p>
        <p>
            <input type="text" placeholder='Last Name' />
        </p>
        <p>
            <input type="text" placeholder='Email Address' />
        </p>
        <p>
            <input type="password" placeholder='New password' />
        </p>
        <p>
            <input type="submit" placeholder='Submit' />
        </p>
    </div>
  )
}

export default Register