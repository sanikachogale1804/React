import React from 'react';

const calculateAge = (dob) => {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear(); 
  const month = today.getMonth() - birthDate.getMonth(); 

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

const PersonDetails = ({ personsData }) => {
  return (
    <div>
      <h1>Person Details</h1>
      <ul>
        {personsData.map((person, index) => (
          <li key={index}>
            <p><strong>Name:</strong> {person.name}</p>
            <p><strong>Date of Birth:</strong> {person.dateOfBirth}</p>
            <p><strong>Age:</strong> {calculateAge(person.dateOfBirth)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonDetails;
