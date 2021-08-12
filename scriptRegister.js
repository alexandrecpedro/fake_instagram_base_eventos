window.addEventListener('load', () => {
    // ATIVIDADE 2 - Validando o preenchimento obrigatório

    // Exercício 2
    let formUser = document.querySelector('.form-auth input[name="username"]');
    formUser.insertAdjacentHTML('beforebegin', '<input type="date" name="dataNascimento">')

    // Exercícios 1
    let form = document.querySelector('.form-auth');
    let inputs = document.querySelectorAll('.form-auth input');
    let errorMsg = document.querySelector('.erro');

    form.addEventListener('submit', (event) => {
        // Pausa o envio do formulário
        event.preventDefault();
        let error = 0;
        for (const input of inputs) {
            if (input.value == "") {
                error++;
            }
        }
        
        // Exercício 3
        if (error > 0) {
            // exibe mensagem de erro
            errorMsg.innerText = 'Ops! Tem algum campo vazio';
            errorMsg.style.color = '#a50000';
        } else {
            form.submit();
        }
    })

    // ATIVIDADE 3 - Quantidade de Caracteres
    let form = document.querySelector('.form-auth');
    let inputs = document.querySelectorAll('.form-auth input');
    let errorMsg = document.querySelector('.erro');

    let name = document.getElementsByClassName('name');
    let surname = document.getElementsByClassName('surname');
    let birthday = document.getElementsByClassName('datanasc');
    let email = document.getElementsByClassName('email');
    let password = document.getElementsByClassName('password');
    let username = document.getElementsByClassName('username');

    form.addEventListener('submit', (event) => {
        // Pausa o envio do formulário
        event.preventDefault();
        let error = 0;
        for (const input of inputs) {
            if ((input.value == "") || (name.value.length < 2 && name.value.length > 80) || (surname.value.length < 2 || surname.value.length > 100) || (birthday.value < 16 || birthday.value > 120) || (email.value.length < 10 || email.value.length > 180) || (password.value.length < 8 || password.value.length > 100) || (username.value.length < 10 || username.value.length > 15)) {
                error++;
            }
        }
        if (error > 0) {
            // exibe mensagem de erro
            errorMsg.innerText = 'Ops! Tem algum campo vazio';
            errorMsg.style.color = '#a50000';
        } else {
            form.submit();
        }
    })
})