import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function Header() {
  const wishlist=useSelector((state)=>state.wishlistReducer)

  const cart=useSelector((state)=>state.cartReducer)

  return (
    <Navbar style={{zIndex:"1"}} expand="lg" className="bg-primary position-fixed top-0 w-100 mb-5">
    <Container>
      <Navbar.Brand ><Link to={'/'}  style={{textDecoration:"none",color:"white",fontWeight:"bold"}}><i class="fa-solid fa-truck-fast"></i> E Cart</Link></Navbar.Brand>
      <Navbar.Toggle className='mb-3' aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='btn border rounded'><Link style={{textDecoration:"none",color:"white",fontWeight:"bold"}}
          to={'./wishlist'}> <i className="fa-solid fa-heart text-danger me-2"></i> Wishlist <Badge className='ms-2 rounded' bg="light">{wishlist.length}</Badge> </Link> </Nav.Link>

<Nav.Link className='btn border rounded ms-lg-3'><Link style={{textDecoration:"none",color:"white",fontWeight:"bold"}}
          to={'./cart'}> <i class="fa-solid fa-cart-shopping text-white"></i> Cart <Badge className='ms-2 rounded' bg="light">{cart.length}</Badge></Link></Nav.Link>
          
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header