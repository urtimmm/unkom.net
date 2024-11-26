
  document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".checkbox");
    const menuOverlay = document.querySelector(".menu-overlay");
    const closeButton = document.querySelector(".close-button");

    // Открыть меню
    menuButton.addEventListener("click", () => {
      menuOverlay.classList.add("open");
    });

    // Закрыть меню
    closeButton.addEventListener("click", () => {
      menuOverlay.classList.remove("open");
    });

    // Закрыть меню при клике вне контента
    menuOverlay.addEventListener("click", (event) => {
      if (!event.target.closest(".menu-content")) {
        menuOverlay.classList.remove("open");
      }
    });
  });
