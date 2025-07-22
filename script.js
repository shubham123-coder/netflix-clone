document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("infoModal");
    const moreInfoBtn = document.querySelector(".info-btn");
    const closeBtn = document.querySelector(".close-btn");
  
    moreInfoBtn.addEventListener("click", () => {
      modal.style.display = "flex";
      modal.style.animation = "fadeIn 0.3s ease";
    });
  
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  
    // Scroll rows with mouse wheel
    const rowContainers = document.querySelectorAll('.row-posters');
    rowContainers.forEach(container => {
      container.addEventListener('wheel', e => {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      });
    });
  });
  