import '../styles/addProduct.css'


const AddProduct = () => {
    return (
        <div className="container">
            <div className="text">
                Contact us Form
            </div>
            <form action="#">
                <div className="form-row">
                    <div className="input-data">
                        <input type="text" required className='focus:outline-none' />
                        <div className="underline"></div>
                        <label>First Name</label>
                    </div>
                    <div className="input-data">
                        <input type="text" required className='focus:outline-none' />
                        <div className="underline"></div>
                        <label>Last Name</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-data">
                        <input type="text" required className='focus:outline-none' />
                        <div className="underline"></div>
                        <label>Email Address</label>
                    </div>
                    <div className="input-data">
                        <input type="text" required className='focus:outline-none' />
                        <div className="underline"></div>
                        <label>Website Name</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-data textarea">
                        <textarea rows="8" cols="80" required className='focus:outline-none'></textarea>
                        <br />
                        <div className="underline"></div>
                        <label>Write your message</label>
                        <br />
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