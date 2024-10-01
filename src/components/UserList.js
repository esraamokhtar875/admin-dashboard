import React, { useState, useEffect } from 'react';
import api from '../api';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.get('users/')
            .then(res => {
                setUsers(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.phone} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
