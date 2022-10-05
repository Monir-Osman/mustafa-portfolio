const triggers = document.querySelectorAll(".btnlinks");
const highlight = document.createElement("span");
document.body.appendChild(highlight);

function highlightLink() {
  highlight.classList.add("highlight");

  const linkCoords = this.getBoundingClientRect();
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top,
    left: linkCoords.left,
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}
const removeHighlight = () => {
  highlight.classList.remove("highlight");
};

triggers.forEach((a) => a.addEventListener("mouseenter", highlightLink));
triggers.forEach((a) => a.addEventListener("mouseleave", removeHighlight));
