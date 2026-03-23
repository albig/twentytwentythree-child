/*
 * Theme Name: Childtheme Löbtop e.V. (twentytwentythree)
 * Description: Some JS to add collapse submenus in mobile navigation of twentytwentythree theme
 * Author: Alexander Bigga
 * Author URI: https://loebtop.de
 * */

(function ($) {

    const subMenus = document.querySelectorAll(".wp-block-navigation-submenu__toggle");

    // open submodul function
    const openSubmenu = function () {
        var li = this.parentElement;
        let setActive = li.classList.toggle("ddl-active");
        if (setActive) {
            li.getElementsByClassName('wp-block-navigation-submenu')[0].style.display = 'block';
        } else {
            li.getElementsByClassName('wp-block-navigation-submenu')[0].style.display = 'none';
        }
    };

    // add event listener to all submenus
    for (let i = 0; i < subMenus.length; i++) {
        subMenus[i].addEventListener("click", openSubmenu);
    }

    document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector(".sticky-header");

    let lastScroll = 0;

    window.addEventListener("scroll", () => {

        const currentScroll = window.pageYOffset;

        /* SHRINK HEADER */

        if (currentScroll > 120) {
            header.classList.add("is-shrunk");
        } else {
            header.classList.remove("is-shrunk");
            header.classList.remove("is-hidden");
        }

        /* HIDE ON SCROLL DOWN */
        if (currentScroll > lastScroll && currentScroll > 800) {
            header.classList.add("is-hidden");
        }
        else {
            header.classList.remove("is-hidden");
        }

        lastScroll = currentScroll;

    });
});
}());
