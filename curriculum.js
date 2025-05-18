document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll("#cv-menu li");
  const sections = document.querySelectorAll(".cv-section");

  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      // Rimuovi active da tutti
      menuItems.forEach(i => i.classList.remove("active"));
      sections.forEach(s => s.classList.remove("active"));

      // Aggiungi active a quello cliccato e alla sezione corrispondente
      item.classList.add("active");
      const sectionId = item.getAttribute("data-section");
      document.getElementById(sectionId).classList.add("active");
    });
  });
});
