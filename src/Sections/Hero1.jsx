
import { Link } from "react-router-dom"
import axios from "axios"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Hero1() {
    const [signup, setSignup] = useState({
        name: "",
        gender: "",
        email: "",
        password: "",
    })

    const[show,setShow] = useState(false)
    const getChange=()=>{
    setShow(!show)
    }
    const [errors, setErrors] = useState({})
    const validate = () => {
        const newErrors = {}
        if (!signup.name) newErrors.name = "Please enter your name"
        if (!signup.gender) newErrors.gender = "Please enter your gender"
        if (!signup.email) newErrors.email = "Please enter your email"
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signup.email)) {
            newErrors.email = "Please enter valid email";
        }
        if (!signup.password) newErrors.password = "Please enter your passwords"
        return newErrors
    }

    const navigate = useNavigate()
    const getInp = (e) => {
        const { name, value } = e.target
        setSignup({ ...signup, [name]: value })
        setErrors({ ...errors, [name]: "" })

    }
    const sendData = async (e) => {
        e.preventDefault()
        const validation = validate()
        if (Object.keys(validation).length > 0) {
            setErrors(validation)
            return
        }

        try {
            const response = await axios.post("http://localhost:7000/sign-up", { signup })
            console.log(response)
            alert(response.data.message)
            navigate("/login-page")
            setSignup({
                name: '',
                gender: '',
                email: '',
                password: '',
            })
        }
        catch (error) {
            console.log(error)
            alert(error.response.data.message)
            setSignup({

                name: '',
                gender: '',
                email: '',
                password: '',
            })
        }
    }
    return (
        <div className="back">
            <div className="acc">
                <h1>Welcome to our shopping center, Please create your Account</h1>
            </div>
            <div className="inp">
                <form onSubmit={sendData}>
                    <div className="input">
                        <input onChange={getInp} value={signup.name} placeholder="Your name" type="text" name="name" id="" />
                    </div>
                    {errors.name && <p className="err-text">{errors.name}</p>}
                    <div className="input">
                        <input onChange={getInp} value={signup.gender} placeholder="Your gender" type="text" name="gender" id="" />
                    </div>
                    {errors.gender && <p className="err-text">{errors.gender}</p>}
                    <div className="input">
                        <input onChange={getInp} value={signup.email} placeholder="Your email" type="text" name="email" id="" />
                    </div>
                    {errors.email && <p className="err-text">{errors.email}</p>}
                    <div className="input">
                        <input onChange={getInp} value={signup.password} placeholder="Your password" type={show?"text":"password"} name="password" id="" />
                        <span className="change" onClick={getChange}>
                            {show? "👁️":"👁️"}
                        </span>
                    </div>
                    {errors.password && <p className="err-text">{errors.password}</p>}

                    <div className="btn">
                        <button>Signup</button>
                    </div>

     
                    <div className="link">
                        <p>already have an account? <Link to={"/login-page"} className="link">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Hero1
