import React from 'react'

function Cart({cartItems}) {
    return (
        <aside className="bg-gray-300 w-1/4 rounded-lg">
            <h2 className="px-2 font-medium text-2xl py-4">Items in Cart</h2>
            <div className="cart-items">
                {cartItems.length === 0 && <div className="px-2">Cart is empty</div>}
            </div>
            
        </aside>
    )
}

export default Cart
