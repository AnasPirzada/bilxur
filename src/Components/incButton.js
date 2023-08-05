import React, { useState } from 'react';

function IncButton() {
  let [num, setNum] = useState(1);
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };

  let decNum = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };

  let handleChange = e => {
    setNum(e.target.value);
  };

  return (
    <>
      <div className='col-xl-1'></div>
      <div
        className='input-group shadow'
        style={{
          borderRadius: '22px',
          border: 'transparent',
          marginLeft: '-15%',
          width: '90%',
          height: '100%',
        }}
      >
        <div className='input-group-prepend'>
          <button
            className='btn btn-outline-primary qtybtn'
            type='button'
            onClick={decNum}
            style={{}}
          >
            <span style={{ marginRight: '100px' }}>Qty</span>-
          </button>
        </div>
        <input
          type='text'
          className='form-control custom-input-width'
          value={num}
          onChange={handleChange}
          style={{
            textAlign: 'center',
            width: '-10px',
            // border: 'transparent',
            marginTop: '12px',
          }}
        />
        <div className='input-group-prepend'>
          <button
            className='btn btn-outline-primary'
            type='button'
            onClick={incNum}
            style={{ borderRadius: '22px' }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default IncButton;
