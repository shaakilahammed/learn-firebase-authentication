import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../utils/firebase';

const PrivateRoutes = () => {
    return auth.currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
