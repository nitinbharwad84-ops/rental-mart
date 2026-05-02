import React from 'react';

const Placeholder = ({ title }) => (
  <div style={{ padding: '20px' }}>
    <h1 style={{ color: 'var(--dark-blue)' }}>{title}</h1>
    <p style={{ color: 'var(--text-secondary)' }}>This page is under development.</p>
  </div>
);

export default Placeholder;
