/* eslint-disable react/prop-types */
import { Rating } from 'react-simple-star-rating'
import {Link} from 'react-router-dom'
import { addToCart } from '../../api/CartSlice'
import { useDispatch } from 'react-redux'
function ProductCard({prod}) {
    const dispatch = useDispatch()
    return (
        <div className="Product col-3 p-2"> 
            <div className="card shadow-sm">
                <Link to={`/product/${prod.id}`} className='text-decoration-none text-dark'>
                    <img src={`${import.meta.env.VITE_URL}${prod.attributes.Images.data[0].attributes.url}`} className="card-img-top" alt="..."/>
                </Link>
                <div className="card-body">
                    <div className=' d-flex justify-content-between align-items-center mb-2'>
                        <h6 className="card-title m-0">{prod.attributes.Title}</h6>
                        <h6 className="card-text m-0">$ {prod.attributes.Price}</h6>
                    </div>
                    <p>{prod.attributes.Description}</p>
                    <div className='d-flex justify-content-between'>
                        <button  className="btn btn-outline-dark" onClick={()=>dispatch(addToCart({id : prod.id,name : prod.attributes.Title,price : prod.attributes.Price,image : prod.attributes.Images.data[0].attributes.url}))}>Add To Cart</button>
                        <Rating initialValue={prod.attributes.Rating} readonly size={20} allowFraction={0.5} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard