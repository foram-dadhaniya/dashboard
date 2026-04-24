import React, { useEffect, useState } from 'react'

const UserForm = ({show, onClose, onSubmit, user}) => {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: ""
    });

    useEffect(() => {
        if(user){
            setFormData(user);
        } else {
            setFormData({
                 name: "",
                username: "",
                email: ""
            })
        }
    }, [user])

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    }

    if (!show) return null;
  return (
    <>
      {/* Backdrop */}
      <div className="modal-backdrop fade show"></div>

      {/* Modal */}
      <div className="modal d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">

            {/* Header */}
            <div className="modal-header">
              <h5 className="modal-title">Add User</h5>
              <button className="btn-close" onClick={onClose}></button>
            </div>
            <form onSubmit={handleOnSubmit}>
                {/* Body */}
                <div className="modal-body">
                <input className="form-control mb-2" placeholder="Name" name='name' value={formData.name} onChange={handleOnChange} />
                <input className="form-control mb-2" placeholder="Username" name='username' value={formData.username} onChange={handleOnChange} />
                <input className="form-control mb-2" placeholder="Email" name='email' value={formData.email} onChange={handleOnChange} />
                </div>

                {/* Footer */}
                <div className="modal-footer">
                <button className="btn btn-secondary" onClick={onClose}>
                    Close
                </button>
                <button className="btn btn-primary">
                    Save
                </button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserForm
