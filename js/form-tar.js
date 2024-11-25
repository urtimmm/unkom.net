// Функция для плавной замены содержимого
function replaceContentSmoothly(container, newContent) {
  // Добавляем класс для анимации исчезновения
  container.classList.add("fade-out");

  // Дожидаемся окончания анимации исчезновения
  setTimeout(() => {
    container.innerHTML = newContent; // Заменяем контент
    container.classList.remove("fade-out");
    container.classList.add("fade-in"); // Добавляем класс для анимации появления

    // Убираем класс появления после завершения анимации
    setTimeout(() => {
      container.classList.remove("fade-in");
    }, 300); // Длительность появления (должна совпадать с transition в CSS)
  }, 300); // Длительность исчезновения (должна совпадать с transition в CSS)
}

// Обработчики для кнопок
document.getElementById("apartBtn").addEventListener("click", function (event) {
  event.preventDefault(); // Отключаем стандартное действие ссылки

  const tariffForm = document.getElementById("tariffForm");
  const newContent = `
    <label class="tariff-option-up" tabindex="0">
      <div class="tariff-content">
        <div class="tariff-title">МАКСИМАЛЬНЫЙ</div>
        <div class="tariff-channels">172 <span>IPTV-канала</span></div>
        <div class="tariff-speed"><span>100</span> Мбит/с <span>600</span>руб/мес </div>
      </div>
    </label>
    <label class="tariff-option-down" tabindex="0">
      <div class="tariff-content">
        <div class="tariff-title">КОМФОРТ</div>
        <div class="tariff-channels">172 <span>IPTV-канала</span></div>
        <div class="tariff-speed"><span>50</span> Мбит/с <span>450</span>руб/мес </div>
      </div>
    </label>
  `;

  replaceContentSmoothly(tariffForm, newContent);
});

document.getElementById("houseBtn").addEventListener("click", function (event) {
  event.preventDefault(); // Отключаем стандартное действие ссылки

  const tariffForm = document.getElementById("tariffForm");
  const newContent = `
    <label class="tariff-option-up-house" tabindex="0">
      <div class="tariff-content">
        <div class="tariff-title">МАКСИМАЛЬНЫЙ</div>
        <div class="tariff-channels">172 <span>IPTV-канала</span></div>
        <div class="tariff-speed"><span>100</span> Мбит/с <span>750</span>руб/мес </div>
      </div>
    </label>
    <label class="tariff-option-down-house" tabindex="0">
      <div class="tariff-content">
        <div class="tariff-title">КОМФОРТ</div>
        <div class="tariff-channels">172 <span>IPTV-канала</span></div>
        <div class="tariff-speed"><span>50</span> Мбит/с <span>550</span>руб/мес </div>
      </div>
    </label>
  `;

  replaceContentSmoothly(tariffForm, newContent);
});
