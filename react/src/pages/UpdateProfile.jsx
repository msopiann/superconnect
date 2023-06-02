import { useEffect, useState } from "react";
import axios from 'axios';

const UpdateProfile = () => {

    const [newData, setNewData] = useState({
        name: '',
        email: '',
    });

    const api = axios.create({
        baseURL: 'http://localhost:8000',
        withCredentials: true,
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await api.get('/api/user');
            setNewData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const updateData = async (e) => {
        e.preventDefault();
        try {
            const response = await api.put('/update-profile', newData); // Perbarui endpoint sesuai dengan yang telah dibuat di server
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };


    const handleInputChange = (e) => {
        setNewData({ ...newData, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex justify-center">
            <div className="max-w-lg">
                <div>
                    <div>
                        <form onSubmit={updateData}>
                            <input
                                type="text"
                                name="name"
                                value={newData.name}
                                onChange={handleInputChange}
                                placeholder="Nama"
                                className="w-full border border-gray-300 p-2 rounded mt-4"
                            />
                            <input
                                type="email"
                                name="email"
                                value={newData.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                                className="w-full border border-gray-300 p-2 rounded"
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                            >
                                Simpan
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
