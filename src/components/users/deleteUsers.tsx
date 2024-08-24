import React, { useState } from "react";
import axios from 'axios';

const DeleteUser = () => {
    const [userId, setUserId] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserId(event.target.value);
    };

    const deleteUser = () => {
        axios.delete('http://localhost:5000/users', {
            data: { id: userId }
        })
        .then((response) => {
            alert("User deleted successfully!");
            console.log(response.data);
        })
        .catch((error) => {
            console.error("Error deleting user:", error);
        });
    };

    return (
        <div>
            <input
                type="text"
                name="id"
                placeholder="User ID"
                value={userId}
                onChange={handleInputChange}
            />
            <button onClick={deleteUser}>Delete User</button>
        </div>
    );
}

export default DeleteUser;
