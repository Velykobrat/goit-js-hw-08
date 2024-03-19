const loginForm = document.querySelector('.login-form');

        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Зупиняємо перезавантаження сторінки при відправці форми

            const emailInput = this.elements.email;
            const passwordInput = this.elements.password;

            // Перевірка на пусті поля
            if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
                alert('All form fields must be filled in');
                return; // Зупиняємо відправку форми, якщо поля не заповнені
            }

            // Отримуємо значення полів та очищаємо їх від пробілів по краях
            const formData = {
                email: emailInput.value.trim(),
                password: passwordInput.value.trim()
            };

            // Виводимо об'єкт із введеними даними в консоль
            console.log(formData);

            // Очищаємо значення полів форми
            this.reset();
        });
