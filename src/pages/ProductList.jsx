
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Products from './Products'
import ProductsJson from '../../public/products';


const ProductList = () => {

    const ProductsStorage = JSON.parse(localStorage.getItem('newProduct'))

    return (
        <>
            <div className='py-9 px-3'>
                <Link to='/' className="px-8 py-3 font-semibold rounded-full bg-gray-800 text-gray-100">Back To Home</Link>
            </div>
            <div className='flex flex-col justify-center items-center py-12'>

                <h1 className='text-4xl'>Product List</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        ProductsStorage ? ProductsStorage.map((product) => (
                            <Products key={product.id} product={product} />
                        ))
                            :
                            ProductsJson.map((product) => (
                                <Products key={product.id} product={product} />
                            ))
                    }
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductList;