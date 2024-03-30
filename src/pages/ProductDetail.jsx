import { useParams } from "react-router-dom";
import ProductsJson from '../../public/products'
const ProductDetail = () => {
    const { id } = useParams()
    const products = ProductsJson.find((item) => item.id === id)

    if (!products) {
        return <p>{`This page does not contain ${id} details`}</p>
    }
    console.log(id);
    return (
        <div>
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
                                <span className="foot"><i className="fa fa-shopping-bag"></i>Buy Now</span>
                                <span className="foot"><i className="fa fa-shopping-cart"></i>Add TO Cart</span>
                            </div>
                        </div>
                    </div>

                </>
            )}
        </div>
    );
};

export default ProductDetail;