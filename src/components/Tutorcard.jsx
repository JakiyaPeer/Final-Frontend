import React from 'react';

const TutorCard = ({ tutor }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-xl font-bold">{tutor.name}</h2>
      <p>{tutor.expertise}</p>
      <p>₹{tutor.price} / hour</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Book Lesson</button>
    </div>
  );
};

export default TutorCard;
