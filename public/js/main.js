document.getElementById('clientForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const milestones = document.getElementById('milestones').value;

  fetch('/api/clients', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: name, milestones: milestones }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      messageElement.classList.add('success-message'); 
      document.getElementById('clientForm').reset();
    })
    .catch((error) => {
      console.error('Error:', error);
      messageElement.classList.add('error-message'); 
    });
});

function displaySuccessMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  messageElement.style.color = 'green';
  document.body.appendChild(messageElement);
  setTimeout(() => messageElement.remove(), 5000); // Remove the message after 5 seconds
}

function displayErrorMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  messageElement.style.color = 'red';
  document.body.appendChild(messageElement);
  setTimeout(() => messageElement.remove(), 5000); // Remove the message after 5 seconds
}
