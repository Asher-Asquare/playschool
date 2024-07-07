// src/components/SubComponents/Admissions.jsx
import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './Admissions.css';
import logo_pdf from '../../assets/my_logo_short.png';

const Admissions = () => {
  const [formData, setFormData] = useState({
    receiptNumber: '',
    date: '',
    studentName: '',
    studentClass: '',
    admissionNumber: '',
    totalFee: '',
    amountPaid: '',
    remainingFee: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePDF();
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    // Add logo
    doc.addImage(logo_pdf, 'PNG', 10, 10, 50, 20);

    // Add contact details
    doc.setFontSize(10);
    const contactDetails = `Mobile: +1234567890\nEmail: info@truesunshine.com\nWebsite: www.truesunshine.com`;
    const contactDetailsX = pageWidth - 15; // Adjust as necessary
    doc.text(contactDetails, contactDetailsX, 18, { align: 'right' });

    // Add divider
    const dividerY = 30; // Adjust Y position as necessary
    doc.setLineWidth(0.5);
    doc.line(10, dividerY, pageWidth - 10, dividerY);

    // Add receipt number and date
    doc.setFontSize(12);
    doc.text(`Receipt No: ${formData.receiptNumber}`, 10, dividerY + 10);
    doc.text(`Date: ${formData.date}`, pageWidth - 12, dividerY + 10, { align: 'right' });

    // Add "Fee Receipt" button with blue background centered
    const buttonY = dividerY + 15; // Adjust Y position as necessary
    const buttonWidth = 35; // Adjust width as necessary
    const buttonHeight = 10; // Adjust height as necessary
    const buttonX = (pageWidth - buttonWidth) / 2;

    // Draw blue rectangle for button background
    doc.setFillColor(0, 0, 255);
    doc.roundedRect(buttonX, buttonY, buttonWidth, buttonHeight, 3,3,'F');

    // Add "Fee Receipt" text on top of the blue rectangle
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255); // Set text color to white
    doc.text('Fee Receipt', pageWidth / 2, buttonY + buttonHeight - 4, { align: 'center' });

    // Add table
    doc.autoTable({
    startY: buttonY + 15,
    head: [['Field', 'Details']],
    body: [
      ['Student Name', formData.studentName],
      ['Class', formData.studentClass],
      ['Admission Number', formData.admissionNumber],
      ['Total Fee', formData.totalFee],
      ['Amount Paid', formData.amountPaid],
      ['Remaining Fee', formData.remainingFee]
    ]
  });
    doc.save('admission_receipt.pdf');
  };

  return (
    <section className="admissions">
      <h1 className="heading">Admission <span>Form</span></h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="receiptNumber">Receipt Number</label>
          <input
            type="text"
            id="receiptNumber"
            name="receiptNumber"
            value={formData.receiptNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="studentName">Student Name</label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="studentClass">Class</label>
          <input
            type="text"
            id="studentClass"
            name="studentClass"
            value={formData.studentClass}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="admissionNumber">Admission Number</label>
          <input
            type="text"
            id="admissionNumber"
            name="admissionNumber"
            value={formData.admissionNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="totalFee">Total Fee</label>
          <input
            type="number"
            id="totalFee"
            name="totalFee"
            value={formData.totalFee}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amountPaid">Amount Paid</label>
          <input
            type="number"
            id="amountPaid"
            name="amountPaid"
            value={formData.amountPaid}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="remainingFee">Remaining Fee</label>
          <input
            type="number"
            id="remainingFee"
            name="remainingFee"
            value={formData.remainingFee}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    </section>
  );
};

export default Admissions;
