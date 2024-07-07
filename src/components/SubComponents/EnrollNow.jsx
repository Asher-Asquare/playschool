// src/components/EnrollNow.js
import React, { useState } from 'react';
import './EnrollNow.css';

const EnrollNow = () => {
  const [formData, setFormData] = useState({
    childName: '',
    parentName: '',
    email: '',
    phone: '',
    age: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add logic to send this data to your server
  };

  return (
    <section className="enroll-now">
      <h1 className="heading">Enroll <span>Now</span></h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="childName">Child's Name</label>
          <input
            type="text"
            id="childName"
            name="childName"
            value={formData.childName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="parentName">Parent's Name</label>
          <input
            type="text"
            id="parentName"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Child's Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    </section>
  );
};

export default EnrollNow;
