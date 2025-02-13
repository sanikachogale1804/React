import React from 'react'
import './ContactCard.css'; 
function ContactCard({ name, email, phone, address }) {
  return (
    <div className="contact-card">
      <h2 className="contact-name">{name}</h2>
      <p className="contact-email"><strong>Email:</strong> {email}</p>
      <p className="contact-phone"><strong>Phone:</strong> {phone}</p>
      <p className="contact-address"><strong>Address:</strong> {address}</p>
    </div>
  )
}

export default ContactCard
