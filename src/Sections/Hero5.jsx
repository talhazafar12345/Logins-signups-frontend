
import { useState } from "react"
import axios from "axios"
import { useNavigate, useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

function Hero5() {
const [verify,setVerify] = useState({
otp:"",
})
const navigate =useNavigate()
const location = useLocation()
const email = location.state?.email
const getInp=(e)=>{
const {name,value} = e.target
setVerify({...verify,[name]:value})
}
const sendData=async(e)=>{
e.preventDefault()
try{
const response = await axios.post("http://localhost:7000/verify-otp",{
email:email,
otp: verify.otp
})
console.log(response)
alert(response.data.message)
navigate("/change-password",{
  state:{email:email}
})
setVerify({
otp:'',
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
        <h1>Verify Code</h1>
      </div>
      <form onSubmit={sendData}>
        <div className="inp inps">
          <div className="input">
            <input value={verify.otp} onChange={getInp} placeholder="Verify code" type="number" name="otp" id="" />
          </div>
        </div>
        <div className="btn">
          <button>Verify</button>
        </div>
      </form>

    </div>
  )
}
export default Hero5

