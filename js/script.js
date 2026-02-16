const filterButtons = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    document.querySelector(".filter-btn.active").classList.remove("active");
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    menuItems.forEach(item => {
      if(filter === "all"){
        item.style.display = "block";
      } else {
        if(item.classList.contains(filter)){
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }
    });

  });
});
