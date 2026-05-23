const mainMenu = document.getElementById("mainMenu");
const navbarToggler = document.querySelector(".navbar-toggler");

document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        if (!window.bootstrap) {
            mainMenu.classList.remove("show");
            navbarToggler.setAttribute("aria-expanded", "false");
            return;
        }

        const openMenu = bootstrap.Collapse.getInstance(mainMenu);

        if (openMenu) {
            openMenu.hide();
        }
    });
});

navbarToggler.addEventListener("click", () => {
    if (window.bootstrap) {
        return;
    }

    const isOpen = mainMenu.classList.toggle("show");
    navbarToggler.setAttribute("aria-expanded", isOpen);
});
