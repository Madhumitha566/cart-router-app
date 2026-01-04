import { useEffect } from "react"
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"
import { setLoading, setProducts } from "../features/productSlice"
import ProductCart from "./productCard"

const Products=()=>{
  
     const dispatch=useDispatch()
    const {items,loading} = useSelector(
    (state)=>state.products
  )

  useEffect(() => {
    async function callApi() {
        try{
        dispatch(setLoading()); 
        const response = await axios.get('https://fakestoreapi.com/products')
        dispatch(setProducts(response.data)) 
        console.log(response.data)
    }
    catch(error){
        console.log('Error Found')
    }
    finally{
        dispatch(setLoading())
    }
}
    
    callApi()
    
  }, [dispatch]) 

    
   return(
    <>
   
     {loading  && <p>Loading Products...</p>}
     <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 bg-sky-50">
     {
       items.map(product=>(
                <ProductCart product={product} key={product.id}/>
       ))
     }
     </div>
     <footer className="p-8 bg-gray-500 text-white text-center text-bold text-2xl"><p>Copyright © 2026 All rights reserved.</p></footer>
    </>
   )
}
export default Products