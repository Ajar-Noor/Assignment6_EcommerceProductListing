import React,{useState} from 'react'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
import Products from './Products/Products'
import { Routes, Route } from 'react-router-dom'
import Product from './Product/Product'
import Cart from './Cart/Cart'

const App = () => {
    const [cart, setcart] = useState([])

    const addToCart=(product)=>{
        setcart([...cart, product]);
    }
    console.log(addToCart)
    return (
        <>
            <div>
                <Navbar cart={cart}/>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/products' element={<Products addTocart={addToCart}/>} />
                    <Route exact path='/product/:id' element={<Product addToCart={addToCart}/>} />
                    <Route exact path='/cart' element={<Cart cart={cart}/>} />
                </Routes>
            </div>
        </>
    )
}

export default App
