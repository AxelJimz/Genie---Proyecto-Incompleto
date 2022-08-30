const { nav, nav__links, openMenu } = {
  nav: document.querySelector(".nav"),
  openMenu: document.querySelector(".nav__link--showNav"),
  nav__links: document.querySelector(".nav__links"),
  nav__bars: document.querySelector(".nav__bars"),
};

let open = false;

const isOpenMenuMobile = () => {
  if (open === false) {
    open = true;
    openMenu.classList.add("nav__bars")
    nav__links.classList.add("nav__links--open");
  } else {
    open = false;
    openMenu.classList.remove("nav__bars")
    nav__links.classList.remove("nav__links--open");
  }
};

openMenu.addEventListener("click", isOpenMenuMobile);
