import tshirt from '../assets/pexels-spencer-selover-428340.jpg'
import panjabi from '../assets/panjabi.jpeg'
import lungi from '../assets/lungi.jpeg'
import sherwani from '../assets/sherwani.jpeg'
import saree from '../assets/pexels-rohit-photography-19569602.jpg'

const ProductList = () => {
    const products = [
        {
            id: 1,
            image: tshirt,
            name: 'T-shirt',
            desc: 'It is a good looking t-shirt',
            price: 300
        },
        {
            id: 2,
            image: panjabi,
            name: 'Panjabi',
            desc: 'It is a good looking panjabi',
            price: 1000
        },
        {
            id: 3,
            image: lungi,
            name: 'Lungi',
            desc: 'It is a good looking lungi',
            price: 200
        },
        {
            id: 4,
            image: sherwani,
            name: 'Sherwani',
            desc: 'It is a good looking sherwani',
            price: 1300
        },
        {
            id: 5,
            image: saree,
            name: 'Sharee',
            desc: 'It is a good looking sharee',
            price: 700
        },
    ]
    return (
        <div>

        </div>
    );
};

export default ProductList;