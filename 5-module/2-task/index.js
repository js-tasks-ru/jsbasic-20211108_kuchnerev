function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let target = document.getElementById('text');
  button.addEventListener('click', function () {
      target.hidden = !target.hidden;
  });
}
