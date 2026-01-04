import { addToCart } from "../features/cartSlice"
import { useDispatch } from "react-redux"


const ProductCart=({product})=>{
      const dispatch=useDispatch()
    return(
               <div className="flex flex-col items-center justify-center border-2 border-gray-200 shadow-xl rounded-xl p-5 m-10 md:my-10  md:mx-15 bg-white grow">
                        
                        <div className="flex  w-1/2 h-30 m-5">
                            <img src={product.image} alt={product.title}/>
                        </div>
                        <div className="flex flex-col items-center p-3">
                             <h3 className="font-bold text-blue-700 text-md sm:text-lg">{product.title}</h3>
                                <div>
                                 <span className='mt-4 line-clamp-4 font-semibold text-sm sm:text-md text-gray-500'>{product.description}</span>
                                </div>
                             <div className="flex gap-15 mt-2 ">
                                <span className="text-lg text-cyan-700 font-medium ">
                                    {product.category}
                                </span>
                                <span className="text-lg text-red-600 font-semibold ">
                                    ${product.price.toFixed(2)}
                                </span>
                             </div>
                        
                           
                        </div>
                        <button onClick={()=>dispatch(addToCart(product))} className=" px-5 py-3 rounded-lg bg-cyan-500 shadow-lg mt-2 mb-2 text-white font-semibold hover:shadow-cyan-500/50">Add To cart</button>
                   </div>
                  
    )
}
export default ProductCart