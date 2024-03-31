import { Link } from "react-router-dom";
import cartImg from '../assets/cart.jpg'

const Navbar = () => {
    const cart = JSON.parse(localStorage.getItem('item'));
    console.log(cart.length);

    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg> */}
                        <span className="ml-3 text-xl">Repliq</span>
                    </a>
                    <div className="flex gap-3">
                        <Link to='/dashboard'>Dashboard</Link>
                        <Link to='/signup'>Register</Link>
                        <Link to='/signup'>
                            <div className="relative">
                                <span className="bg-red-600 absolute top-0 right-0 w-4 h-4 rounded-full flex justify-center items-center text-xs text-white">{cart.length}</span>
                                <img src={cartImg} alt="" className="w-9 h-9 object-cover" />
                            </div>
                        </Link>

                    </div>

                </div>
            </header>
        </div>
    );
};

export default Navbar;