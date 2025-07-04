import React from 'react';

function ProfileCard({ name, email, avatarUrl }) {
  return (
    <div style={cardStyle}>
      <img src={avatarUrl} alt={`${name}'s avatar`} style={avatarStyle} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: '20px', textAlign:'center', justifyContent:'center', display:'flex'}}>
      <ProfileCard
        name="Shanmukha"
        email="varma@gmail.com"
        avatarUrl="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_items_boosted&w=740"
      />
    </div>
  );
}

// Simple inline styles
const cardStyle = {
  width: '250px',
  padding: '16px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  borderRadius: '12px',
  textAlign: 'center',
  fontFamily: 'Arial',
  backgroundColor: 'black',
};

const avatarStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  objectFit: 'cover',
  marginBottom: '12px',
};

export default App;
