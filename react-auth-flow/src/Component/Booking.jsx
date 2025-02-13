import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    appointmentDate: '',
    appointmentTime: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone || !formData.appointmentDate || !formData.appointmentTime) {
      setError('All fields are required.');
      setSuccessMessage('');
      return;
    }

    setSuccessMessage('Your appointment has been scheduled!');
    setError('');
  };

  return (
    <div>
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
        <input type="date" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} />
        <input type="time" name="appointmentTime" value={formData.appointmentTime} onChange={handleChange} />
        <button type="submit">Schedule Appointment</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default BookingForm;
