import React, { useState, useEffect } from 'react';
import api from '../api';  // Axios instance

const FoodList = () => {
    const [foods, setFoods] = useState([]);
    const [formData, setFormData] = useState({ name: '',price: '', type: '',description: '', category: ''});
    const [editMode, setEditMode] = useState(false);
    const [currentId, setCurrentId] = useState(null);

    // Fetch food list from backend
    useEffect(() => {
        fetchFoods();
    }, []);

    const fetchFoods = () => {
        api.get('foods/')
            .then(res => setFoods(res.data))
            .catch(err => console.error(err));
    };

    const handleAddNew = () => {
        setFormData({ name: '', price: '', type: '' ,description: '', category: ''});  // Reset the form
        setEditMode(false);  // Switch to Add mode
    };

    const handleEdit = (food) => {
        setFormData(food);  // Pre-fill the form with the food data
        setCurrentId(food.id);  // Save the current ID for editing
        setEditMode(true);  // Switch to Edit mode
    };

    const handleDelete = (id) => {
        api.delete(`foods/${id}/`)
            .then(() => fetchFoods())  // Refresh the food list after deletion
            .catch(err => console.error(err));
    };

    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent full page reload
    
        console.log('Form data:', formData);  // Check the form data before submitting
    
        if (editMode) {
            // Edit existing food
            api.put(`foods/${currentId}/`, formData)
                .then(() => {
                    fetchFoods();  // Refresh the food list
                    setFormData({ name: '', price: '', type: '',description: '', category: '' });  // Reset form data
                    setEditMode(false);
                })
                .catch(err => console.error(err));
        } else {
            // Add new food
            api.post('foods/', formData)
                .then(() => {
                    fetchFoods();  // Refresh the food list
                    setFormData({ name: '', price: '', type: '',description: '', category: ''});  // Reset form data
                })
                .catch(err => {
                    console.error('Error posting data:', err);
                    console.error(err.response?.data);  // Check the server's error response
                });
        }
    }

    const [categories, setCategories] = useState([]);

            useEffect(() => {
                // Fetch categories from the backend to populate the dropdown
                api.get('categories/')
                    .then(res => setCategories(res.data))
                    .catch(err => console.error('Error fetching categories:', err));
                }, []);

    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <div>
            <h2>Food List</h2>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input style={{width: '90%',padding:'5px'}}
                    type="text"
                    name="name"
                    placeholder="Food Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                /><br/><br/>
                 <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    style={{width:'90%'}}
                    required
                /><br/><br/>
               
                <input style={{width: '90%',padding:'5px'}}
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                /><br/><br/>
                <input style={{width: '90%',padding:'5px'}}
                    type="text"
                    name="type"
                    placeholder="Type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                /><br/><br/>
                 <select  name="category" value={formData.category} onChange={handleChange} style={{width:'90%'}}required>
                    <option value="">Select Category</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>  
                    ))}
                </select>

               
                <br/><br/>
            
                <button type="submit" style={{ padding: '5px', marginTop: '10px',backgroundColor:'orange',color:'white',fontWeight:'bold' }}>
                    {editMode ? 'Update Food' : 'Add Food'}
                </button>
            </form>
            <hr/>

            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                    <tr>
                        <th style={{ borderBottom: '1px solid #ddd', padding: '6px', fontWeight: 'bold',fontSize:'22px' }}>Food Name</th>
                        <th style={{ borderBottom: '1px solid #ddd', padding: '6px', fontWeight: 'bold' ,fontSize:'22px'}}>Price</th>
                        <th style={{ borderBottom: '1px solid #ddd', padding: '6px', fontWeight: 'bold',fontSize:'22px' }}>Type</th>
                        <th style={{ borderBottom: '1px solid #ddd', padding: '6px', fontWeight: 'bold',fontSize:'22px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {foods.map((food) => (
                        <tr key={food.id}>
                            <td style={{ borderBottom: '1px solid #ddd', padding: '6px', fontWeight: 'bold' }}>{food.name}</td>
                            <td style={{ borderBottom: '1px solid #ddd', padding: '6px', fontWeight: 'bold' }}>{food.price}</td>
                            <td style={{ borderBottom: '1px solid #ddd', padding: '6px', fontWeight: 'bold' }}>{food.type}</td>
                            <td style={{ borderBottom: '1px solid #ddd', padding: '6px', textAlign: 'center' }}>
                                <button
                                    onClick={() => handleEdit(food)}
                                    style={{ marginRight: '8px', padding: '5px 8px', cursor: 'pointer', fontWeight: 'bold',backgroundColor:'green',color:'white' }}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(food.id)}
                                    style={{ padding: '5px 8px', cursor: 'pointer', fontWeight: 'bold' ,backgroundColor:'red',color:'white'}}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FoodList;










// import React, { useState, useEffect } from 'react';
// import api from '../api';

// const FoodList = () => {
//     const [foods, setFoods] = useState([]);

//     useEffect(() => {
//         api.get('foods/')
//             .then(res => {
//                 setFoods(res.data);
//             })
//             .catch(err => {
//                 console.error(err);
//             });
//     }, []);


//     const handleAddNew = () => {
//         console.log("Redirect to add new food form");
//     };


//     const handleEdit = (id) => {
//         // Edit logic
//         console.log(`Edit food with id: ${id}`);
//     };

//     const handleDelete = (id) => {
//         // Delete logic
//         console.log(`Delete food with id: ${id}`);
//     };

//     return (
//         <div>
//             <h2>Food List</h2>
//             <button 
//                 onClick={handleAddNew}
//                 style={{ float: 'right', padding: '8px 16px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '20px' }}
//             >
//                 Add New
//             </button>
//             <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
//                 <thead>
//                     <tr>
//                         <th style={{ borderBottom: '1px solid #ddd', padding: '6px', fontWeight: 'bold' }}>Food Name</th>
//                         <th style={{ borderBottom: '1px solid #ddd', padding: '6px', fontWeight: 'bold' }}>Price</th>
//                         <th style={{ borderBottom: '1px solid #ddd', padding: '6px', fontWeight: 'bold' }}>Type</th>
//                         <th style={{ borderBottom: '1px solid #ddd', padding: '6px', fontWeight: 'bold' }}>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {foods.map(food => (
//                         <tr key={food.id}>
//                             <td style={{ borderBottom: '1px solid #ddd', padding: '6px', fontWeight: 'bold' }}>{food.name}</td>
//                             <td style={{ borderBottom: '1px solid #ddd', padding: '6px', fontWeight: 'bold' }}>{food.price}</td>
//                             <td style={{ borderBottom: '1px solid #ddd', padding: '6px', fontWeight: 'bold' }}>{food.type}</td>
//                             <td style={{ borderBottom: '1px solid #ddd', padding: '6px', textAlign: 'center' }}>
//                                 <button 
//                                     onClick={() => handleEdit(food.id)} 
//                                     style={{ marginRight: '8px', padding: '5px 8px', cursor: 'pointer', fontWeight: 'bold' }}
//                                 >
//                                     Edit
//                                 </button>
//                                 <button 
//                                     onClick={() => handleDelete(food.id)} 
//                                     style={{ padding: '5px 8px', cursor: 'pointer', fontWeight: 'bold' }}
//                                 >
//                                     Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default FoodList;
