 
 // Открытие модального окна при нажатии на "Найти напарника"
    document.getElementById('find-partner').addEventListener('click', function() {
        document.getElementById('partner-modal').style.display = 'block';
    });

    // Закрытие модального окна при нажатии на крестик
    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('partner-modal').style.display = 'none';
		 document.getElementById('Form1').reset(); // Очищение полей формы
    });

	
 // Закрытие модального окна при клике за его пределами
    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('partner-modal')) {
            document.getElementById('partner-modal').style.display = 'none';
					 document.getElementById('Form1').reset(); // Очищение полей формы
        }
    });
	

 // Открытие модального окна при нажатии на "Найти напарника"
    document.getElementById('find-partner1').addEventListener('click', function() {
        document.getElementById('partner-modal').style.display = 'block';
    });


  // Проверка правильности заполнения и активации кнопки
    const fields = document.querySelectorAll('#Form1 input, #Form1 textarea');
    const submitButton = document.getElementById('submit');
    const emailErrorNotification = document.getElementById('emailErrorNotification');
    const emailField = document.getElementById('email');

    fields.forEach((field) => {
        field.addEventListener('input', () => {
            let allValid = true;
			
	// Проверка правильности заполнения и паттерна
            fields.forEach((f) => {
                if (f.validity.valueMissing || f.validity.patternMismatch) {
                    allValid = false;
                }
            });

            submitButton.disabled = !allValid;

            if (emailField.validity.patternMismatch) {
                emailErrorNotification.style.display = 'block';
                emailErrorNotification.style.top = emailField.offsetTop + emailField.offsetHeight + 'px';
                emailErrorNotification.style.left = emailField.offsetLeft + 'px';
            } else {
                emailErrorNotification.style.display = 'none';
            }
        });
    });
	
	document.getElementById('submit').addEventListener('click', function() {
    const emailField = document.getElementById('email');
    const emailErrorNotification = document.getElementById('emailErrorNotification');

    // Проверяем правильность ввода email перед отправкой формы
    if (!emailField.checkValidity()) {
        emailErrorNotification.style.display = 'block';
        emailErrorNotification.style.top = emailField.offsetTop + emailField.offsetHeight + 'px';
        emailErrorNotification.style.left = emailField.offsetLeft + 'px';
        return; // Прерываем отправку формы, если email неправильный
    }
	
	        if (!submitButton.disabled) { // Проверка, что кнопка не заблокирована
        document.getElementById('partner-modal').style.display = 'none';
        document.getElementById('Form1').reset(); // Очищение полей формы
	
	   // Показать уведомление на 3 секунды
        const notification = document.getElementById('successNotification');
        notification.style.display = 'block';
        setTimeout(function() {
            notification.style.display = 'none';
        }, 2000);
    }
	});
	
		   // Моб меню 
function toggleMobileMenu() {
    const menu = document.querySelector('.mobile-menu');
    const isMenuVisible = menu.style.display !== 'none' && menu.style.display !== '';

    if (isMenuVisible) {
        menu.style.display = 'none'; // Скрыть меню при клике на крестик или в пустое пространство
    } else {
        menu.style.display = 'flex'; // Показать меню при клике на гамбургер
    }
}

		// Для страницы КУРСЫ
	

	    function toggleFavorite(button) {
        const isYellow = button.style.color === 'yellow'; // Проверяем, отмечена ли звездочка
        button.style.color = isYellow ? 'black' : 'yellow'; // Меняем цвет при нажатии
    }
	
   function searchCards() {
        const searchInput = document.getElementById("search-input").value.toLowerCase(); // Получаем поисковый запрос
        const cards = document.querySelectorAll(".card"); // Получаем все карточки
        const notFoundTitle = document.getElementById("not-found-title"); // Заголовок "Такое не было найдено"
        let visibleCardCount = 0; // Считаем количество видимых карточек
    
        cards.forEach(card => {
            const title = card.querySelector(".card-title").innerText.toLowerCase(); // Заголовок карточки
			const text = card.querySelector(".card-text").innerText.toLowerCase(); // Текст карточки
            const isMatch = title.includes(searchInput) || text.includes(searchInput); // Проверяем соответствие
    
            if (isMatch) {
                card.style.display = "block"; // Показываем карточку
                visibleCardCount++; // Увеличиваем количество видимых карточек
            } else {
                card.style.display = "none"; // Скрываем карточку
            }
        });
    
        notFoundTitle.style.display = (visibleCardCount === 0) ? "block" : "none"; // Показываем заголовок, если нет видимых карточек
    }
	
	// Добавляем обработчик события keydown для элемента ввода
const searchInput = document.getElementById("search-input");

// Добавляем функцию, которая срабатывает при нажатии клавиши
searchInput.addEventListener("keydown", function(event) {
    // Проверяем, была ли нажата клавиша "Enter" (код 13)
    if (event.key === "Enter") {
        event.preventDefault(); // Предотвращаем выполнение стандартного действия (например, отправка формы)
        searchCards(); // Запускаем вашу функцию поиска
    }
});

	
