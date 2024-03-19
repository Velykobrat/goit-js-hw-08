function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');
const input = document.querySelector('input');

function createBoxes(amount) {
  boxesContainer.innerHTML = ''; // Очищення контейнера перед створенням нових елементів
  const boxes = [];

  for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      const size = 30 + i * 10;

      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.style.marginBottom = '10px';

      boxes.push(box);
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = ''; // Очищення контейнера
}

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = ''; // Очищення значення в input
  } else {
      alert('Please enter a number between 1 and 100.');
  }
});

destroyBtn.addEventListener('click', destroyBoxes);