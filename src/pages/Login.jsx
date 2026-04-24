import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
  const handleLogin = (e) => {
    e.preventDefault();
    if(username === "admin" && password === "1234"){
        navigate("./dashboard");
    } else {
        alert("Invalid credentails")
    }
  }
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
       </div>
       <div className="mb-3">
        <label htmlFor="exampleFormControlInput2" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleFormControlInput2" placeholder="************" value={password} onChange={(e) => setPassword(e.target.value)}></input>
       </div>
       <button type="submit" className="btn btn-primary" onClick={handleLogin}>Login</button>
    </form>
  )
}

export default Login
