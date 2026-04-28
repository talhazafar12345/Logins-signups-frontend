




import { useState } from "react"
import axios from "axios"
import { useNavigate, useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
function Hero6() {
  const [password, setPassword] = useState({
    newpassword: "",
    confirmpassword: "",
  })
  const [show, setShow] = useState(false)
  const [visible,setVisible] = useState(false)

  const getChange = () => {
    setShow(!show)
  }
  const navigate = useNavigate()
  const location = useLocation()
  const email = location.state?.email
  const getInp = (e) => {
    const { name, value } = e.target
    setPassword({ ...password, [name]: value })
  }
  const sendData = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:7000/change-password", {
        email: email,
        newpassword: password.newpassword,
        confirmpassword: password.confirmpassword,
      })
      console.log(response)
      alert(response.data.message)
      navigate("/login-page")
      setPassword({
        newpassword: "",
        confirmpassword: "",
      })
    }
    catch (error) {
      console.log(error)
      alert(error.response.data.message)
    }
  }
  return (
    <div className="back">
      <div className="accc">
        <h1>Change Password</h1>
      </div>

      <form onSubmit={sendData}>
        <div className="inp inps">
          <div className="input">
            <input onChange={getInp} value={password.newpassword} placeholder="New password" type={show ? "text" : "password"} name="newpassword" id="" />
            <span className="change" onClick={getChange}>
              {show ? "👁️" : "👁️"}
            </span>
          </div>

          <div className="input">
            <input onChange={getInp} value={password.confirmpassword} placeholder="Confirm password" type={visible ? "text" : "password"} name="confirmpassword" id="" />
            <span className="change" onClick={()=> setVisible(!visible)}>
              {show ? "👁️" : "👁️"}
            </span>
          </div>

        </div>
        <div className="btn">
          <button>Change</button>
        </div>
      </form>
    </div>
  )
}
export default Hero6

