import React, { useState, useEffect } from 'react';
import api from '../api';

const FoodList = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        api.get('foods/')
            .then(res => {
                setFoods(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <div>
            <h2>Food List</h2>
            <ul>
                {foods.map(food => (
                    <li key={food.id}>{food.name} - {food.price} - {food.type}</li>
                ))}
            </ul>
        </div>
    );
}

export default FoodList;
