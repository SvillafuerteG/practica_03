import React, { useState } from "react";
import axios from 'axios';

const UpdateUser = () => {
    const [userData, setUserData] = useState({ id: "", name: "", email: "" });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const updateUser = () => {
        axios.put('http://localhost:5000/users', {
            id: userData.id,
            name: userData.name,
            email: userData.email
        })
        .then((response) => {
            alert("User modified successfully!");
            console.log(response.data);
        })
        .catch((error) => {
            console.error("Error updating user:", error);
        });
    };

    return (
        <div>
            <input
                type="text"
                name="id"
                placeholder="User ID"
                value={userData.id}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={userData.name}
                onChange={handleInputChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={userData.email}
                onChange={handleInputChange}
            />
            <button onClick={updateUser}>Update User</button>
        </div>
    );
}

export default UpdateUser;
