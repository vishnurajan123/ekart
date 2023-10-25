import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col,Row,Card,Button } from 'react-bootstrap'
import { addToCart } from '../redux/slices/cartSlice'
import { removeFromWishlist } from '../redux/slices/wishlistSlice'


function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch=useDispatch()
  const handleWishlistCart=(product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  }
  return (
    <div style={{marginTop:"100px"}}>

<Row>
        {
          wishlistArray.length>0?
          wishlistArray.map((product,index)=>(
            <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
         <Card className='shadow rounded' style={{ width: '18rem' ,height:'29rem'}}>
        <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
        <Card.Body>
          <Card.Title>{product?.title}</Card.Title>
          <Card.Text>
            <p>{product?.description.slice(0,55)}...</p>
            <h5>${product?.price}</h5>
          </Card.Text>
          <div className="d-flex justify-content-between">
          <Button  className='btn btn-light'>
          <i class="fa-solid fa-trash fa-2x"></i>
          </Button>
          <Button onClick={()=>handleWishlistCart(product)} className='btn btn-light'>
            <i className='fa-solid fa-cart-plus text-success fa-2x'></i>
          </Button>

          </div>
        </Card.Body>
      </Card>
       </Col>
          )):<p className='text-danger fw-bolder fs-4'>Nothing to display</p>
        }
      </Row>



    </div>
  )
}

export default Wishlist