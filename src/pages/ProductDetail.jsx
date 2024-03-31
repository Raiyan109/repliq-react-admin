import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const ProductDetail = () => {
    const [cart, setCart] = useState([])
    const { id } = useParams()
    const ProductsStorage = JSON.parse(localStorage.getItem('newProduct'))
    const products = ProductsStorage.find((item) => item.id === id)


    if (!products) {
        return <p>{`This page does not contain ${id} details`}</p>
    }


    const addToCart = (productsInput) => {
        const ProductsStorage = JSON.parse(localStorage.getItem('newProduct'));
        const existingProductIndex = ProductsStorage.findIndex((item) => item.id === productsInput.id);

        if (existingProductIndex !== -1) {
            const updatedCart = [...ProductsStorage];
            updatedCart[existingProductIndex].quantity = parseInt(updatedCart[existingProductIndex].quantity || 0) + 1;
            localStorage.setItem('newProduct', JSON.stringify(updatedCart));
            // localStorage.setItem('cartItems', JSON.stringify(updatedCart));
            // setCart(updatedCart);
            // console.log(cart);
        } else {
            // Product does not exist in the cart, add it
            const newProduct = { id: productsInput.id, quantity: 1 }; // Assuming productsInput has an 'id' property
            const updatedCart = [...ProductsStorage, newProduct];
            localStorage.setItem('newProduct', JSON.stringify(updatedCart)); // Update localStorage
            // setCart(updatedCart);
        }
        let addedCart = []
        addedCart.push(productsInput)
        localStorage.setItem('item', JSON.stringify(addedCart));
    }

    return (
        <div>
            <Navbar />
            {products && (
                <>

                    <div className="card">
                        <div className="left">
                            <img src={products.image} alt="shoe" className=" object-cover rounded-full" />
                            <i className="fa fa-long-arrow-left"></i>
                            <i className="fa fa-long-arrow-right"></i>
                        </div>
                        <div className="right">
                            <div className="product-info">
                                <div className="product-name">
                                    <h1>{products.name}</h1>

                                </div>
                                <div className="details">

                                    <h2>{products.desc}</h2>
                                    <h4><span className="fa fa-dollar"></span>{products.price}</h4>
                                    <h4 className="dis"><span className="fa fa-dollar"></span>200</h4>
                                </div>
                                <ul>
                                    <li>SIZE</li>
                                    <li className="bg">7</li>
                                    <li className="bg">8</li>
                                    <li className="bg">9</li>
                                    <li className="bg">10</li>
                                    <li className="bg">11</li>
                                </ul>
                                <ul>
                                    <li>COLOR</li>
                                    <li className="yellow"></li>
                                    <li className="black"></li>
                                    <li className="blue"></li>
                                </ul>

                                <button type="button"
                                    onClick={() => addToCart(products)}
                                    className="px-6 py-2 font-semibold rounded mt-4 bg-blue-300">Add To Cart</button>
                            </div>
                        </div>
                    </div>

                </>
            )}
        </div>
    );
};

export default ProductDetail;