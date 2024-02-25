import { useNavigate } from 'react-router-dom';
import { auth, logout } from '../utils/firebase';

const Home = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        const response = await logout();
        if (response) {
            navigate('/login');
        }
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-2xl font-medium m-1">
                Welcome, {auth.currentUser?.email}
            </h1>
            <button
                onClick={handleLogout}
                className="px-5 py-1 bg-red-500 rounded-md text-white hover:bg-red-600"
            >
                Logout
            </button>
        </div>
    );
};

export default Home;
