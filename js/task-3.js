        const nameInput = document.getElementById('name-input');
        const nameOutput = document.getElementById('name-output');

        nameInput.addEventListener('input', () => {
            const trimmedValue = nameInput.value.trim(); // Видаляємо пробіли з початку та кінця

            if (trimmedValue === '') {
                nameOutput.textContent = 'Anonymous'; // Якщо інпут порожній або містить лише пробіли
            } else {
                nameOutput.textContent = trimmedValue; // Встановлюємо значення з інпута у спан
            }
        });