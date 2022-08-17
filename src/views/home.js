import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Joint Essential Quail</title>
        <meta property="og:title" content="Joint Essential Quail" />
      </Helmet>
      <div className="home-container1">
        <span className="home-text">
          <span>
            Pannpam
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>CourseOnline</span>
        </span>
        <Link to="/" className="home-navlink button">
          HomePage
        </Link>
        <Link to="/courses" className="home-navlink1 button">
          Course
        </Link>
        <button className="home-button button">Payment</button>
        <button className="home-button1 button">Login</button>
        <img
          alt="image"
          src="/playground_assets/cuteanimated-161-removebg-preview-200h.png"
          className="home-image"
        />
      </div>
      <h1 className="home-text04">
        <span>Preview Course</span>
        <br></br>
      </h1>
      <button className="home-button2 button">View All Course</button>
      <img
        alt="image"
        src="/playground_assets/4661334-200h.png"
        className="home-image1"
      />
      <div className="home-container2">
        <video
          src
          poster="https://play.teleporthq.io/static/svg/videoposter.svg"
          className="home-video"
        ></video>
        <video
          src
          poster="https://play.teleporthq.io/static/svg/videoposter.svg"
          className="home-video1"
        ></video>
        <video
          src
          poster="https://play.teleporthq.io/static/svg/videoposter.svg"
          className="home-video2"
        ></video>
        <img
          alt="image"
          src="/playground_assets/1634158-200h.png"
          className="home-image2"
        />
        <img
          alt="image"
          src="/playground_assets/1634157-200h.png"
          className="home-image3"
        />
      </div>
      <img
        alt="image"
        src="/playground_assets/d7958069ce8ec2ffc15abf69e75d09ff-removebg-preview1-400h.png"
        className="home-image4"
      />
      <div className="home-container3">
        <h1 className="home-heading">Tutor Pam</h1>
        <span className="home-text07">
          <span>
                 Test Text / edit
            test.......................................................................................................................
          </span>
          <br></br>
          <br></br>
          <span>
            ..............................................................................................................................................................
          </span>
          <br></br>
          <br></br>
          <span>
            .............................................................................................................................................................
          </span>
          <br></br>
        </span>
      </div>
    </div>
  )
}

export default Home
