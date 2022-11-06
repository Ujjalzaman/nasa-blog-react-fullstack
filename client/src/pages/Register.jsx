import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="auth">
      <form>
        <input type="text" name="" id="" placeholder='username'/>
        <input type="email" name="" id="" placeholder='email'/>
        <input type="password" name="" id="" placeholder='password'/>
        <input type="password" name="" id="" placeholder='confirm password'/>
        <button>Login</button>
        <span>Don't you have and account <Link to="/login"> Login </Link></span>
      </form>
    </div>
  )
}

export default Register