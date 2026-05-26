const btnNo = document.getElementById("btn-no");

if (btnNo) {
  const moveNoButton = () => {
    btnNo.classList.add("escaping");

    const maxX = window.innerWidth - btnNo.offsetWidth;
    const maxY = window.innerHeight - btnNo.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    btnNo.style.left = randomX + "px";
    btnNo.style.top = randomY + "px";
  };

  btnNo.addEventListener("mouseover", moveNoButton);
  btnNo.addEventListener("touchstart", (event) => {
    event.preventDefault();
    moveNoButton();
  });
}

const btnYes = document.getElementById("btn-yes");

if (btnYes) {
  btnYes.addEventListener("click", () => {
    window.location.href = "date-options.html";
  });
}

function chooseDate(choice) {
  sessionStorage.setItem("chosenDate", choice);
  window.location.href = `final-page.html?choice=${encodeURIComponent(choice)}`;
}

const chosenDate = document.getElementById("chosen-date");
const whatsappLink = document.getElementById("whatsapp-link");

if (chosenDate && whatsappLink) {
  const phone = "31687500793";
  const params = new URLSearchParams(window.location.search);
  const choice = params.get("choice") || sessionStorage.getItem("chosenDate");

  if (choice) {
    sessionStorage.setItem("chosenDate", choice);
    chosenDate.textContent = choice;
    whatsappLink.href = `https://wa.me/${phone}?text=${encodeURIComponent(`I choose: ${choice}`)}`;
  } else {
    chosenDate.textContent = "No date selected yet";
    whatsappLink.textContent = "Choose a date";
    whatsappLink.href = "date-options.html";
  }
}
