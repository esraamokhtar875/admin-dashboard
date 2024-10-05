import React, { useState, useEffect } from "react";
import api from "../api"; // Axios instance

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    type: "customer",
    name: "",
    phone: "",
    email: "",
    password: "",
    address: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  // Fetch user list from backend
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    api
      .get("users/")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  };

  // @ts-ignore
  const handleAddNew = () => {
    setFormData({
      type: "customer",
      name: "",
      phone: "",
      email: "",
      password: "",
      address: "",
    }); // Reset the form
    setEditMode(false); // Switch to Add mode
  };

  const handleEdit = (user) => {
    setFormData(user); // Pre-fill the form with the user data
    setCurrentId(user.id); // Save the current ID for editing
    setEditMode(true); // Switch to Edit mode
  };

  const handleDelete = (id) => {
    api
      .delete(`users/${id}/`)
      .then(() => fetchUsers()) // Refresh the user list after deletion
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    if (editMode) {
      // Edit existing user
      api
        .put(`users/${currentId}/`, formData)
        .then(() => {
          fetchUsers(); // Refresh the user list
          setFormData({
            type: "customer",
            name: "",
            phone: "",
            email: "",
            password: "",
            address: "",
          }); // Reset the form
          setEditMode(false);
        })
        .catch((err) => console.error(err));
    } else {
      // Add new user
      api
        .post("users/", formData)
        .then(() => {
          fetchUsers(); // Refresh the user list
          setFormData({
            type: "customer",
            name: "",
            phone: "",
            email: "",
            password: "",
            address: "",
          });
        })
        .catch((err) => console.error(err));
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>User List</h2>
      <hr />

      {/* Add/Edit Form */}
      <form onSubmit={handleSubmit}>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          style={{ width: "90%" }}
          required
        >
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
        </select>
        <br />
        <br />
        <input
          style={{ width: "90%" }}
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          style={{ width: "90%" }}
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          style={{ width: "90%" }}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <input
          style={{ width: "90%" }}
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <textarea
          style={{ width: "90%" }}
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <button
          type="submit"
          style={{
            marginRight: "8px",
            padding: "5px 8px",
            cursor: "pointer",
            fontWeight: "bold",
            backgroundColor: "orange",
            color: "white",
          }}
        >
          Submit
        </button>
      </form>

      <br />
      <hr />

      {/* User List Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
          fontWeight: "bold",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                borderBottom: "1px solid #ddd",
                padding: "6px",
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              User Name
            </th>
            <th
              style={{
                borderBottom: "1px solid #ddd",
                padding: "6px",
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              Phone
            </th>
            <th
              style={{
                borderBottom: "1px solid #ddd",
                padding: "6px",
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              Email
            </th>
            <th
              style={{
                borderBottom: "1px solid #ddd",
                padding: "6px",
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              Type
            </th>
            <th
              style={{
                borderBottom: "1px solid #ddd",
                padding: "6px",
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >         Actions
            </th>
          </tr>
        </thead>
        <tbody style={{ fontWeight: "bold" }}>
          {users.map((user) => (
            <tr key={user.id}>
              <td
                style={{
                  borderBottom: "1px solid #ddd",
                  padding: "6px",
                  fontWeight: "bold",
                }}
              >
                {user.name}
              </td>
              <td
                style={{
                  borderBottom: "1px solid #ddd",
                  padding: "6px",
                  fontWeight: "bold",
                }}
              >
                {user.phone}
              </td>
              <td
                style={{
                  borderBottom: "1px solid #ddd",
                  padding: "6px",
                  fontWeight: "bold",
                }}
              >
                {user.email}
              </td>
              <td
                style={{
                  borderBottom: "1px solid #ddd",
                  padding: "6px",
                  fontWeight: "bold",
                }}
              >
                {user.type}
              </td>
              <td
                style={{
                  borderBottom: "1px solid #ddd",
                  padding: "6px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                <button
                  onClick={() => handleEdit(user)}
                  style={{
                    marginRight: "8px",
                    padding: "5px 8px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    backgroundColor: "green",
                    color: "white",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  style={{
                    marginRight: "8px",
                    padding: "5px 8px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    backgroundColor: "red",
                    color: "white",
                  }}
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

export default UserList;
