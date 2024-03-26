document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);

    var mensagemElement = document.getElementById('mensagem');
    mensagemElement.style.display = 'block';

    if (campoB > campoA) {
        mensagemElement.textContent = 'Formulário válido!';
        mensagemElement.classList.remove('negative');
        mensagemElement.classList.add('positive');
    } else {
        mensagemElement.textContent = 'ERRO! O campo B tem que ser maior que o campo A.';
        mensagemElement.classList.remove('positive');
        mensagemElement.classList.add('negative');
    }
});