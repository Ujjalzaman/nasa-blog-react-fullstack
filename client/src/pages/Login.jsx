import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="auth">
      <form>
        <input type="text" name="" id="" placeholder='username'/>
        <input type="password" name="" id="" placeholder='password'/>
        <button>Login</button>
        <p>This is error message</p>
        <span>Don't you have and account <Link to="/register"> Register </Link></span>
      </form>
    </div>
  )
} 

export default Login