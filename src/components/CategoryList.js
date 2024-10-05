
import React, { useState, useEffect } from 'react';
import api from '../api';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({ name: '' });
    const [editMode, setEditMode] = useState(false);
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = () => {
        api.get('categories/')
            .then(res => setCategories(res.data))
            .catch(err => console.error(err));
    };

    // const handleAddNew = () => {
    //     setFormData({ name: '' });
    //     setEditMode(false);
    // };

    const handleEdit = (category) => {
        setFormData(category);
        setCurrentId(category.id);
        setEditMode(true);
    };

    const handleDelete = (id) => {
        api.delete(`categories/${id}/`)
            .then(() => fetchCategories())
            .catch(err => console.error(err));
    };

    const handleSubmit = () => {
        if (editMode) {
            api.put(`categories/${currentId}/`, formData)
                .then(() => {
                    fetchCategories();
                    setFormData({ name: '' });
                    setEditMode(false);
                })
                .catch(err => console.error(err));
        } else {
            api.post('categories/', formData)
                .then(() => {
                    fetchCategories();
                    setFormData({ name: '' });
                })
                .catch(err => console.error(err));
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Category List</h2>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input style={{padding :'5px',width :'90%'

                }}
                    type="text"
                    name="name"
                    placeholder="Category Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <button type="submit" style={{ padding: '5px',float:'right',backgroundColor:'orange',fontWeight:'bold', color:'white'}}>
                    {editMode ? 'Update Category' : 'Add Category'}
                </button>
            </form>
            <hr/>

            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                    <tr>
                        <th style={{ borderBottom: '1px solid #ddd', padding: '6px', fontWeight: 'bold',fontSize:'22px' }}>Category Name</th>
                        <th style={{ borderBottom: '1px solid #ddd', padding: '6px', fontWeight: 'bold',fontSize:'22px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                        <tr key={category.id}>
                            <td style={{ borderBottom: '1px solid #ddd', padding: '6px', fontWeight: 'bold' }}>{category.name}</td>
                            <td style={{ borderBottom: '1px solid #ddd', padding: '6px', textAlign: 'center' }}>
                                <button 
                                    onClick={() => handleEdit(category)}
                                    style={{ marginRight: '8px', padding: '5px 8px', cursor: 'pointer', fontWeight: 'bold' ,backgroundColor:'green',color:'white'}}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(category.id)}
                                    style={{ padding: '5px 8px', cursor: 'pointer', fontWeight: 'bold', backgroundColor:'red',color:'white'}}
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

export default CategoryList;










// import React, { useState, useEffect } from 'react';
// import api from '../api';

// const CategoryList = () => {
//     const [categories, setCategories] = useState([]);

//     useEffect(() => {
//         api.get('categories/')
//             .then(res => {
//                 setCategories(res.data);
//             })
//             .catch(err => {
//                 console.error(err);
//             });
//     }, []);

//     const handleAddNew = () => {
//         console.log("Redirect to add new food form");
//     };

//     const handleEdit = (id) => {
//         // Handle edit logic here
//         console.log(`Edit category with id: ${id}`);
//     };

//     const handleDelete = (id) => {
//         // Handle delete logic here
//         console.log(`Delete category with id: ${id}`);
//     };

//     return (
//         <div>
//             <h2>Category List</h2>
//             <button 
//                 onClick={handleAddNew}
//                 style={{ float: 'right', padding: '8px 16px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '20px' }}
//             >
//                 Add New
//             </button>
//             <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
//                 <thead>
//                     <tr>
//                         <th style={{ borderBottom: '1px solid #ddd', padding: '6px', fontWeight: 'bold' }}>Category Name</th>
//                         <th style={{ borderBottom: '1px solid #ddd', padding: '6px', fontWeight: 'bold' }}>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {categories.map(category => (
//                         <tr key={category.id}>
//                             <td style={{ borderBottom: '1px solid #ddd', padding: '6px', fontWeight: 'bold' }}>{category.name}</td>
//                             <td style={{ borderBottom: '1px solid #ddd', padding: '6px', textAlign: 'center' }}>
//                                 <button 
//                                     onClick={() => handleEdit(category.id)} 
//                                     style={{ marginRight: '8px', padding: '5px 8px', cursor: 'pointer', fontWeight: 'bold' }}
//                                 >
//                                     Edit
//                                 </button>
//                                 <button 
//                                     onClick={() => handleDelete(category.id)} 
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

// export default CategoryList;
