import { Button } from '@mui/material';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { addData, getData } from '../../services/api';
import { useData } from '../../state/data';

const Payment = () => {
  const { state } = useData();
  const [success, setSuccess] = useState(false);
  const [id, setId] = useState('');

  const submitData = async () => {
    const submissionData = state;
    submissionData.paymentStatus = 'pending';
    submissionData.collection_status = 'pending';
    const res = await addData(submissionData);
    if (res === undefined) {
      const collectedId = await getData(state.phoneNumber);
      setId(collectedId);

      if (collectedId) {
        setSuccess(true);
        toast.success('Registration successful');
        sessionStorage.clear();
      } else {
        toast.error('Registration failed! Please try again.');
      }
    } else {
      toast.error('Registration failed! Please try again.');
    }
  };

  return (
    <div>
      {!success && (
        <h2
          style={{
            color: '#AAA9AB',
          }}>
          Final submission
        </h2>
      )}
      {!success && (
        <Button
          sx={{
            width: '100%',
            height: '50px',
            fontSize: '1.2rem',
          }}
          color='success'
          variant='contained'
          onClick={submitData}>
          Submit
        </Button>
      )}
      {success && (
        <h2
          style={{
            color: '#AAA9AB',
          }}>
          Thanks for registration 👏
        </h2>
      )}
      <br />
      {success && (
        <h2>
          Your registration ID is:{' '}
          <span style={{ color: 'green' }}>{id.slice(0, 8)}</span>
        </h2>
      )}
    </div>
  );
};

export default Payment;
