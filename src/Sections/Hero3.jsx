


import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
function Hero3() {
const [otp,setOtp] = useState({
email: "",
})
const navigate = useNavigate()
const getInp=(e)=>{
const {name,value}= e.target
setOtp({...otp,[name]:value})
}
const sendOtp=  async(e)=>{
e.preventDefault()
try{
const response = await axios.post("http://localhost:7000/send-code",{
email:otp.email
})
console.log(response)
alert(response.data.message)
navigate("/verify-otp",{
state:{email:otp.email}
})

setOtp({
email:"",
})
}
catch(error){
console.log(error)
alert(error.response.data.message)
}
}
  return (
    <div className="back">
    
    <div className="accc">
        <h1>Send OTP</h1>
    </div>

        <form onSubmit={sendOtp}>
        <div className="inp inps">
   <div className="input">
    <input onChange={getInp} value={otp.email} placeholder="Your email" type="text" name="email" id="" />
   </div>
   <div className="btn">
    <button>Send OTP</button>
   </div>
  </div>
   </form>
      
    </div>
  )
}
export default Hero3
