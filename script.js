const radios = document.querySelectorAll('input[type="radio"]');

radios.forEach(radio => {
  radio.addEventListener('change', function() {
    if (this.value === 'claro') {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = 'black';
    } else if (this.value === 'oscuro') {
      document.body.style.backgroundColor = '#333333';
      document.body.style.color = 'white';
    }
  });
});
