let secLogo = document.querySelector(".announ h1"),
  sec2Logo = document.querySelector(".announ2 h1"),
  content = "شركة أبناء يوسف مقداد للتجارة العامة",
  i = 0;

let typeWriter = setInterval(function () {
  secLogo.textContent += content[i];
  sec2Logo.textContent += content[i];
  i++;

  if (i > content.length) {
    i = 0;
    secLogo.textContent = "";
    sec2Logo.textContent = "";
  }
}, 250);

const sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  duration: 2000,
  reset: true,
});

sr.reveal(".welcome-sec img", {});

sr.reveal(".sales img", { interval: 350 });
sr.reveal(".sales-img img", { interval: 350 });
sr.reveal(".new-sec_images img", { interval: 350 });
sr.reveal(".soon_images img", { interval: 350 });
