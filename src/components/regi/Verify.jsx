import SendIcon from '@mui/icons-material/Send';
import { Button, CircularProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { sendOTP, verifyOtp } from '../../services/auth';
import { useData } from '../../state/data';

const Verify = ({ changePhase, handleBack }) => {
  const { state } = useData();
  const phoneNumber = state.phoneNumber;

  const [sent, setSent] = useState(false);

  const [otp, setOtp] = useState('');

  const [vid, setVid] = useState('');

  const [otpRes, setOtpRes] = useState('');

  const [onVerify, setOnVerify] = useState(false);

  const handleOtpInput = (e) => {
    const code = e.target.value;
    setOtp(code);
  };

  const sendOtp = async () => {
    setSent(true);
    const response = await sendOTP(phoneNumber);
    setOtpRes(response);
    setVid(response.verificationId);
  };

  const sendOtpRes = async () => {
    setOnVerify(true);
    const response = await verifyOtp(otpRes, otp);
    console.log(response);
    if (response?.user?.uid) {
      changePhase();
    }
    if (response === false) {
      setOnVerify(false);
      setSent(false);
      setVid('');
      setOtp('');
      setOtpRes('');

      toast.error('Invalid OTP! Try again.');
      handleBack();
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
      <h2 style={{ color: '#AAA9AB' }}>Verification</h2>

      {vid === '' && (
        <Button
          onClick={sendOtp}
          color='success'
          sx={{
            minWidth: '14.2rem',
            height: '55px',
          }}
          variant='contained'
          endIcon={!sent && <SendIcon />}>
          {!sent ? (
            'Send OTP to your phone'
          ) : (
            <CircularProgress
              size={20}
              sx={{
                color: '#FFFFFF',
              }}
            />
          )}
        </Button>
      )}

      {sent && vid !== '' && (
        <TextField
          type='number'
          value={otp}
          onChange={handleOtpInput}
          sx={{
            minWidth: '14.2rem',
            color: '#D1D0D2',
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#34373B',
              color: '#FFFFFF',
            },
            '& .MuiInputLabel-root': {
              color: '#D1D0D2',
            },
          }}
          id='otp-input'
          label='Enter OTP'
          variant='outlined'
          required
        />
      )}
      {sent && vid !== '' && (
        <Button
          onClick={sendOtpRes}
          color='success'
          sx={{
            minWidth: '14.2rem',
            height: '55px',
            marginTop: '1rem',
          }}
          variant='contained'
          endIcon={
            !onVerify ? (
              <SendIcon />
            ) : (
              <CircularProgress color='inherit' size={20} />
            )
          }>
          {!onVerify ? 'Verify' : ''}
        </Button>
      )}
      <div id='recaptcha-container'></div>
    </div>
  );
};

export default Verify;
