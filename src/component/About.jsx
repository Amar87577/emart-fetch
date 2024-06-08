import React from 'react'
import { Link } from 'react-router-dom'
import About_img from '../assert/about.png'

const About = () => {
  return (
    <div>
      
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-md-6">
            <h1 className='text-primary fw-bold mb-4'>About Us</h1>
            <p className='lead mb-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, delectus! Eligendi molestiae laborum esse, consectetur inventore illo dolorem adipisci tenetur quasi, saepe quae vitae assumenda odit hic ab cumque ea? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fuga ipsa fugit harum accusamus eaque illum provident doloribus error esse, maxime sint qui ad possimus debitis dolore repellendus rerum quia obcaecati dolorum cupiditate quaerat impedit? Sint necessitatibus quibusdam optio corporis minus praesentium quos maxime ea reprehenderit, sapiente animi mollitia error voluptates. Eligendi necessitatibus, id minima magni eaque, molestiae maiores quo fugiat sed porro asperiores sit nesciunt et, illum numquam! Quibusdam, delectus, doloremque accusantium at dignissimos eligendi ab sed alias nemo quaerat praesentium illum non, est fugit temporibus aperiam corporis. Aut, praesentium consequatur doloremque ut veniam voluptates adipisci sit animi illo!</p>
            <Link to="/contact" className='btn btn-outline-primary px-3 my-3'> Contact Us</Link>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img src={About_img} alt="About Us" style={{width: "450px",  height: "450px"}}/>
        </div>
      </div>
    </div>



    </div>
  )
}

export default About
