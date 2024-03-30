import { Link } from "react-router-dom";

const Products = ({ product }) => {
    return (
        <div>
            <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg p-8 w-56 h-56 object-cover" src={product.image} alt="product image" />
                </a>
                <div className="px-5 pb-5 space-y-5">
                    <a href="#">
                        <h2 className="text-gray-900 font-semibold text-2xl tracking-tight dark:text-white">{product.name}</h2>
                    </a>
                    <a href="#">
                        <h3 className="text-gray-900 font-normal text-xl tracking-tight dark:text-white">{product.desc}</h3>
                    </a>

                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                        <Link to={`/${product.id}`}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >See Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;