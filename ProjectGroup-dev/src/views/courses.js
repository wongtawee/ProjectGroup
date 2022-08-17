import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './courses.css'

const Courses = (props) => {
  return (
    <div className="courses-container">
      <Helmet>
        <title>Courses - Joint Essential Quail</title>
        <meta property="og:title" content="Courses - Joint Essential Quail" />
      </Helmet>
      <div className="courses-container1">
        <span className="courses-text">
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
        <Link to="/" className="courses-navlink button">
          HomePage
        </Link>
        <Link to="/courses" className="courses-navlink1 button">
          Course
        </Link>
        <button className="courses-button button">Payment</button>
        <button className="courses-button1 button">Login</button>
        <img
          alt="image"
          src="/playground_assets/cuteanimated-161-removebg-preview-200h.png"
          className="courses-image"
        />
      </div>
      <input
        type="text"
        placeholder="placeholder"
        className="courses-textinput input"
      />
      <select className="courses-select">
        <option value="Course type 1">Course type 1</option>
        <option value="Course type 2">Course type 2</option>
        <option value="Course type 3">Course type 3</option>
      </select>
      <h1 className="courses-text04">
        <span>Courses</span>
        <br></br>
      </h1>
      <img
        alt="image"
        src="/playground_assets/4661334-200h.png"
        className="courses-image01"
      />
      <h1 className="courses-text07">
        <span>Category : </span>
        <br></br>
      </h1>
      <h1 className="courses-text10">
        <span>Find Coures : </span>
        <br></br>
      </h1>
      <img
        alt="image"
        src="/playground_assets/student-cartoon-clip-art-png-favpng-55ed7n8kcrfepjmr1dt7a1eby-removebg-preview-500h.png"
        className="courses-image02"
      />
      <div className="courses-container2">
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="courses-image03"
        />
        <span className="courses-text13">Course_1</span>
        <span className="courses-text14">
          <span>edit text / ...........................................</span>
          <br></br>
          <br></br>
          <span>
            ............................................................
          </span>
          <br></br>
          <br></br>
          <span>
            ............................................................
          </span>
          <br></br>
          <br></br>
          <span>
            ............................................................
          </span>
          <br></br>
        </span>
        <span className="courses-text26">FREE</span>
      </div>
      <h1 className="courses-text27">
        <span>Cart : </span>
        <br></br>
      </h1>
      <img
        alt="image"
        src="/playground_assets/7899190-removebg-preview-200h.png"
        className="courses-image04"
      />
      <img
        alt="image"
        src="/playground_assets/2447035-removebg-preview-200h.png"
        className="courses-image05"
      />
      <img
        alt="image"
        src="/playground_assets/7899190-removebg-preview-200h.png"
        className="courses-image06"
      />
      <div className="courses-container3">
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="courses-image07"
        />
        <span className="courses-text30">Course_2</span>
        <span className="courses-text31">
          <span>edit text / ...........................................</span>
          <br></br>
          <br></br>
          <span>
            ............................................................
          </span>
          <br></br>
          <br></br>
          <span>
            ............................................................
          </span>
          <br></br>
          <br></br>
          <span>
            ............................................................
          </span>
          <br></br>
        </span>
        <span className="courses-text43">FREE</span>
      </div>
      <img
        alt="image"
        src="/playground_assets/7899190-removebg-preview-200h.png"
        className="courses-image08"
      />
      <div className="courses-container4">
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="courses-image09"
        />
        <span className="courses-text44">Course_3</span>
        <span className="courses-text45">
          <span>edit text / ...........................................</span>
          <br></br>
          <br></br>
          <span>
            ............................................................
          </span>
          <br></br>
          <br></br>
          <span>
            ............................................................
          </span>
          <br></br>
          <br></br>
          <span>
            ............................................................
          </span>
          <br></br>
        </span>
        <span className="courses-text57">FREE</span>
      </div>
      <img
        alt="image"
        src="/playground_assets/7899190-removebg-preview-200h.png"
        className="courses-image10"
      />
      <div className="courses-container5">
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="courses-image11"
        />
        <span className="courses-text58">Course_4</span>
        <span className="courses-text59">
          <span>edit text / ...........................................</span>
          <br></br>
          <br></br>
          <span>
            ............................................................
          </span>
          <br></br>
          <br></br>
          <span>
            ............................................................
          </span>
          <br></br>
          <br></br>
          <span>
            ............................................................
          </span>
          <br></br>
        </span>
        <span className="courses-text71">FREE</span>
      </div>
      <img
        alt="image"
        src="/playground_assets/7899190-removebg-preview-200h.png"
        className="courses-image12"
      />
    </div>
  )
}

export default Courses
