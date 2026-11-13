const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".work-card");
filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const selected = button.dataset.filter;
    cards.forEach(card => {
      card.hidden = selected !== "all" && card.dataset.category !== selected;
    });
  });
});

const modal = document.getElementById("workModal");
const closeModal = () => {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
};
document.querySelectorAll(".work-open").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("modalTitle").textContent = button.dataset.title;
    document.getElementById("modalType").textContent = button.dataset.type;
    document.getElementById("modalYear").textContent = button.dataset.year;
    document.getElementById("modalDescription").textContent = button.dataset.description;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});
document.querySelector(".modal-close").addEventListener("click", closeModal);
modal.addEventListener("click", event => {
  if (event.target === modal) closeModal();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});
