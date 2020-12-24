import React from 'react';
import CartIcon from './CartIcon';
import "./NavBar.css"
import {Link} from 'react-router-dom'

export default function NavBar(){
    return (
    <div className="navbar">
        <span className="logo"><Link to={"/"}>Tienda de Zapas!</Link></span>
        <span className="navbarItem"> <Link to={"/category/adidas"}>Adidas</Link></span>
        <span className="navbarItem"> <Link to={"/category/nike"}>Nike</Link></span>
        <span className="navbarItem"> <Link to={"/category/dc"}>DC</Link></span>
        <CartIcon/>
    </div>)
}