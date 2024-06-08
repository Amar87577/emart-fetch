import React from 'react'

const Footer = () => {
  return (
    <div className="container-fluid  bg-dark">

    <div className="container">
        <div className="row d-flex py-5 bg-dark text-light">
            <div className=" col-md-3 col-sm-12">
                <h4 className=" text-warning pb-4">Company Name</h4>
                <h5 className='text-info pb-4'>Emart</h5>
                <h6>LA COLLECTION</h6>
                <p>In this section we should write about our company to introduce your company or something else.</p>
            </div>
            <div className=" col-md-3 col-sm-12">
                <h4 className=" text-warning pb-4">Services</h4>
                <p className='footer-link'>Customer Support</p>
                <p className='footer-link'>About Us</p>
                <p className='footer-link'>Product Return</p>
                <p className='footer-link'>Primary Policy</p>
            </div>
            <div className=" col-md-3 col-sm-12">
                <h4 className=" text-warning pb-4">Useful Links</h4>
                <p className='footer-link'>Sitemp</p>
                <p className='footer-link'>Shipping Rates</p>
                <p className='footer-link'>Terms & Conditions</p>
                <p className='footer-link'>Affililat Program</p>
            </div>
            <div className=" col-md-3 col-sm-12">
                <h4 className=" text-warning pb-4">Address</h4>
                <p className='fa fa-home address-sec'> Boring Road Patna...</p> <br />
                <p className='fa fa-phone address-sec'> +91 871 527 1851</p><br />
                <p className='fa fa-envelope address-sec'> emart@gmail.com</p><br />
            </div>
        </div>
    </div>
    <p className='text-light text-center pb-5'>@Copyright Emart | All rights reserved</p>
      
    </div>
  )
}

export default Footer
