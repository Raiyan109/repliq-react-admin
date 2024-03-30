import { Link } from 'react-router-dom';
import '../styles/hero.css'

const Hero = () => {
    return (
        <header className="header">
            <div className="brand-box">
                <span className="brand">Repliq</span>
            </div>

            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main">Welcome to our outlet</span>
                    <span className="heading-primary-sub">Enter the world of shopping</span>
                </h1>
                <Link to='/products' className="btn btn-white btn-animated">Discover our Clothes</Link>
            </div>
        </header>
    );
};

export default Hero;