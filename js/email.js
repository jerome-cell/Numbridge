const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Plese Wait...';

   const serviceID = 'service_kseoo7t';
   const templateID = 'template_bofvxms';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        alert('Registration successful!');
        window.location.href = 'register-2.html';
    }, (err) => {
      btn.value = 'continue';
      alert(JSON.stringify(err));
    });
});
