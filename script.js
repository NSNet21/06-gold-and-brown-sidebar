const sideBar = document.getElementById("sideBar");
const toggleMenu = document.getElementById("toggleMenu");
const stIcon = document.getElementById("searchIcon");
const stTooltip = document.getElementById("sticonTooltip");
console.log(stTooltip);

// Toggle to expand or collapse the sidebar

toggleMenu.addEventListener("click", () => {
  sideBar.classList.toggle("collapsed");
});

stIcon.addEventListener("click", () => {
  if (sideBar.classList.contains("collapsed")) {
    sideBar.classList.remove("collapsed");

    // remove inline style to comeback to css external style

    stTooltip.style.opacity = "";
  }
});

stIcon.addEventListener("mouseenter", () => {
  if (sideBar.classList.contains("collapsed")) {
    // add inline style to search-icon when mouse over it and
    // remove it when mouse leave

    stTooltip.style.opacity = "1";
  }
});

stIcon.addEventListener("mouseleave", () => {
  if (sideBar.classList.contains("collapsed")) {
    // remove inline style to comeback to css external style

    stTooltip.style.opacity = "";
  }
});
