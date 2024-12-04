const sidebarContainer = document.querySelector(".sidebar");
const sidebarItems = document.querySelectorAll(".sidebar li");
const animeSection = document.querySelector(".anime_section");
const toggleSidebarButton = document.querySelector(".fa-bars");

toggleSidebarButton.addEventListener("click", () => {
  sidebarContainer.classList.toggle("active");
  animeSection.classList.toggle("active");
});

sidebarItems.forEach((item) => {
  item.addEventListener("click", () => {
    sidebarItems.forEach((el) => {
      el.classList.remove("active");
    });
    item.classList.add("active");
  });
});
