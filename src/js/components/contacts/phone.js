import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

export const usePhone = () => {
  const input = document.querySelector('#phone');
  const button = document.querySelector('#btn');
  const errorMsg = document.querySelector('#error-msg');
  const validMsg = document.querySelector('#valid-msg');

  const errorMap = [
    'Invalid number',
    'Invalid country code',
    'Too short',
    'Too long',
    'Invalid number',
  ];

  const iti = intlTelInput(input, {
    initialCountry: 'auto',
    geoIpLookup: (callback) => {
      fetch('https://ipapi.co/json')
        .then((res) => res.json())
        .then((data) => callback(data.country_code))
        .catch(() => callback('us'));
    },
    utilsScript:
      'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
  });

  const reset = () => {
    input.classList.remove('error');
    errorMsg.innerHTML = '';
    errorMsg.classList.add('hide');
    validMsg.classList.add('hide');
  };

  const showError = (msg) => {
    input.classList.add('error');
    errorMsg.innerHTML = msg;
    errorMsg.classList.remove('hide');
  };

  // on click button: validate
  button.addEventListener('click', () => {
    reset();
    if (!input.value.trim()) {
      showError('Required');
    } else if (iti.isValidNumberPrecise()) {
      validMsg.classList.remove('hide');
    } else {
      const errorCode = iti.getValidationError();
      const msg = errorMap[errorCode] || 'Invalid number';
      showError(msg);
    }
  });

  // on keyup / change flag: reset
  input.addEventListener('change', reset);
  input.addEventListener('keyup', reset);
};
