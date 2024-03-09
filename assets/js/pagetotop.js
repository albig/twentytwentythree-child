
(function ($) {

  // Get the button:
  let mybutton = document.getElementById("imPageToTop");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }




  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const openModalBtn = document.querySelector(".btn-open");
  const closeModalBtn = document.querySelector(".btn-close");

  // close modal function
  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    // When the modal is hidden, we want to remain at the top of the scroll position
    document.body.style.position = '';
    document.body.style.top = '';
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
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    // When the modal is shown, we want a fixed body
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
  };
  // open modal event
  openModalBtn.addEventListener("click", openModal);


}());

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
