import React from "react";

function Main({ products }) {
  return (
    <main className=" bg-gray-300 p-3 w-3/4 rounded-lg px-8">
      <h2 className="text-2xl font-medium py-2">Products</h2>
      <div className="grid grid-cols-3 gap-4 pb-10  text-center 
      ">
        {products.map((product) => {
          return (
            <div className="card ">
            <div className="bg-white shadow-md rounded-lg  h-full "key={product.id}>
              <img
                className="w-3/5 h-3/5 p-4 mx-auto"
                src={product.image}
                alt={product.name}
              />
              <p>{product.name}</p>
              <p className="font-bold mt-2">$ {product.price}</p>
              <button className="bg-yellow-400 rounded-md py-1 px-8 mt-8 mb-16 ">Add to cart</button>
            
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Main;
