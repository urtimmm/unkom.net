
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".checkbox");
  const menuOverlay = document.querySelector(".menu-overlay");

  // Переключение меню
  menuButton.addEventListener("click", () => {
    menuOverlay.classList.toggle("open"); // Добавить/удалить класс "open"
  });



});
