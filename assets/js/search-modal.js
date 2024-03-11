/*
 * Theme Name: Childtheme Löbtop e.V. (twentytwentythree)
 * Description: Search Modal
 * Author: Alexander Bigga
 * Author URI: https://loebtop.de
 * */

(function ($) {

    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    const openModalBtn = document.querySelector(".btn-open");
    const closeModalBtn = document.querySelector(".btn-close");

    // close modal function
    const closeModal = function () {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
        // When the modal is hidden, we want to remain at the top of the scroll position
        document.body.style = '';
    };

    // close the modal when the close button and overlay is clicked
    closeModalBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);

    // close modal when the Esc key is pressed
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && !modal.classList.contains("hidden")) {
            closeModal();
        }
    });

    // open modal function
    const openModal = function () {
        let scrollToTop = window.scrollY;
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
        // When the modal is shown, we want a fixed body
        document.body.style.position = 'fixed';
        document.body.style.top = '-' + scrollToTop + 'px';
        document.body.style.left = '0';
        document.body.style.right = '0';
    };
    // open modal event
    openModalBtn.addEventListener("click", openModal);

}());
