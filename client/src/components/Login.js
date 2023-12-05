import React,{useState} from 'react'
import {NavLink, useNavigate} from 'react-router-dom';
import loginpic from "../images/login.svg";

const
  Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
      e.preventDefault();
      const res = await fetch('/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password
        })
      })
      const result = await res.json();
      console.log(result);

      if (result.message === "Login Successful"){
        window.alert("Login Successful");
        navigate('/');
      } else {
        window.alert("Invalid credentials");
      }


    }

    return (
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-2">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                      <form method="POST" className="mx-1 mx-md-4">

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="zmdi zmdi-email me-3"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" id="email" name="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value) } placeholder="Your Email" />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="zmdi zmdi-lock me-3"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="password" name="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your Password" />
                          </div>
                        </div>


                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" onClick={loginUser} className="btn btn-primary btn-lg" name="login" id="login" >Login</button>
                        </div>

                      </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 align-items-center d-flex order-1 order-lg-1 flex-column">
                      <img src={loginpic}
                        className="img-fluid" alt="" />
                      <NavLink className="" to="/register" >Don't have an account</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

export default
  Login