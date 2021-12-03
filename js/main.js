
const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
  console.log('click')//simplemente para que escriba cilck en consola.
  document.getElementById('sidebar').classList.toggle('active');//agrega la clase si no la tiene o si ya la tiene.
  console.log(document.getElementById('sidebar'))
});
