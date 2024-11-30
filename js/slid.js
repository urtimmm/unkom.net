const slidesContainer = document.querySelector('.slides');
const slidese = document.querySelectorAll('.slide');
const indicatorsContainer = document.querySelector('.indicators');

let currentIndexу = 0;
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;

// Создаем индикаторы
slidese.forEach((_, index) => {
  const indicator = document.createElement('div');
  indicator.classList.add('indicator');
  if (index === 0) indicator.classList.add('active');
  indicator.addEventListener('click', () => goToSlide(index));
  indicatorsContainer.appendChild(indicator);
});

const indicators = document.querySelectorAll('.indicator');

// Функция обновления индикаторов
function updateIndicators() {
  indicators.forEach((indicator, index) => {
    if (index === currentIndexу) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

// Функция обновления позиции
function setSliderPosition() {
  slidesContainer.style.transform = `translateX(${currentTranslate}px)`;
}

// Фиксируем текущую позицию
function setPositionByIndex() {
  currentTranslate = -currentIndexу * slidesContainer.offsetWidth;
  prevTranslate = currentTranslate;
  setSliderPosition();
  updateIndicators(); // Обновляем индикаторы
}

// Перейти к определенному слайду
function goToSlide(index) {
  currentIndexу = index;
  setPositionByIndex();
}

// Обработка начала касания или нажатия
function touchStart(index, event) {
  isDragging = true;
  startPos = getPositionX(event);
  currentIndexу = index;

  animationID = requestAnimationFrame(animation);
  slidesContainer.classList.remove('smooth-transition');
}

// Обработка перемещения
function touchMove(event) {
  if (!isDragging) return;
  const currentPosition = getPositionX(event);
  currentTranslate = prevTranslate + currentPosition - startPos;
}

// Завершение касания или нажатия
function touchEnd() {
  cancelAnimationFrame(animationID);
  isDragging = false;

  const movedBy = currentTranslate - prevTranslate;

  if (movedBy < -100 && currentIndexу < slidese.length - 1) {
    currentIndexу += 1;
  }

  if (movedBy > 100 && currentIndexу > 0) {
    currentIndexу -= 1;
  }

  setPositionByIndex();
}

// Получить позицию X
function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

// Анимация
function animation() {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
}

// События мыши и касания
slidesContainer.addEventListener('touchstart', (e) => touchStart(currentIndexу, e));
slidesContainer.addEventListener('touchend', touchEnd);
slidesContainer.addEventListener('touchmove', touchMove);

slidesContainer.addEventListener('mousedown', (e) => touchStart(currentIndexу, e));
slidesContainer.addEventListener('mouseup', touchEnd);
slidesContainer.addEventListener('mousemove', touchMove);
slidesContainer.addEventListener('mouseleave', touchEnd);

// Обновление позиции при изменении размера окна
window.addEventListener('resize', setPositionByIndex);

// Установить начальное положение
setPositionByIndex();
