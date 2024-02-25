import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Reset from './pages/Reset';
import PrivateRoutes from './routes/PrivateRoutes';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path="/" element={<Home />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/reset" element={<Reset />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
