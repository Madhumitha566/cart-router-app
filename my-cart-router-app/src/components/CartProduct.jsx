import { useSelector,useDispatch } from "react-redux"
import { addToCart, deleteFromCart, removeItemFromCart } from "../features/cartSlice"
import { useNavigate } from "react-router-dom"
const CartProduct=()=>{
    const dispatch=useDispatch()
   const items=useSelector(state=>
     state.cart.items
   )
    
  
   const calculateSubtotal = () => {
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const subtotal = calculateSubtotal();
    const discountRate = 0.10;
    const discountAmount = subtotal * discountRate;
    const finalTotal = subtotal - discountAmount;
 
      const navigate = useNavigate(); 

    
    const handleGoToProduct = () => {
        navigate('/');
    }
    
   return(

    <>  
    
    <div className="border-2 border-gray-200  shadow-lg rounded-lg  bg-gray-50">  
     <div className="flex justify-around mt-10">
               <h2 className="text-2xl font-semibold text-blue-900">Your Shopping Cart 🛒</h2>
            <button onClick={handleGoToProduct} className="text-gray-300 text-2xl hover:text-red-300">✖</button>
           </div>
            <p className="border-indigo-200 border-l-indigo-500 border-2 p-5 mx-20 my-10 sm:mx-50 sm:my-5 md:mx-70 md:my-10 flex border-l-10 bg-indigo-100 font-bold text-lg text-indigo-800 ">Cart Items: {items.length}</p>
          {items.map(item => {
                
                
                const itemTotal = item.quantity * item.price;
                
                return (
                    <div 
                        key={item.id} 
                     className="flex flex-col  bg-white md:flex-row border border-gray-200 m-20 md:m-10 justify-between items-center rounded-lg hover:shadow-lg">
                        <div className="border border-gray-300  m-5 p-5 flex flex-col items-center rounded-lg">
                            <img src={item.image} alt={item.title} height={'100px'} width={'100px'} />
                            <span className=" m-4 font-semibold text-blue-700">{item.category}</span>
                        </div>
                       <div>
                        <span className="text-green-800 font-bold text-lg">
                             Price: ${item.price.toFixed(2)}
                        </span>
                        </div>
                        <div>
                        <span >
                            <button onClick={() => dispatch(deleteFromCart(item.id))} className="px-4 py-2 rounded-full bg-blue-100 hover:bg-blue-200">-</button>
                            <span className="p-3 text-md">{item.quantity}</span>
                            <button onClick={() => dispatch(addToCart(item))} className="px-4 py-2 rounded-full bg-blue-100 hover:bg-blue-200">+</button>
                        </span>
                        </div>
                        <div>
                        <span className="text-red-800 font-bold text-lg">
                            Total: ${itemTotal.toFixed(2)} 
                        </span>
                        </div>
                        <div>
                        <button 
                            onClick={() => dispatch(removeItemFromCart(item.id))} 
                        className="px-5 py-2 md:mr-5 mb-5 mt-2 md:mb-0 md:mt-0 rounded-lg bg-blue-400 text-white hover:bg-blue-500 ">
                            Remove
                        </button>
                        </div>
                    </div>
                );
            })}
          {items.length>0  && (
            <div className="border flex items-center flex-col m-15 lg:my-10 lg:mx-70 rounded-lg border-gray-200 hover:shadow-lg bg-indigo-50">
              <h3 className="text-md sm:text-2xl text-blue-700 p-5 font-bold">Cart Summary ✨</h3>
              <div>
                <span className="lg:text-xl font-bold pb-15 text-pink-700 sm:text-lg text-md">Total price: ${subtotal.toFixed(2)}</span>
              </div>
              <div className="lg:text-xl font-bold pb-10 pt-5 text-violet-900 sm:text-lg text-md">After 10% discount: ${finalTotal.toFixed(2)}</div>
            </div>
          )}
          </div>
         
    </>
   )
}
export default CartProduct