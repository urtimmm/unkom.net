const slidesContainer = document.querySelector('.slides');
const slidese = document.querySelectorAll('.slide');

let currentIndexу = 0;
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;
let startX = 0;

// Функция обновления слайда
function setSliderPosition() {
  slidesContainer.style.transform = `translateX(${currentTranslate}px)`;
}

// Функция фиксирования позиции
function setPositionByIndex() {
  currentTranslate = -currentIndexу * slidesContainer.offsetWidth;
  prevTranslate = currentTranslate;
  setSliderPosition();
}

// Событие начала касания или нажатия мыши
function touchStart(index, event) {
  isDragging = true;
  startPos = getPositionX(event);
  currentIndexу = index;

  animationID = requestAnimationFrame(animation);
  slidesContainer.classList.remove('smooth-transition');
}

// Событие перемещения касания или мыши
function touchMove(event) {
  if (!isDragging) return;
  const currentPosition = getPositionX(event);
  currentTranslate = prevTranslate + currentPosition - startPos;
}

// Событие завершения касания или отпускания мыши
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

// Получить позицию X (касание или мышь)
function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

// Анимация во время перемещения
function animation() {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
}

// Добавить обработчики событий для мыши и касания
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
