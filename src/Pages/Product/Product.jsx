import { useParams } from "react-router-dom"
import { useGetProdQuery,useGetFeatProdsQuery} from "../../api/ProductSlice"
import Loader from "../../Components/Loader/Loader"
import { Rating } from "react-simple-star-rating"
import ProductCard from "../../Components/ProductCard.jsx/ProductCard"

function Product() {
    const {prodid} = useParams()
    const {data,isLoading} = useGetProdQuery({prodid})
    const subcat = data?.data?.attributes?.subcategories?.data[0]?.attributes?.Title
    const {data:prods} = useGetFeatProdsQuery({subcat})
    if(isLoading){
        <Loader/>
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <img src={`${import.meta.env.VITE_URL}${data?.data?.attributes?.Images?.data[0]?.attributes?.url}`} className="w-100" alt="" />
                </div>
                <div className="col-7">
                    <h2 className="mb-3">{data?.data?.attributes?.Title}</h2>
                    <div className="d-flex align-items-center mb-3">
                        <h6 className="m-0">Rating :</h6>
                        <Rating initialValue={data?.data?.attributes?.Rating} size={23} allowFraction={0.5} readonly />
                    </div>
                    <h2 className="text-danger mb-3">$ {data?.data?.attributes?.Price}</h2>
                    <span>Description:</span>
                    <p className="text-secondary">{data?.data?.attributes?.Description}</p>
                    <button className="btn btn-outline-dark">Add To Cart</button>
                </div>
            </div>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, pariatur. */}
            <div>
                <h2 className="text-center">You Might Also Like</h2>
                <div className="row">
                    {prods?.data.map(prod=>{
                        if(prod.id !== data?.data?.id){
                            return <ProductCard key={prod.id} prod={prod}/>
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Product