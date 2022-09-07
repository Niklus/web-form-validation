const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  alert(JSON.stringify({ name, email, message }, null, 3));

  form.reset();
});
