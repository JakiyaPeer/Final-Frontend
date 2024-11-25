import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TutorCard from '../components/TutorCard';

const BrowseTutors = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    const fetchTutors = async () => {
      const res = await axios.get('http://localhost:5000/api/tutors');
      setTutors(res.data);
    };
    fetchTutors();
  }, []);

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Browse Tutors</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tutors.map((tutor) => (
          <TutorCard key={tutor._id} tutor={tutor} />
        ))}
      </div>
    </div>
  );
};

export default BrowseTutors;
