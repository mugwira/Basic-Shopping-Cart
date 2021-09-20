import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'

function Header() {
    return (
        <header className="header flex justify-between py-8 mb-8 bg-gray-200 rounded px-8 ">
            <div className="logo font-bold">
                <a href="#"><h4>C.A.M Inc</h4></a>
            </div>
            <div className="links font-semibold space-x-4 flex items-center">
                <a className="text-2xlgit" href="#"><FaShoppingCart /> </a>
                <a href="#">Sign In</a>
            </div>
        </header>
    )
}

export default Header
