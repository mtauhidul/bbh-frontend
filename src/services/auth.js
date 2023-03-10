import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from './firebase';

const sendOTP = async (phoneNumber, appVerifier) => {
  console.log(phoneNumber);
  const recaptchaVerifier = new RecaptchaVerifier(
    'recaptcha-container',
    { size: 'invisible' },
    auth
  );
  recaptchaVerifier.render();
  return signInWithPhoneNumber(auth, `+88${phoneNumber}`, recaptchaVerifier);
};

const verifyOtp = async (otpRes, otp) =>
  await otpRes
    .confirm(otp)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return false;
    });

export { sendOTP, verifyOtp };
