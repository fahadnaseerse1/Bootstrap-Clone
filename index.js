(() => {
  const body = document.body;
  const openBtn = document.getElementById("menu-open");
  const closeBtn = document.getElementById("menu-close");
  const backdrop = document.getElementById("menu-backdrop");
  const menu = document.getElementById("mobile-menu");
  if (!openBtn || !closeBtn || !backdrop || !menu) return;

  const isOpen = () => body.classList.contains("menu-open");

  function openMenu() {
    body.classList.add("menu-open");
    openBtn.setAttribute("aria-expanded", "true");
    setTimeout(() => closeBtn.focus(), 50);
  }

  function closeMenu(returnFocus = true) {
    body.classList.remove("menu-open");
    openBtn.setAttribute("aria-expanded", "false");
    if (returnFocus) openBtn.focus();
  }

  openBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", () => closeMenu());
  backdrop.addEventListener("click", () => closeMenu());

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeMenu(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) closeMenu();
  });

  window
    .matchMedia("(min-width: 992px)")
    .addEventListener("change", (event) => {
      if (event.matches && isOpen()) closeMenu(false);
    });
})();
