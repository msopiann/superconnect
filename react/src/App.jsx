import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

import AuthLayout from "./layouts/AuthLayout";
import GuestLayout from "./layouts/GuestLayout";

function App() {
    return (
        <div className="bg-slate-100 min-h-screen">
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="/" element={<Home />}></Route>
                </Route>

                <Route element={<GuestLayout />}>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/forgot-password" element={<ForgotPassword />}></Route>
                    <Route path="/password-reset/:token" element={<ResetPassword />}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
