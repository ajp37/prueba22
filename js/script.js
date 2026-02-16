const buttons = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const target = btn.dataset.target;
    contents.forEach(c => {
      if (c.id === target) {
        c.classList.add("active");
      } else {
        c.classList.remove("active");
      }
    });
  });
});