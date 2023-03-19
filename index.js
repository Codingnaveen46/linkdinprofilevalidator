const validateButton = document.getElementById('validate-button');
const inputUrl = document.getElementById('input-url');
const outputMessage = document.getElementById('output-message');

function validateUrl(url) {
  const regex = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  return regex.test(url);
}

validateButton.addEventListener('click', function() {
  const url = inputUrl.value;
  if (validateUrl(url)) {
    outputMessage.textContent = 'Valid LinkedIn profile URL';
    outputMessage.style.color = '#0077B5';
  } else {
    outputMessage.textContent = 'Invalid LinkedIn profile URL';
    outputMessage.style.color = '#FF0000';
  }
});
