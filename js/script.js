let suit = ['clubs', 'diamonds', 'hearts', 'spades'];
let picture = ['jack', 'queen', 'king'];
let hCard = ['j', 'q', 'k'];
let table = document.querySelector('.main-table');

for (let i = 2; i <= 10; i++) {
    for (let j = 0; j < suit.length; j++) {
        table.innerHTML += `<div class="card"><div class="card__info"><p>${i}</p><img class="card__suit" src="./assets/${suit[j]}.svg" alt=""></div><div class="card__info"><p>${i}</p><img class="card__suit" src="./assets/${suit[j]}.svg" alt=""></div></div>`;
    }
};

for (let i = 0; i < picture.length; i++) {
    for (let j = 0; j < suit.length; j++) {
        table.innerHTML += `<div class="card card__high"><div class="card__info"><p>${hCard[i].toUpperCase()}</p><img class="card__suit" src="./assets/${suit[j]}.svg" alt=""></div><img src="./assets/${picture[i]}.svg" alt="" class="card__img"><div class="card__info"><p>${hCard[i].toUpperCase()}</p><img class="card__suit" src="./assets/${suit[j]}.svg" alt=""></div></div>`;
    }
};

for (let j = 0; j < suit.length; j++) {
    table.innerHTML += `<div class="card card__high"><div class="card__info"><p>A</p><img class="card__suit" src="./assets/${suit[j]}.svg" alt=""></div><img src="./assets/${suit[j]}.svg" alt="" class="card__img"><div class="card__info"><p>A</p><img class="card__suit" src="./assets/${suit[j]}.svg" alt=""></div></div>`;
};