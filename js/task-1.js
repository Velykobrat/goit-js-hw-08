// Отримуємо список категорій
const categoriesList = document.getElementById('categories');

// Отримуємо всі елементи категорій
const categoriesItems = categoriesList.querySelectorAll('.item');

// Пораховуємо кількість категорій
const categoriesCount = categoriesItems.length;
console.log(`Кількість категорій: ${categoriesCount}`);

// Ітеруємося по кожному елементу категорії
categoriesItems.forEach(item => {
    // Отримуємо текст заголовка елемента
    const title = item.querySelector('h2').textContent;
    // Отримуємо кількість елементів у категорії
    const elementsCount = item.querySelectorAll('li').length;
    // Виводимо інформацію у консоль
    console.log(`Категорія: ${title}`);
    console.log(`Кількість елементів у категорії: ${elementsCount}`);
});
