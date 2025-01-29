// Смена языка
function changeLanguage(lang) {
    const elements = {
        'pt': {
            'bio': "Autora desde 2019. Ex-membro da comunidade de escritores da CEI. Publicações anteriores no Litres.",
            'about-text': "Olá, sou Di Curzi, escritora apaixonada desde 2019. Participei da comunidade de autores dos países da CEI e publiquei no Litres. Atualmente, continuo escrevendo e compartilhando minhas histórias."
        },
        'ua': {
            'bio': "Автор з 2019 року. Колишній учасник спільноти письменників СНД. Попередні публікації на Літресі.",
            'about-text': "Привіт, я Di Curzi, письменниця з 2019 року. Я брала участь у спільноті авторів країн СНД і публікувалася на Літресі. Зараз продовжую писати і ділитися своїми історіями."
        }
    };

    document.getElementById('bio').textContent = elements[lang]['bio'];
    document.getElementById('about-text').textContent = elements[lang]['about-text'];
}

// Добавление книги
function addBook() {
    const bookList = document.getElementById('book-list');
    
    let bookTitle = prompt("Digite o título do livro:");
    let bookCover = prompt("Insira o link da imagem da capa:");

    if (bookTitle && bookCover) {
        let bookDiv = document.createElement("div");
        bookDiv.className = "book";
        bookDiv.innerHTML = `<img src="${bookCover}" alt="Capa do Livro">
                             <h3>${bookTitle}</h3>`;
        bookList.appendChild(bookDiv);
    }
}

// Счётчик просмотров
if (localStorage.pageViews) {
    localStorage.pageViews = Number(localStorage.pageViews) + 1;
} else {
    localStorage.pageViews = 1;
}

document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector("footer p");
    footer.textContent += ` | Visualizações: ${localStorage.pageViews}`;
});
