import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing/Landing'
import Auth from './Pages/Auth/SignIn'
import Cart from './Pages/Cart/Cart'
import Payment from './Pages/Payment/Payment';
import Orders from './Pages/Orders/Orders';
import Results from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetails/ProductDetail';

function Routing () {
    return (
        <Router>
            <Routes>
                <Route path='/' element ={<Landing />} />
                <Route path='/auth' element ={<Auth />} />
                <Route path='/cart' element ={<Cart />} />
                <Route path='/payment' element ={<Payment />} />
                <Route path='/Orders' element ={<Orders />} />
                <Route path='/Category/:categoryName' element ={<Results />} />                
                <Route path='/products/:productId' element ={<ProductDetail />} />                
            </Routes>
        </Router>
    );
}

export default Routing;
