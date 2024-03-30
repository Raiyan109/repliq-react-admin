
import Products from './Products'

const ProductList = () => {

    const ProductsStorage = JSON.parse(localStorage.getItem('newProduct'))

    return (
        <div className='flex justify-center items-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    ProductsStorage.map((product) => (
                        <Products key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    );
};

export default ProductList;