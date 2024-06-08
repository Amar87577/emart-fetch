import React from 'react'
import Products from './Products'
import Background from '../assert/bg.jpg'
import Background3 from '../assert/bg3.jpg'
import Background2 from '../assert/bg2.jpg'
import NewsLetter from './NewsLetter/NewsLetter'


const Home = () => {
  return (
    <div className='hero'>
     



       <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">



    <div class="carousel-item active">
    <div className="card  text-dark border-0">
        <img src={Background} className="card-img" alt="background" height="550px" width="100%"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON <br /> ARRIVALS</h5>
        <p className="card-text lead fs-2">
            CHECK OUT ALL THE TREND
        </p>
        </div>
        </div>
       </div>
    </div>



    <div class="carousel-item">
    <div className="card  text-dark border-0">
        <img src={Background2} className="card-img" alt="background" height="550px" width="100%"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON <br /> ARRIVALS</h5>
        <p className="card-text lead fs-2">
            CHECK OUT ALL THE TREND
        </p>
        </div>
        </div>
       </div>
    </div>


    <div class="carousel-item">
    <div className="card  text-dark border-0">
        <img src={Background3} className="card-img" alt="background" height="550px" width="100%"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON <br /> ARRIVALS</h5>
        <p className="card-text lead fs-2">
            CHECK OUT ALL THE TREND
        </p>
        </div>
        </div>
       </div>
    </div>



  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


       <Products/>
       <NewsLetter/>
    </div>
  )
}

export default Home
