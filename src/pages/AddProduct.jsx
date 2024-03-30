import '../styles/addProduct.css'
import ProductJson from '../../public/products'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const AddProduct = () => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')

    const id = uuidv4()



    const addProduct = (e) => {
        e.preventDefault()
        const newProduct = [...ProductJson, {
            "id": id,
            "name": name,
            "image": image,
            "desc": desc,
            "price": price
        }]
        console.log(newProduct);
        localStorage.setItem('newProduct', JSON.stringify(newProduct))
        return newProduct
    }





    return (
        <div className="container">
            <div className="text">
                Add Product
            </div>
            <form onSubmit={addProduct}>
                <div className="form-row">
                    <div className="input-data">
                        <input type="text" required className='focus:outline-none'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <div className="underline"></div>
                        <label>Name</label>
                    </div>
                    <div className="input-data">
                        <input type="text" required className='focus:outline-none'
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                        <div className="underline"></div>
                        <label>Image Url </label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-data">
                        <input type="text" required className='focus:outline-none'
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                        <div className="underline"></div>
                        <label>Description</label>
                    </div>
                    <div className="input-data">
                        <input type="text" required className='focus:outline-none'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <div className="underline"></div>
                        <label>Price</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-data textarea">
                        {/* <textarea rows="8" cols="80" required className='focus:outline-none'></textarea>
                        <br />
                        <div className="underline"></div>
                        <label>Write your message</label>
                        <br /> */}
                        <div className="form-row submit-btn">
                            <div className="input-data">
                                <div className="inner"></div>
                                <input type="submit" value="submit" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;