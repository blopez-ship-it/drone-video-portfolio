const year = document.querySelector("#year");
const filters = document.querySelectorAll("[data-filter]");
const cards = document.querySelectorAll("[data-category]");

year.textContent = new Date().getFullYear();

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    cards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.hidden = !shouldShow;
    });
  });
});
