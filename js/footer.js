function initFooter() {
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const topBtn = document.getElementById("scrollTop");

  if (!topBtn) return;

  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  });
}
