import React, { useState, useEffect } from 'react';
import api from '../api';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        api.get('categories/')
            .then(res => {
                setCategories(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <div>
            <h2>Category List</h2>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default CategoryList;
