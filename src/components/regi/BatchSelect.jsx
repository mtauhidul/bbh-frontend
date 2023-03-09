import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as React from 'react';

export default function BatchSelect() {
  const [batch, setBatch] = React.useState('');

  const handleChange = (event) => {
    setBatch(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 200 }}>
      <h2
        style={{
          color: '#AAA9AB',
        }}>
        Batch Selection
      </h2>
      <FormControl fullWidth>
        <InputLabel
          sx={{
            color: '#D1D0D2',
          }}
          id='demo-simple-select-label'>
          Batch
        </InputLabel>
        <Select
          sx={{
            color: '#D1D0D2',
            '& .MuiSelect-select': {
              backgroundColor: '#34373B',
            },
          }}
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={batch}
          label='Batch'
          onChange={handleChange}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
