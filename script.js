// Массив объектов пользователей
const users = [
    {
        name: "Марго",
        surname: "Робби",
        age: 33,
        email: "margo_barbi@yandex.ru"
    },
    {
        name: "Райан",
        surname: "Гослинг",
        age: 42,
        email: "gosling@rambler.ru"
    },
    {
        name: "Дуа",
        surname: "Липа",
        age: 28,
        email: "DuaLipa@gmail.com"
    },
    {
        name: "Хелен",
        surname: "Миррен",
        age: 78,
        email: "mirren1945@yandex.ru"
    },
    {
        name: "Кристофер",
        surname: "Нолан",
        age: 53,
        email: "nolanStar@yandex.ru"
    },
    {
        name: "Киллиан",
        surname: "Мерфи",
        age: 47,
        email: "murphy@gmail.com"
    },
    {
        name: "Флоренс",
        surname: "Пью",
        age: 27,
        email: "Pugh@rambler.ru"
    },
    {
        name: "Эмили",
        surname: "Блант",
        age: 40,
        email: "EmilyBlunt@rambler.ru"
    },
];

// Функция для отображения пользователей
function displayUsers(userArray) {
    //Получаем элемент, в котором будет отображаться список пользователей
    const userList = document.getElementById("user-list");
    // Очищаем список перед отображением новых данных
    userList.innerHTML = "";

    //Для каждого элемента массива
    userArray.forEach(user => {
        //Создаём новый элемент списка
        const listItem = document.createElement("li");
        //Формируем текстовое содержимое элемента на основе данных пользователя
        listItem.textContent = `${user.name} ${user.surname} (${user.age})`;
        //Добавляем элемент в конец списка
        userList.appendChild(listItem);
    });
}

// Функция для фильтрации пользователей по возрасту
function filterUsers(minAge, maxAge) {

    //Если нижняя граница возраста не задана
    if (isNaN(minAge)){
        minAge = 0;
    }

    //Если верхняя граница возраста не задана
    if (isNaN(maxAge)){
        maxAge = 200;
    }

    //Создание массива с пользователями, чей возраст лежит в указаном диапазоне
    const filteredUsers = users.filter(user => user.age >= minAge && user.age <= maxAge);
    //Отображение списка отфильтрованных пользователей
    displayUsers(filteredUsers);
}

//Получаем элемент с кнопкой фильтрации
const filterButton = document.getElementById("filter-button");

// Обработчик события для кнопки "Применить фильтр"
filterButton.addEventListener("click", () => {
    //Получаем значение элемента минимального возраста и переводим его в число 
    const minAge = parseInt(document.getElementById("min-age").value);
    //Получаем значение элемента максимального возраста и переводим его в число 
    const maxAge = parseInt(document.getElementById("max-age").value);

    //Если значения полей возраста не пустые
    if (!isNaN(minAge) || !isNaN(maxAge)) {
        //Фильтруем список пользователей
        filterUsers(minAge, maxAge);
    }
});

// Инициализация списка пользователей при загрузке страницы
displayUsers(users);