document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки
    const apartLink = document.querySelector('.page-apart');
    const houseLink = document.querySelector('.house');
    
    // Получаем элементы с тарифами
    const leftSelection = document.getElementById('left-selection');
    const rightSelection = document.getElementById('right-selection');
  
    // Проверка на наличие элементов
    if (!leftSelection || !rightSelection) {
      console.error("Не удалось найти элементы с id 'left-selection' или 'right-selection'");
      return; // Выход из функции, если элементы не найдены
    }
  
    // Содержимое для двух вариантов
    const apartLeftContent = `
      <div class="tariff-descr">
        <div class="left-descr">
          <p class="max">МАКСИМАЛЬНЫЙ</p>
          <p class="prise">600<span class="rub-mes">руб/мес</span></p>
        </div>
        <div class="right-descr">
          <p><span class="nam">100</span> Мбит/с</p>
          <p><span class="nam">195</span> IPTV-канала</p>
        </div>
      </div>
      <div class="inner-centr" id="inner-centr">
        <div class="left"> 
          <p><img src="/icon/galka.png" alt="">Реальный ip</p>
          <p><img src="/icon/galka.png" alt="">Отложеный платеж</p>
          <p><img src="/icon/galka.png" alt="">Онлайн поддержка 24/7</p>
        </div>    
        <div class="right"> 
          <p><img src="/icon/zvezdochka.png" alt="">Подключение 500руб</p> 
        </div> 
      </div>
      <button class="button-left" onclick="toggleForm()">ПОДКЛЮЧИТЬ</button>
    `;
    
    const apartRightContent = `
      <div class="tariff-descr">
        <div class="left-descr">
          <p class="max">КОМФОРТ</p>
          <p class="prise">450<span class="rub-mes">руб/мес</span></p>
        </div>
        <div class="right-descr">
          <p><span class="nam">50</span> Мбит/с</p>
          <p><span class="nam">195</span> IPTV-канала</p>
        </div>
      </div>
            <div class="inner-centr" id="inner-centr">
        <div class="left"> 
          <p><img src="/icon/galka.png" alt="">Реальный ip</p>
          <p><img src="/icon/galka.png" alt="">Отложеный платеж</p>
          <p><img src="/icon/galka.png" alt="">Онлайн поддержка 24/7</p>
        </div>    
        <div class="right"> 
          <p><img src="/icon/zvezdochka.png" alt="">Подключение 500руб</p> 
        </div> 
      </div>
      <button class="button-left" onclick="toggleForm()">ПОДКЛЮЧИТЬ</button>
    `;
  
    const houseLeftContent = `
      <div class="tariff-descr">
        <div class="left-descr">
          <p class="max">ПРЕМИУМ</p>
          <p class="prise">900<span class="rub-mes">руб/мес</span></p>
        </div>
        <div class="right-descr">
          <p><span class="nam">200</span> Мбит/с</p>
          <p><span class="nam">300</span> IPTV-канала</p>
        </div>
      </div>
            <div class="inner-centr" id="inner-centr">
        <div class="left"> 
          <p><img src="/icon/galka.png" alt="">Реальный ip</p>
          <p><img src="/icon/galka.png" alt="">Отложеный платеж</p>
          <p><img src="/icon/galka.png" alt="">Онлайн поддержка 24/7</p>
        </div>    
        <div class="right"> 
          <p><img src="/icon/zvezdochka.png" alt="">Подключение 500руб</p> 
        </div> 
      </div>
      <button class="button-left" onclick="toggleForm()">ПОДКЛЮЧИТЬ</button>
    `;
    
    const houseRightContent = `
      <div class="tariff-descr">
        <div class="left-descr">
          <p class="max">БАЗОВЫЙ</p>
          <p class="prise">300<span class="rub-mes">руб/мес</span></p>
        </div>
        <div class="right-descr">
          <p><span class="nam">30</span> Мбит/с</p>
          <p><span class="nam">100</span> IPTV-канала</p>
        </div>
      </div>
            <div class="inner-centr" id="inner-centr">
        <div class="left"> 
          <p><img src="/icon/galka.png" alt="">Реальный ip</p>
          <p><img src="/icon/galka.png" alt="">Отложеный платеж</p>
          <p><img src="/icon/galka.png" alt="">Онлайн поддержка 24/7</p>
        </div>    
        <div class="right"> 
          <p><img src="/icon/zvezdochka.png" alt="">Подключение 500руб</p> 
        </div> 
      </div>
      <button class="button-left" onclick="toggleForm()">ПОДКЛЮЧИТЬ</button>
    `;
  
    // Функция для переключения контента с анимацией
    function changeContent(leftContent, rightContent) {
      // Прячем текущий контент с анимацией
      leftSelection.classList.add('selection-hidden');
      rightSelection.classList.add('selection-hidden');
  
      setTimeout(() => {
        // Меняем содержимое
        leftSelection.innerHTML = leftContent;
        rightSelection.innerHTML = rightContent;
  
        // Показываем новый контент с анимацией
        leftSelection.classList.remove('selection-hidden');
        rightSelection.classList.remove('selection-hidden');
      }, 500);
    }
  
    // Обработчик для "Многоквартирные дома"
    apartLink.addEventListener('click', function(event) {
      event.preventDefault();
  
      // Переключаем активный класс
      apartLink.classList.add('active');
      houseLink.classList.remove('active');
      
      // Меняем контент
      changeContent(apartLeftContent, apartRightContent);
    });
  
    // Обработчик для "Частный сектор"
    houseLink.addEventListener('click', function(event) {
      event.preventDefault();
  
      // Переключаем активный класс
      houseLink.classList.add('active');
      apartLink.classList.remove('active');
      
      // Меняем контент
      changeContent(houseLeftContent, houseRightContent);
    });
  
    // Изначально активен "Многоквартирные дома"
    apartLink.classList.add('active');
    changeContent(apartLeftContent, apartRightContent);
  });
  