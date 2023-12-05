import React from 'react'
// import { NavLink } from 'react-router-dom';
import phoneimg from '../images/phone.svg';
import emailimg from '../images/envelope-at.svg'
import geoimg from '../images/geo.svg'

const Contact = () => {
  return (
    <div>
      <div className="contact-info">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 py-5">
              <div className="row">
                <div className=" col-lg-4 contact_info_item d-flex justify-content-start align-item-center border rounded w-lg-25 p-2">
                  <img className="img-fluid pe-2" src={phoneimg} alt=''></img>
                  <div className="contact_info_content ps-2">
                    <div className=" contact_info_title">
                      Phone
                    </div>
                    <div className=" contact_info_text">
                      9949384920
                    </div>
                  </div>
                </div>
                <div className=" col-lg-4 contact_info_item d-flex justify-content-start align-item-center border rounded w-lg-25 p-2">
                  <img className="img-fluid pe-2" src={emailimg} alt=''></img>
                  <div className="contact_info_content ps-2 ">
                    <div className=" contact_info_title">
                      Email
                    </div>
                    <div className=" contact_info_text">
                      narwal@narwal.com
                    </div>
                  </div>
                </div>
                <div className=" col-lg-4 contact_info_item d-flex justify-content-start align-item-center border rounded w-lg-25 p-2">
                  <img className="img-fluid pe-2" src={geoimg} alt=''></img>
                  <div className="contact_info_content ps-2">
                    <div className=" contact_info_title">
                      Address
                    </div>
                    <div className=" contact_info_text">
                      Sonipat, HR
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div >
      </div>

      <div className="contact_form">
        <div className="container card ">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact-form py-5">
                <div className="card-title">
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Get in touch</p>
                </div>
                <div class="row">
                  <div class="col-md-12 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form" method="POST">

                      <div class="row mb-5">

                        <div class="col-md-4">
                          <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control" placeholder="Your Name" />
                          </div>
                        </div>

                        <div class="col-md-4">
                          <div class="md-form mb-0">
                            <input type="email" id="email" name="email" class="form-control" placeholder="Your Email" />
                          </div>
                        </div>

                        <div class="col-md-4">
                          <div class="md-form mb-0">
                            <input type="number" id="contact_form_phone" name="contact_form_phone" class="form-control" placeholder="Your Phone Number" />
                          </div>
                        </div>
                      </div>

                      <div class="row">

                        <div class="col-md-12">

                          <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="10" class="form-control md-textarea" placeholder="Message"></textarea>
                          </div>

                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mt-3 mt-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Contact