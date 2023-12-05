import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import registerpic from "../images/register.webp"

const Register = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "", email: "", password: "", phone: "", work: "", cpassword: ""
  });

  let name, value;

  const handelInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value })
  }

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, password, phone, cpassword, work } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, password, phone, cpassword, work
      })

    });

    const result = await res.json();

    if (result.message === "Registration successful") {
      window.alert(" Registration Success");
      console.log("Registration Success", result, result.status);

      navigate("/login");
    }
    else {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
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
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                    <form className="mx-1 mx-md-4" method='POST'>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="zmdi zmdi-account me-3"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" id="name" name="name" onChange={handelInputs} value={user.name} className="form-control" placeholder="Your Name" />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="zmdi zmdi-email me-3"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="email" id="email" name="email" onChange={handelInputs} value={user.email} className="form-control" placeholder="Your Email" />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="zmdi zmdi-lock me-3"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" id="password" name="password" onChange={handelInputs} value={user.password} className="form-control" placeholder="Your Password" />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="zmdi zmdi-lock me-3"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" id="cpassword" name="cpassword" onChange={handelInputs} value={user.cpassword} className="form-control" placeholder="Confirm Your Password" />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="zmdi zmdi-phone-in-talk me-3"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="number" id="phone" name="phone" onChange={handelInputs} value={user.phone} className="form-control" placeholder="Your Phone Number" />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="zmdi zmdi-slideshow me-3"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" id="work" name="work" onChange={handelInputs} value={user.work} className="form-control" placeholder="Your Profession" />
                        </div>
                      </div>


                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" className="btn btn-primary btn-lg" name="register" id="register" onClick={PostData}>Register</button>
                      </div>

                    </form>

                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 align-items-center d-flex order-1 order-lg-2 flex-column">
                    <img src={registerpic}
                      className="img-fluid" alt="" />
                    <NavLink className="" to="/login" >I am already registered</NavLink>
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

export default Register