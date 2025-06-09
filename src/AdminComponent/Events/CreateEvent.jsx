import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateEvent = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event Created:', formData);
    // You could send this to backend here...

    // Navigate to event list page
    navigate('/events');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Create New Event</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
        <input type="text" name="title" placeholder="Event Title" onChange={handleChange} value={formData.title} required />
        <input type="date" name="date" onChange={handleChange} value={formData.date} required />
        <textarea name="description" placeholder="Event Description" onChange={handleChange} value={formData.description} />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
