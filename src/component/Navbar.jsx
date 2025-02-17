import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Login from './buttons/Login'
import Signup from './buttons/Signup'
import CartBtn from './buttons/CartBtn'

const Navbar = () => {
  const state = useSelector((state) => state.handleCart)
  return (
<div>
 <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
   <div className="container">
    <Link className="navbar-brand fw-bold fs-4" to="#">LA COLLECTION</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      
      </ul>
     </div>
      <Login/>
      <Signup/>
      <CartBtn/>
   </div>
 </nav>
</div>
  )
}

export default Navbar
