
const MyProduct = () => {
    const ProductsStorage = JSON.parse(localStorage.getItem('newProduct'))

    const deleteProduct = (id) => {
        const ProductsStorage = JSON.parse(localStorage.getItem('newProduct'))
        const deletedProduct = ProductsStorage.filter((item => item.id !== id))
        localStorage.setItem('newProduct', JSON.stringify(deletedProduct))
        console.log(deletedProduct);
        return deletedProduct
    }
    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight text-black">My Products</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="bg-gray-300">
                            <tr className="text-left">
                                <th className="p-3">Invoice #</th>
                                <th className="p-3">Image</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Price</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ProductsStorage.map((item) => (
                                    <tr key={item.id} className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                                        <td className="p-3">
                                            <p>{item.id}</p>
                                        </td>
                                        <td className="p-3">
                                            <img src={item.image} alt="" className="rounded-full w-12 h-12 object-cover" />
                                        </td>
                                        <td className="p-3">
                                            <p>{item.name}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{item.price}</p>

                                        </td>
                                        <td className="p-3 text-right cursor-pointer" onClick={() => deleteProduct(item.id)}>
                                            <span className="px-3 py-1 font-semibold rounded-md bg-red-600 text-gray-50">
                                                <span>Delete</span>
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            }
                            {/* <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                                <td className="p-3">
                                    <p>97412378923</p>
                                </td>
                                <td className="p-3">
                                    <p>Tesla Inc.</p>
                                </td>
                                <td className="p-3">
                                    <p>14 Jan 2022</p>
                                    <p className="text-gray-600">Friday</p>
                                </td>
                                <td className="p-3">
                                    <p>01 Feb 2022</p>
                                    <p className="text-gray-600">Tuesday</p>
                                </td>
                                <td className="p-3 text-right">
                                    <p>$275</p>
                                </td>
                                <td className="p-3 text-right">
                                    <span className="px-3 py-1 font-semibold rounded-md bg-blue-600 text-gray-50">
                                        <span>Pending</span>
                                    </span>
                                </td>
                            </tr>
                            <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                                <td className="p-3">
                                    <p>97412378923</p>
                                </td>
                                <td className="p-3">
                                    <p>Coca Cola co.</p>
                                </td>
                                <td className="p-3">
                                    <p>14 Jan 2022</p>
                                    <p className="text-gray-600">Friday</p>
                                </td>
                                <td className="p-3">
                                    <p>01 Feb 2022</p>
                                    <p className="text-gray-600">Tuesday</p>
                                </td>
                                <td className="p-3 text-right">
                                    <p>$8,950,500</p>
                                </td>
                                <td className="p-3 text-right">
                                    <span className="px-3 py-1 font-semibold rounded-md bg-blue-600 text-gray-50">
                                        <span>Pending</span>
                                    </span>
                                </td>
                            </tr>
                            <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                                <td className="p-3">
                                    <p>97412378923</p>
                                </td>
                                <td className="p-3">
                                    <p>Nvidia Corporation</p>
                                </td>
                                <td className="p-3">
                                    <p>14 Jan 2022</p>
                                    <p className="text-gray-600">Friday</p>
                                </td>
                                <td className="p-3">
                                    <p>01 Feb 2022</p>
                                    <p className="text-gray-600">Tuesday</p>
                                </td>
                                <td className="p-3 text-right">
                                    <p>$98,218</p>
                                </td>
                                <td className="p-3 text-right">
                                    <span className="px-3 py-1 font-semibold rounded-md bg-blue-600 text-gray-50">
                                        <span>Pending</span>
                                    </span>
                                </td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;