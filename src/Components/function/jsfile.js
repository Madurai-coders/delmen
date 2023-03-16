const form = document.getElementById('contact-form');
const messageContainer = document.getElementById('message-container');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  fetch('/send-email', {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(result => {
    if (result === 'success') {
      messageContainer.innerHTML = 'Your message has been sent.';
    } else {
      messageContainer.innerHTML = 'There was an error sending your message.';
    }
  });
});