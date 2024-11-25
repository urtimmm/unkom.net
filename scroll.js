document.addEventListener('DOMContentLoaded', function() {

    // Получаем элементы

    const navbarTop = document.getElementById('navbarTop');
    const navbarBottom = document.getElementById('navbarBottom');
    const body = document.body; // Получаем body или основной контейнер страницы

    if (!navbarTop || !navbarBottom) {
        console.error('Не удалось найти элементы с id navbarTop и navbarBottom');
        return;
    }

    // Функция для отслеживания прокрутки

    window.addEventListener('scroll', () => {
        const navbarBottomHeight = navbarBottom.offsetHeight; // Получаем высоту navbarBottom
        const scrollPosition = window.scrollY;
        body.style.paddingTop = `${navbarBottomHeight}px`; // Добавляем отступ сверху, чтобы компенсировать высоту navbarBottom
      

    // Если прокрутили больше, чем высота navbarTop

        if (window.scrollY > navbarTop.offsetHeight) {   
            navbarBottom.classList.add('fixed');
        } else {
            navbarBottom.classList.remove('fixed');
            body.style.paddingTop = '0'; // Убираем отступ сверху, когда navbarBottom не фиксирован
        }
    });
});
