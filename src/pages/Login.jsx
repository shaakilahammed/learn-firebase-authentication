import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import google from '../assets/google.png';
import { signIn, socialLogin } from '../utils/firebase';
const Login = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInputs({ ...inputs, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = await signIn(inputs);
        if (user) navigate('/');
        else setError('Invalid email and password!');
    };

    const handleSocialLogin = async (social) => {
        const user = await socialLogin(social);
        if (user) navigate('/');
    };
    return (
        <div
            onSubmit={handleSubmit}
            className="h-screen flex items-center justify-center"
        >
            <form className="w-80 mx-auto border border-gray-400 p-5 pt-0 rounded-lg">
                <h2 className="text-2xl font-bold py-2 mb-3 text-center">
                    Login
                </h2>

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={inputs.email}
                        onChange={handleChange}
                    />
                    <label
                        htmlFor="email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Email address
                    </label>
                </div>
                <div className="relative z-0 w-full mb-2 group">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={inputs.password}
                        onChange={handleChange}
                    />
                    <label
                        htmlFor="password"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Password
                    </label>

                    <div className="pb-2 text-blue-700 hover:text-blue-800 text-sm">
                        <Link to="/reset">Forgot password?</Link>
                    </div>
                </div>

                {error && (
                    <div className="pb-2 text-red-500 text-sm">{error}</div>
                )}
                <div className="flex justify-center gap-1">
                    <button
                        type="submit"
                        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        onClick={() => handleSocialLogin('google')}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <img
                            src={google}
                            className="w-6 mx-auto"
                            alt="google"
                            color="red"
                        />
                    </button>
                    {/* <button
                        type="button"
                        onClick={() => handleSocialLogin('fb')}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Facebook
                    </button> */}
                </div>

                <div className="flex justify-center mt-1">
                    <span className="text-sm">
                        Don&apos;t have an account?{' '}
                        <span className="text-blue-700 hover:text-blue-800">
                            <Link to="/registration">Register here</Link>
                        </span>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Login;
