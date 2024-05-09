	        // Функция проверки ответа флеш-карточки
        function checkAnswer(button, correctAnswer) {
            const buttons = document.querySelectorAll('.answer-button');
            buttons.forEach((btn) => {
                if (btn !== button) {
                    btn.disabled = true; // Отключаем остальные кнопки
                }
            });

            const resetIcon = document.querySelector('.reset-icon');

            if (button.textContent === correctAnswer) {
                button.classList.add('correct-answer'); // Зеленый для правильного ответа
                resetIcon.classList.remove('active'); // Иконка недоступна
            } else {
                button.classList.add('incorrect-answer'); // Красный для неправильного ответа
                resetIcon.classList.add('active'); // Иконка становится активной
            }
        }

        // Функция сброса
        function resetAnswer() {
            const buttons = document.querySelectorAll('.answer-button');
            buttons.forEach((btn) => {
                btn.disabled = false; // Разблокируем все кнопки
                btn.classList.remove('correct-answer', 'incorrect-answer'); 
            });

            const resetIcon = document.querySelector('.reset-icon');
            resetIcon.classList.remove('active'); // Убираем активность
        }

        // Функция для переключения на следующий вопрос
        function nextQuestion() {
            currentQuestionIndex += 1; // Переход к следующему вопросу

            if (currentQuestionIndex >= questions.length) {
                alert('Вопросы закончились'); // Если больше нет вопросов
                return;
            }

            const questionData = questions[currentQuestionIndex];
            const question = document.querySelector('.question-card > p'); 
            question.textContent = questionData.text;

            const buttons = document.querySelectorAll('.answer-button');
            questionData.options.forEach((option, index) => {
                buttons[index].textContent = option;
                buttons[index].onclick = () => checkAnswer(buttons[index], questionData.correct);
            });

            resetAnswer(); // Сбрасываем состояние кнопок
        }

    function toggleFavorite(button) {
        const isYellow = button.style.color === 'yellow'; // Проверяем, отмечена ли звездочка
        button.style.color = isYellow ? 'black' : 'yellow'; // Меняем цвет при нажатии
    }
	
   function searchCards() {
        const searchInput = document.getElementById("search-input").value.toLowerCase(); // Получаем поисковый запрос
        const cards = document.querySelectorAll(".card"); // Получаем все карточки
        const notFoundTitle = document.getElementById("not-found-name"); // Заголовок "Такое не было найдено"
        let visibleCardCount = 0; // Считаем количество видимых карточек
    
        cards.forEach(card => {
            const title = card.querySelector(".card-name").innerText.toLowerCase(); // Заголовок карточки
            const isMatch = title.includes(searchInput) ; // Проверяем соответствие
    
            if (isMatch) {
                card.style.display = "block"; // Показываем карточку
                visibleCardCount++; // Увеличиваем количество видимых карточек
            } else {
                card.style.display = "none"; // Скрываем карточку
            }
        });
    
        notFoundTitle.style.display = (visibleCardCount === 0) ? "block" : "none"; // Показываем заголовок, если нет видимых карточек
    }

