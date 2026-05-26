const btnNo = document.getElementById("btn-no");

if (btnNo) {
  btnNo.addEventListener("mouseover", () => {
    const maxX = window.innerWidth - btnNo.offsetWidth;
    const maxY = window.innerHeight - btnNo.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    btnNo.style.left = randomX + "px";
    btnNo.style.top = randomY + "px";
  });
}

const btnYes = document.getElementById("btn-yes");

if (btnYes) {
  btnYes.addEventListener("click", () => {
    window.location.href = "date-options.html";
  });
}

function chooseDate(choice) {
  const phone = "31687500793";

  const text = `I choose: ${choice} `;

  window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
