// Input elements
const dayInp = document.getElementById('day');
const monthInp = document.getElementById('month');
const yearInp = document.getElementById('year');

// Output elements
const dayOpt = document.getElementById('DD');
const monthOpt = document.getElementById('MM');
const yearOpt = document.getElementById('YY');

// Form element
const form = document.querySelector('form');

// Adding the submit event listener to form
form.addEventListener('submit', handleSubmit);

const date = new Date();
const day = date.getDate();
const month = 1 + date.getMonth();
const year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validateInput(input, errorMessage) {
  const parent = input.parentElement;
  if (!input.value) {
    input.style.borderColor = 'red';
    parent.querySelector('small').innerText = errorMessage;
    return false;
  } else {
    input.style.borderColor = 'black';
    parent.querySelector('small').innerText = '';
    return true;
  }
}

function validate() {
  const inputs = document.querySelectorAll('input');
  let validator = true;

  inputs.forEach(input => {
    if (!validateInput(input, 'Campo requerido.')) {
      validator = false;
    } else if (input === monthInp && input.value > 12) {
      input.style.borderColor = 'red';
      input.parentElement.querySelector('small').innerText = 'Número inválido.';
      validator = false;
    } else if (input === dayInp && input.value > 31) {
      input.style.borderColor = 'red';
      input.parentElement.querySelector('small').innerText = 'Número inválido.';
      validator = false;
    }
  });

  return validator;
}

function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    let d = day - dayInp.value;
    let m = month - monthInp.value;
    let y = year - yearInp.value;

    if (dayInp.value > day) {
      d = day + months[month - 1] - dayInp.value;
      m = month - monthInp.value - 1;
    }

    if (monthInp.value > month) {
      m = month + 12 - monthInp.value;
      y = year - yearInp.value - 1;
    }

    dayOpt.innerHTML = d;
    monthOpt.innerHTML = m;
    yearOpt.innerHTML = y;
  }
}
