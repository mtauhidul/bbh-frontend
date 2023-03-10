import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as React from 'react';
import { useData } from '../../state/data';

function BatchSelect() {
  const { state, setData } = useData();
  const [batch, setBatch] = React.useState(
    sessionStorage.getItem('batch') || state.batch || ''
  );
  const [phoneNumber, setPhoneNumber] = React.useState(
    sessionStorage.getItem('phoneNumber') || state.phoneNumber || ''
  );

  const handleBatchChange = (event) => {
    const selectedBatch = event.target.value;
    setBatch(selectedBatch);
  };

  const handlePhoneNumberChange = (event) => {
    const selectedPhoneNumber = event.target.value;
    setPhoneNumber(selectedPhoneNumber);
  };

  const batches = Array.from({ length: 21 }, (_, i) => i + 31);

  React.useEffect(() => {
    setData({
      batch,
      phoneNumber,
    });
    sessionStorage.setItem('batch', batch);
    sessionStorage.setItem('phoneNumber', phoneNumber);
  }, [batch, phoneNumber]);

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
          id='batch-select-label'>
          Batch
        </InputLabel>
        <Select
          sx={{
            color: '#D1D0D2',
            '& .MuiSelect-select': {
              backgroundColor: '#34373B',
            },
          }}
          labelId='batch-select-label'
          id='batch-select'
          value={batch}
          label='Batch'
          required
          onChange={handleBatchChange}>
          {batches.map((batchNumber) => (
            <MenuItem key={batchNumber} value={batchNumber}>
              {batchNumber}
            </MenuItem>
          ))}
        </Select>
        <br />
        <TextField
          // field type is number
          type='number'
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          sx={{
            minWidth: '18rem',
            color: '#D1D0D2',
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#34373B',
              color: '#FFFFFF',
            },
            '& .MuiInputLabel-root': {
              color: '#D1D0D2',
            },
          }}
          id='phone-number-input'
          label='Phone Number'
          variant='outlined'
          required
        />
      </FormControl>
    </Box>
  );
}

export default BatchSelect;
