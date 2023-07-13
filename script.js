window.addEventListener("DOMContentLoaded", () => {
  const infoBtn = document.querySelectorAll(".button"),
    modal = document.querySelectorAll(".modal"),
    closeBtn = document.querySelectorAll(".close"),
    parent = document.querySelector(".imgConteiner");

  function openModal(i) {
    modal[i].classList.toggle("show");
    document.body.style.overflow = "hidden";
  }
  function closeModal(j) {
    modal[j].classList.remove("show");
    document.body.style.overflow = "";
  }
  parent.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("button")) {
      infoBtn.forEach((item, i) => {
        if (event.target == item) {
          openModal(i);
        }
      });
    }
    if (event.target && event.target.classList.contains("close")) {
      closeBtn.forEach((item, j) => {
        if (event.target == item) {
          closeModal(j);
        }
      });
    }
  });

  closeBtn.forEach((item) => {
    item.addEventListener("click", closeModal);
  });
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
});
