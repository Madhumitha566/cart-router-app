import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
const Navbar=()=>{
           const items=useSelector(state=>state.cart.items)
   
    const navigate = useNavigate(); 

    
    const handleGoToCart = () => {
        navigate('/cart');
    }
    return(
        <>
        <div  className="flex justify-between p-[30px]  bg-linear-to-r from-cyan-500 to-blue-500 items-center ">
            <div className="text-[30px] sm:text-[50px] text-white">
               <h1>Fake Store</h1>
           </div>

           <button onClick={handleGoToCart} className="relative mr-10">
             <div className="absolute left-9 bottom-8 bg-purple-500 rounded-full px-2 py-1 text-sm"><p>{items.length}</p></div>
             <svg fill="#FFFFFF" width="50px" height="50px" viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg">

             <g>

              <path d="M20.756 5.345c-.191-.219-.466-.345-.756-.345h-13.819l-.195-1.164c-.08-.482-.497-.836-.986-.836h-2.25c-.553 0-1 .447-1 1s.447 1 1 1h1.403l1.86 11.164.045.124.054.151.12.179.095.112.193.13.112.065c.116.047.238.075.367.075h11.001c.553 0 1-.447 1-1s-.447-1-1-1h-10.153l-.166-1h11.319c.498 0 .92-.366.99-.858l1-7c.041-.288-.045-.579-.234-.797zm-1.909 1.655l-.285 2h-3.562v-2h3.847zm-4.847 0v2h-3v-2h3zm0 3v2h-3v-2h3zm-4-3v2h-3l-.148.03-.338-2.03h3.486zm-2.986 3h2.986v2h-2.653l-.333-2zm7.986 2v-2h3.418l-.285 2h-3.133z"/>

              <circle cx="8.5" cy="19.5" r="1.5"/>

              <circle cx="17.5" cy="19.5" r="1.5"/>

               </g>
                </svg>
           </button>
           
      </div>
     </>
    )

}
export default  Navbar