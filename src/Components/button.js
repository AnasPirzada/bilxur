import React from 'react';
export const button = props => {
  return (
    <button
      className=' mt-4 mb-4 shadow'
      style={{
        backgroundColor: '#000000',
        color: '#fff',
        borderRadius: '18px',
        height: '34px',
        width: '100%',
        marginLeft: '15px',
      }}
    >
      {props.name}
    </button>
  );
};
export default button;
