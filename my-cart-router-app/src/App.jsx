import Products from './components/Products'
import CartProduct from './components/CartProduct'
import {BrowserRouter} from 'react-router-dom'
import {Routes,Route,Link} from 'react-router-dom'
import Navbar from './components/Navbar'

function App(){
  return(
    <>
    <BrowserRouter>
    <Navbar/>
     <nav>
      <Link to={'/'}></Link>
      <Link to={'/cart'}></Link>
     </nav>
      <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/cart' element={<CartProduct/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App