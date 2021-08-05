// ATIVIDADE 1
// Exercício 1
let btnMore = document.querySelector('#more');
let post = document.querySelector('.card');
let content = document.querySelector('.content');
btnMore.addEventListener('click', () => {
    // cria um clone das estruturas HTML de um post (.cloneNode)
    let newPost = post.cloneNode(true);
    // insere um elemento antes de um elemento pré-existente
    content.insertBefore(newPost, btnMore);
})
// Exercício 2
const toggleHeart = (elemento) => {
    let heart = elemento;
    console.log(heart.src);
    // .includes verifica se existe esse "texto" dentro da string
    if (heart.src.includes('/img/icons/heart.svg')) {
        heart.src = 'img/red-heart.png';
    } else {
        heart.src = '/img/icons/heart.svg'
    }
};
// Exercício 3
let search = document.querySelector('.search');
search.addEventListener('mouseover', (event) => {
    event.target.style.boxShadow = '0px 1px 3px black'
})
// Exercício 4
