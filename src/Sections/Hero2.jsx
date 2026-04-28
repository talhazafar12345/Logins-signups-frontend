

import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

function Hero2() {
  const [login,setLogin] = useState({
  email:"",
  password:"",
  })
const [errors,setErrors] = useState({})
const [show,setShow] = useState(false)

const getChange=()=>{
setShow(!show)
}


const validate=()=>{
const newErrors ={}
if(!login.email) newErrors.email ="Please enter your email" 
else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(login.email)) {
newErrors.email = "Please enter valid email";
}
if(!login.password) newErrors.password ="Please enter your password"
return newErrors
}
const navigate = useNavigate()
const getInp=(e)=>{
const {name,value} =e.target
setLogin({...login,[name]:value})
setErrors({...errors,[name]:""})
}
const sendData= async(e)=>{
e.preventDefault()
const validation= validate()
if(Object.keys(validation).length > 0){
setErrors(validation)
return
}
try{
  const response = await axios.post("http://localhost:7000/login-page",{login})
  console.log(response)
  alert(response.data.message)
  navigate("/content-page")
  
}
catch(error){
console.log(error)
alert(error.response.data.message)
}
}
  return (
    <div className="back">

      <div className="accc">
        <h1>Start Your Journey With Exclusive Shopping, Please Login</h1>
      </div>

      <form onSubmit={sendData}>
        <div className="inp inps">
          <div className="input">
            <input onChange={getInp} value={login.email} placeholder="Your email" type="text" name="email" id="" />
          </div>
          {errors.email && <p className="err-text">{errors.email}</p>}

          <div className="input">
            <input onChange={getInp} value={login.password} placeholder="Your password" type={ show ? "text": "password"} name="password" id="" />
            <span className="change" onClick={getChange}>
              { show ? "👁️": "👁️"}

            </span>
          </div>
          {errors.password && <p className="err-text">{errors.password}</p>}
        </div>
        <div className="btn">
          <button>Login</button>
        </div>
        <div className="link">
          <Link to={"/otp-page"} className="link">Forget Password</Link>
        </div>
      </form>

    </div>
  )
}

export default Hero2
