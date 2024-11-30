// Список информации для отображения
const slides = [
  "ПН-ПТ\n8:00-12:00\n13:00-17:00",
  "СБ-ВС\n9:00-14:00\nВЫХОДНОЙ"
];

let currentIndex = 0; // Текущий индекс слайда
const sliderDiv = document.getElementById('slider-header');

// Функция обновления слайда
function updateSlide(index) {
  sliderDiv.textContent = slides[index];
}

// Функция перехода к следующему слайду
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length; // Циклический переход
  updateSlide(currentIndex);
}

// Инициализация
updateSlide(currentIndex);

// Смена слайда каждые 5 секунд
let autoSlideInterval = setInterval(nextSlide, 5000);

// Обработка клика
sliderDiv.addEventListener('click', () => {
  clearInterval(autoSlideInterval); // Останавливаем автопрокрутку
  nextSlide(); // Меняем слайд
  autoSlideInterval = setInterval(nextSlide, 5000); // Перезапускаем автопрокрутку
});