document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
      button.addEventListener('click', function (event) {
          event.preventDefault();
          alert('Detalhes do jogo ainda não disponíveis!');
      });
  });
});