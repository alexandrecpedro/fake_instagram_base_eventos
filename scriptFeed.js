window.addEventListener('load', () => {
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
    let busca = document.querySelector('.busca');
    busca.addEventListener('mouseover', () => {
        busca.style.boxShadow = '0px 1px 3px black'
    })
    busca.addEventListener('mouseout', () => {
        busca.style.boxShadow = 'none'
    })
    // Exercício 4
    document.getElementById("more").style.cursor = "pointer";
    const toggleHeart = (elemento) => {
        let heart = elemento;
        // .includes verifica se existe esse "texto" dentro da string
        if (heart.src.includes('/img/icons/heart.svg')) {
            heart.src = 'img/red-heart.png';
            heart.nextElementSibling.innerHTML = '0 like'
        } else {
            heart.src = '/img/icons/heart.svg'
        }
    };   
})