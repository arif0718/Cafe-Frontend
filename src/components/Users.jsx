import React from "react";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();
  const [limit, setLimit] = useState(3);
  const [form, setForm] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    role:""
  })
  const [page, setPage] = useState(1);
  const [searchVal, setSearchVal] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  const API_URL = import.meta.env.VITE_API_URL;
  const fetchUsers = async () => {
    try {
      const url = `${API_URL}/api/users/?page=${page}&limit=${limit}&search=${searchVal}`;
      const result = await axios.get(url);
      setUsers(result.data.users);
      setTotalPages(result.data.total);
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const handleDelete = async (id) => {
    try {
      const url = `${API_URL}/api/users/${id}`;
      const result = await axios.delete(url, form);
      setError("User deleted successfully");
      fetchUsers();
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

  const handleAdd = async () => {
    try {

      const url = `${API_URL}/api/users`;
      const result = await axios.post(url, form);
      fetchUsers();

    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]:e.target.value})
  }

  return (
    <div>
      <div>
        <h2>User Management</h2>

        <div>
          <input name="firstName" value={form.firstName} onChange={handleChange} type="text" placeholder="First Name" />
          <input name="lastName" value={form.lastName} onChange={handleChange} type="text" placeholder="Last Name" />
          <input name="email" value={form.email} onChange={handleChange} type="text" placeholder="Email" />
          <input name="password" value={form.password} onChange={handleChange} type="password" placeholder="Password" />
          <input name="role" value={form.role} onChange={handleChange} type="text" placeholder="Role" />
          <button onClick={handleAdd}>Add</button>
        </div>
        <div>
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <button onClick={()=>fetchUsers()}>Search</button>
        </div>
        <div>
          <table border="1">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email address</th>
                <th>Role</th>

                <th>Action</th>
              </tr>
            </thead>
            {users &&
              users.map((user) => (
                <tbody key={user._id}>
                  <tr>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <button onClick={() => handleDelete(user._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            <tfoot></tfoot>
          </table>
        </div>
        <div>
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            Previous
          </button>
          Page {page} of {totalPages}
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}