import React from 'react';
import axios from 'axios';

const Payment = ({ amount }) => {
  const handlePayment = async () => {
    const { data } = await axios.post('http://localhost:5000/api/payment/order', { amount });
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: 'LMS Payment',
      description: 'Lesson Payment',
      order_id: data.id,
      handler: (response) => {
        alert('Payment successful!');
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return <button onClick={handlePayment} className="bg-green-500 text-white px-4 py-2 rounded">Pay Now</button>;
};

export default Payment;
