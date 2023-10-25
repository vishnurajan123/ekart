import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice'
import { useNavigate} from 'react-router-dom';


function Cart() {

  const cartArray = useSelector((state)=>state.cartReducer)
  const dispatch=useDispatch()
  const [total,setTotal]=useState(0)
  const navigate=useNavigate()
  const getCartTotal=()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else(
      setTotal(0)
    )
  }


  const handleCart=()=>{
    dispatch(emptyCart())
    alert("Order successfully placed..!!")
    navigate('/')
    
  }

  useEffect(()=>{
    getCartTotal()
  },[cartArray])
  return (
    <div className='container' style={{marginTop:"100px"}}>

       {
        cartArray.length>0?
        <div className='row mt-5'>
        <div className="col-lg-8">
          <table className='table shadow border'>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                cartArray.map((product,index)=>(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{product.title}</td>
                    <td><img height={'100px'} width={'100px'} src={product.thumbnail} alt="" /></td>
                    <td>$ {product.price}</td>
                    <td><button onClick={()=>dispatch(removeFromCart(product.id))} className='btn'><i className="fa-solid fa-trash fa-2x text-danger"></i> </button></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-3">
          <div className='border shdow p-3 rounded'>
            <h3 className='text-primary'>Cart Summary</h3>
            <h4 className='mt-3'>Total Products: <span>{cartArray.length}</span></h4>
            <h4>Total: <span className='text-danger fw-bolder fs-2'> $ {total}</span></h4>
            <div className='d-grid'>
              <button onClick={handleCart} className='btn btn-success mt-5 rounded'>Check Out</button>
            </div>

          </div>
        </div>

      </div>
      : <p>Nothing to display</p>
      }
      </div>


    

    
  )
}

export default Cart