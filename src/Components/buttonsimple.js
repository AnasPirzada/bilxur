import React from 'react';

export const buttonsimple = props => {
  return (
    <>
      <button
        className=' mt-4 mb-4 shadow'
        style={{
          marginLeft: '30px',
          backgroundColor: '#ffff',
          color: '#000',
          borderRadius: '18px',
          height: '34px',
          width: '100%',
          border: 'Transparent',
        }}
      >
        {props.name}
      </button>
    </>
  );
};
export default buttonsimple;
