const callRequestDialog = document.querySelector('#call-request-dialog');
const callRequestBtn = document.querySelector('#call-request');
const callRequestClose = callRequestDialog.querySelector('#call-request-close');
const callRequestOverlay = callRequestDialog.querySelector('#call-request-overlay');

function handleOpenRequestDialog() {
  callRequestDialog.classList.add('dialog_active');
}

function handleCloseRequestDialog() {
  callRequestDialog.classList.remove('dialog_active');
}

callRequestBtn.addEventListener('click', handleOpenRequestDialog);
callRequestClose.addEventListener('click', handleCloseRequestDialog);
callRequestOverlay.addEventListener('click', handleCloseRequestDialog);
