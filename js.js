const btnNo = document.getElementById("btn-no");

if (btnNo) {
  const moveNoButton = () => {
    btnNo.classList.add("escaping");

    const padding = 12;
    const maxX = window.innerWidth - btnNo.offsetWidth - padding;
    const maxY = window.innerHeight - btnNo.offsetHeight - padding;

    const randomX = padding + Math.random() * Math.max(0, maxX - padding);
    const randomY = padding + Math.random() * Math.max(0, maxY - padding);

    btnNo.style.left = randomX + "px";
    btnNo.style.top = randomY + "px";
  };

  const escapeNoButton = (event) => {
    event.preventDefault();
    moveNoButton();
  };

  btnNo.addEventListener("mouseenter", moveNoButton);

  if ("PointerEvent" in window) {
    btnNo.addEventListener("pointerdown", escapeNoButton);
  } else {
    btnNo.addEventListener("touchstart", escapeNoButton, { passive: false });
  }

  btnNo.addEventListener("click", (event) => event.preventDefault());
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
