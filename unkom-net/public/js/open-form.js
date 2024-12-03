         // Функция для открытия и закрытия формы
         function toggleForm() {
            var form = document.getElementById("form-container");
            var blurBackground = document.getElementById("background-blur");
            var body = document.body;
    
            // Переключаем класс 'show' для формы и фона
            form.classList.toggle("show");
            blurBackground.classList.toggle("show");
            body.classList.toggle("no-scroll"); // Добавляем/удаляем класс для блокировки прокрутки
            document.getElementById("background-blur").addEventListener("click", toggleForm);

        }
    
        // Открытие формы по кнопке
        document.getElementById("openFormBtn").addEventListener("click", function() {
            var form = document.getElementById("form-container");
            var blurBackground = document.getElementById("background-blur");
            
            var body = document.body;
    
            // Показываем форму и фон
            form.classList.add("show");
            blurBackground.classList.add("show");
            body.classList.add("no-scroll");
        });