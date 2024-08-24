const shareIconLight = document.getElementById("share__icon--light");
const shareIconDark = document.getElementById("share__icon--dark");
const tooltiptext = document.getElementById("tooltiptext");
const socialsBar = document.getElementById("socials");

shareIconLight.addEventListener("click", () => {
  if (window.innerWidth < 938) {
    socialsBar.style.display = "flex";
  } else {
    shareIconLight.classList.toggle("tooltip");
    // shareIconLight.style.backgroundColor = "hsl(217, 19%, 35%)";
    if (shareIconLight.classList.contains("tooltip")) {
      tooltiptext.style.visibility = "visible";
    } else {
      tooltiptext.style.visibility = "hidden";
    }
  }
});

shareIconDark.addEventListener("click", () => {
  if (window.innerWidth < 938) {
    socialsBar.style.display = "none";
  }
});
