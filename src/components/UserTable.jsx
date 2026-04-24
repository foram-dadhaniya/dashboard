import React, { useEffect, useState } from 'react'
import UserForm from './UserForm';
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser, updateUser, deleteUser } from "../redux/userSlice";

const UserTable = () => {
    const dispatch = useDispatch();
    const { users, loading } = useSelector((state) => state.users);

    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])

    const handleSubmit = (formData) => {
        
            if (selectedUser) {
                dispatch(updateUser({ id: selectedUser.id, data: formData }));
                toast.success("User updated successfully");
            } else {
                dispatch(addUser(formData));
                toast.success("User added successfully");
            }


            setShowModal(false);
            setSelectedUser(null);
       
    }

    const handleDeleteUser = (id) => {
        dispatch(deleteUser(id));
        toast.success("User deleted successfully");
    }

    const handleEditUser = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    }
    return (
        <>
            <button type='button' onClick={() => setShowModal(true)}>Add</button>
            {loading ? (
                <div className="text-center my-3">
                    <div className="spinner-border"></div>
                </div>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button type='button' onClick={() => handleEditUser(user)}>
                                        <i className="bi bi-pencil-square"></i>
                                    </button>
                                    <button type='button' onClick={() => handleDeleteUser(user.id)}>
                                        <i className="bi bi-trash3"></i>
                                    </button>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            )}

            <UserForm show={showModal} onClose={() => setShowModal(false)} onSubmit={handleSubmit} user={selectedUser} />
        </>
    )
}

export default UserTable