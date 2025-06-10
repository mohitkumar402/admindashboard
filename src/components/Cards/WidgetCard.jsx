import React from 'react';

const WidgetCard = ({ label, value }) => {
  return (
    <div className="card">
      <h3>{label}</h3>
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{value}</p>
    </div>
  );
};

export default WidgetCard;
