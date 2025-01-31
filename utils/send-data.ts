export function sendEmail(data: { username: string; password: string }) {
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }, // Fix missing header
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log('Response:', response);
      alert(response.message || response.error);
    })
    .catch((err) => {
      console.error('Fetch error:', err);
      alert('Error sending request');
    });
}
