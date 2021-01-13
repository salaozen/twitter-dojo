
document.querySelector('.entrada button').addEventListener('click', function() {
    const texto = document.querySelector('.entrada textarea').value;

    if (texto.length == 0) {
        return;
    }

    const imagem = document.createElement('img');
    imagem.setAttribute('src', 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png');

    const usuario = document.createElement('p');
    usuario.setAttribute('class', 'usuario');
    usuario.textContent = '@usuario';

    const mensagem = document.createElement('p');
    mensagem.setAttribute('class', 'mensagem');
    mensagem.textContent = texto;

    const data = document.createElement('p');
    data.setAttribute('class', 'data');
    data.textContent = getDate();

    const tweet = document.createElement('li');
    tweet.setAttribute('class', 'tweet');
    tweet.appendChild(imagem);
    tweet.appendChild(usuario);
    tweet.appendChild(mensagem);
    tweet.appendChild(data);

    document.querySelector('.entrada textarea').value = '';

    document.querySelector('.tweets').appendChild(tweet);
});

function getDate() {
    const date = new Date();
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
}