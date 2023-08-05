import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [size, setSize] = React.useState('');

  const handleChange = event => {
    setSize(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 80 }}>
      <FormControl
        fullWidth
        className='shadow'
        style={{ borderRadius: '22px', width: '80%' }}
      >
        <InputLabel id='demo-simple-select-label'>Size</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={size}
          label='Size'
          onChange={handleChange}
          sx={{
            '& .MuiSelect-root:hover': {
              backgroundColor: '#fff',
              borderRadius: '22px',
            },
            '& .MuiSelect-root.Mui-focused': {
              backgroundColor: '#fff',
              borderRadius: '22px',
            },
            '& .MuiSelect-root.Mui-active': {
              backgroundColor: '#fff',
              borderRadius: '22px',
              borderColor: '#fff',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#fff',
              borderRadius: '22px',
            },
            '& .MuiInputLabel-outlined': {
              color: '#000',
            },
          }}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
