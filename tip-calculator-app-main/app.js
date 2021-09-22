// selector
let finalTipTotal = document.getElementById('final-tip-total');
let finalBillTotal = document.getElementById('final-bill-total');

// initial variables
let radioPer = 0;
let customPer = 0;
let billAmt = 0;
let nPeople = 1;

// reset function
const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', () => {
  clearRp();

  radioPer = 0;
  customPer = 0;
  billAmt = 0;
  nPeople = 1;

  document.getElementById('custom').value = '';
  document.getElementById('bill-amt').value = '';
  document.getElementById('person').value = '';
  document.getElementById('np-error').style.display = 'none';

})

const radioPerEle = document.querySelectorAll('.per');
radioPerEle.forEach(r => {
  r.addEventListener('change', radio)
})

// function to clear radio per
function clearRp() {
  radioPerEle.forEach(r => {
    if (r.checked == true)
      r.checked = false;
  })
}

// main function
function calc(ba, rp, cp, np) {
  ba = parseFloat(ba);
  rp = parseFloat(rp);
  cp = parseFloat(cp);
  np = parseFloat(np);

  let tipAmt;
  if (rp === 0)
    tipAmt = ba * cp / 100;
  else if (cp === 0) {
    tipAmt = ba * rp / 100;
  }

  let tipPerPerson = (tipAmt / np).toFixed(2);

  finalTipTotal.value = '$' + tipPerPerson;

  finalBillTotal.value = '$' + ((ba + tipAmt) / np).toFixed(2);
}

// bill amt function
function bill(val) {
  billAmt = val;
  calc(billAmt, radioPer, customPer, nPeople);
}

// radio grp function
function radio() {
  radioPer = document.querySelector('.per:checked').value;
  customPer = 0;
  document.getElementById('custom').value = '';
  calc(billAmt, radioPer, customPer, nPeople);
}

// custom tip function
function custom(val) {
  clearRp();
  radioPer = 0;
  customPer = val;
  calc(billAmt, radioPer, customPer, nPeople);
}

// no of people function
function people(val) {
  if (val == 0) {
    document.getElementById('np-error').style.display = 'block';
    return;
  }
  else
    document.getElementById('np-error').style.display = 'none';
  nPeople = val;
  calc(billAmt, radioPer, customPer, nPeople);
}