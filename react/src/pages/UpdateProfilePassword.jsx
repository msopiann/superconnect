import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Profile component
// eslint-disable-next-line react/prop-types
const Profile = ({ profilePicture }) => {
    return (
        <div className="mt-20 mb-4 flex flex-col justify-center items-center">
            <img
                src={profilePicture}
                alt="Profile"
                className="mx-auto w-24 h-24 rounded-full object-cover object-center"
            />
            <p className="text-center dark:text-white">Change Picture</p>
        </div>
    );
};

// Image upload component
// eslint-disable-next-line react/prop-types
const ImageUpload = ({ onUpload }) => {
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            onUpload(event.target.result);
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className="flex flex-col justify-center items-center dark:text-white">
            <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
    );
};

function UpdateProfile() {
    const [newData, setNewData] = useState({
        password: "",
        newPassword: "",
    });

    const api = axios.create({
        baseURL: "http://localhost:8000",
        withCredentials: true,
    });

    useEffect(() => {
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchData = async () => {
        try {
            const response = await api.get("/api/user");
            setNewData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const updateData = async (e) => {
        e.preventDefault();
        try {
            const response = await api.put("/update-profile", newData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (e) => {
        setNewData({ ...newData, [e.target.name]: e.target.value });
    };

    const [profilePicture, setProfilePicture] = useState(
        "./public/profile.png"
    );

    const handlePictureUpload = (newPicture) => {
        setProfilePicture(newPicture);
    };

    return (
        <div>
            <div className="flex">
                <div className="w-1/3 h-screen bg-white profile-sidebar dark:bg-black">
                    <div className="profile-picture mt-12">
                        <Profile profilePicture={profilePicture} />
                        <ImageUpload onUpload={handlePictureUpload} />
                        <p className="text-center text-2xl font-bold mt-6 dark:text-white">
                            {newData.name}
                        </p>
                    </div>

                    <div className="profile-data">
                        <ul className="mt-4 space-y-2 font-medium">
                            <li>
                                <Link
                                    to="/update-profile"
                                    className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                                >
                                    <span className="ml-3 dark:text-white">Profile</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6 ms-auto dark:text-white"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/profile-password"
                                    className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                                >
                                    <span className="ml-3 dark:text-white">Password</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 ms-auto dark:text-white"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                                        />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                                >
                                    <span className="ml-3 dark:text-white">Home</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 ms-auto dark:text-white"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                        />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-2/3 mt-20">
                    <div className="ms-24 me-24">
                        <h2 className="text-dark text-4xl font-bold mb-12 dark:text-white">
                            Profile
                        </h2>

                        <form onSubmit={updateData}>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-blue-700 uppercase dark:text-white">
                                    Old Password
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={newData.password}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-dark"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-blue-700 uppercase dark:text-white">
                                    New Password Confirmation
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={newData.password}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-dark"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-blue-700 uppercase dark:text-white">
                                    New Password
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={newData.password}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-dark"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                            >
                                Edit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UpdateProfile;
