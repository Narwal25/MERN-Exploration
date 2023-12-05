import React , {useEffect} from 'react'
import profilepic from '../images/profilepic.jpg'

const About = () => {

  const callAboutPage = async () => {
    try {
      const res = await fetch('/about',{
        method: 'GET',
        headers: {
          Accept: 'application/json',
          "Content-Type": 'application/json'
        },
        credentials: "include"
      });

      const data = await res.json();
      console.log(data);

    } catch (err) {
      console.log(err);
    }
  }



  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <form method="GET">
          <div className="row">
            <div className='col-md-4'>
              <img className="mw-100" src={profilepic} alt="profilepic" />
            </div>

            <div className="col-md-6">
              <div className="profile-head">
                <h5>Narwal</h5>
                <h6>Web Developer</h6>
                <p className='profile-rating mt-3 mb-5'>Rankings: <span>1/10</span></p>

                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" role="tab" id="home-tab" href="#home" aria-controls='home' aria-selected="true">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="tab" role="tab" id="profile-tab" href="#profile" aria-controls='profile'aria-selected="true">Timeline</a>
                  </li>

                </ul>

              </div>
            </div>

            <div className="col-md-2" >
              <input className="profle-edit-btn" type="submit" value="Edit Profile" name="edit-profile"></input>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p>Work Link</p>
                <a href="github.com/Narwal25" className='link-primary' target="Narwal25">Github</a><br></br>
                <a href="github.com/Narwal25" target="Narwal25">Hackerrank</a><br></br>
                <a href="github.com/Narwal25" target="Narwal25">Codechef</a><br></br>
                <a href="github.com/Narwal25" target="Narwal25">Vercel</a><br></br>
                <a href="github.com/Narwal25" target="Narwal25">Github</a><br></br>
                <a href="github.com/Narwal25" target="Narwal25">Github</a><br></br>
              </div>
            </div>

            <div className="col-md-8 pl-5 about-info">

              <div className="tab-content profile-tab" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby='home-tab'>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className='col-md-6'>
                      <p>7934823749823</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Narwal</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className='col-md-6'>
                      <p>narwal@narwal.com</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className='col-md-6'>
                      <p>79348237435</p>
                    </div>
                  </div>
                </div>


                <div className="tab-pane fade " id="profile" role="tabpanel" aria-labelledby='profile-tab'>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Hourly rate</label>
                    </div>
                    <div className='col-md-6'>
                      <p>10$/hr</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Total projects</label>
                    </div>
                    <div className='col-md-6'>
                      <p>588</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default About