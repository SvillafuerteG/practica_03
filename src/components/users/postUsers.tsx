import React, { useEffect, useState } from "react";
import axios from 'axios';

const PostUsers = () => {
    const [post, setPost] = useState<{ name: string, email: string } | null>(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        axios.get('http://localhost:5000/users/1')
            .then((response) => {
                setPost(response.data);
            })
            .catch((error) => {
                console.error("Error fetching user:", error);
            });
    }, []);

    function createPost() {
        axios.post('http://localhost:5000/users', {
            name,
            email
        })
        .then((response) => { 
            alert("User added successfully!");
            setPost(response.data.data);
            setName(""); // Clear the input fields after submission
            setEmail("");
        })
        .catch((error) => {
            console.error("Error creating user:", error);
        });
    }

    return (
        <div>
            <h1>{post ? post.name : "Nuevo Usuario"}</h1>
            <p>{post ? post.email : "Ingrese los datos del nuevo usuario."}</p>

            <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
                type="email"
                placeholder="Correo Electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <button onClick={createPost}>Insertar</button>
        </div>
    );
}

export default PostUsers;
