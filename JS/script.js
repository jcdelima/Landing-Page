const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // alert('Hello Devs!'); - pop-up
    let nome = document.getElementById('Nome').value
    let email = document.getElementById('E-mail').value
    // console.log(nome, email);
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')

    let carregando = `<p>carregando...</p>`

    let pronto = `<p>Pronto!</p>`

    content.innerHTML = carregando

    setTimeout(() => {
        content.innerHTML = pronto
    }, 1000)

})