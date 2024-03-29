
import app from "../firebase.config";
import { RecaptchaVerifier, getAuth, onAuthStateChanged, signInWithPhoneNumber } from "firebase/auth";
import { useEffect, useState } from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [user, setUser] = useState(null)
    const [phone, setPhone] = useState('')
    const [otp, setOtp] = useState('')
    const auth = getAuth(app)
    const navigate = useNavigate()

    useEffect(() => {
        const unRegistered = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser)
        })
    }, [])

    const sendOtp = async () => {
        try {
            const recaptcha = new RecaptchaVerifier(auth, 'recaptcha-container', {});
            const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha)
            setUser(confirmation)
            console.log(confirmation);
        } catch (error) {
            console.error(error);
        }
    }

    const verifyOtp = async () => {
        try {
            const data = await user.confirm(otp)
            console.log(data);
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className="flex flex-col justify-center items-center mx-auto mt-12">
            <h1 className="text-4xl py-12">Sign in with Phone Number</h1>
            <div className="space-y-2">
                <PhoneInput
                    country={'bd'}
                    value={phone}
                    onChange={(phone) => setPhone('+' + phone)}

                />

                <button onClick={sendOtp} type="button" className="px-8 py-3 font-semibold rounded bg-blue-500 dark:bg-gray-800 dark:text-gray-100">Send OTP</button>

                {/* Recaptcha container */}
                <div id="recaptcha-container">

                </div>

                {/* Enter otp */}
                <div className="flex items-end gap-5">
                    <fieldset className="w-full space-y-1 dark:text-gray-800">
                        <label htmlFor="Search" className="hidden">Enter otp</label>
                        <div className="">

                            <input type="text"
                                onChange={(e) => setOtp(e.target.value)}
                                name="Search" placeholder="Enter OTP" className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-gray-300 
                        outline
                        outline-gray-700
                        dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600" />
                        </div>
                    </fieldset>

                    <button type="button" onClick={verifyOtp} className="px-12 py-2 w-full font-semibold rounded bg-green-500 dark:bg-gray-800 dark:text-gray-100">Verify OTP</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;