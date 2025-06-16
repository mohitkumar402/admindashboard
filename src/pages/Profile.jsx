import React, { useState } from 'react';
import '../styles/profile.css'; 
import avatar from '../assets/avatar.jpg'; // Assuming you have a default avatar image

const Account = () => {
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState({
    name: 'Mohit Kumar',
    email: 'mohit@example.com',
    phone: '+91-9876543210',
    avatar: avatar, // Default avatar image
    location: 'India',
  });

  const [formData, setFormData] = useState({ ...user });

  const handleEdit = () => setEditing(true);
  const handleCancel = () => {
    setEditing(false);
    setFormData(user);
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'avatar') {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData(prev => ({ ...prev, avatar: reader.result }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    setUser({ ...formData });
    setEditing(false);
  };

  return (
    <div className="account-container">
      <h2 className="account-title">Account Settings</h2>
      <div className="profile-card">
        <div className="avatar-section">
          <img
            src={formData.avatar || ''}
            alt="avatar"
            className="avatar"
          />
          {editing && (
            <input
              type="file"
              accept="assets/avatar.jpg, image/*"
              className="avatar-input"
              name="avatar"
              onChange={handleChange}
            />
          )}
        </div>

        <div className="profile-details">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={!editing}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={!editing}
            />
          </div>
          <div className="field">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={!editing}
            />
          </div>
          <div className="field">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              disabled={!editing}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              value=""
              disabled
            />
            <small className="disabled-text">Password cannot be added as it is just for practice and can be made in furture.</small>
          </div>

          <div className="button-group">
            {editing ? (
              <>
                <button className="save-btn" onClick={handleSave}>Save</button>
                <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
              </>
            ) : (
              <button className="edit-btn" onClick={handleEdit}>Edit</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
