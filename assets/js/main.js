// aos
AOS.init();


// menu
try {
  const openBtn = document.getElementById("openMobMenu");
  const mobMenu = document.querySelector(".navigation");
  const overlay = document.querySelector(".overlay");
  const btnClose = document.querySelectorAll(".close-mob-menu");
  
  openBtn.addEventListener("click", () => {
    mobMenu.classList.add("open");
    overlay.classList.add("active");
  });
  btnClose.forEach((btn) => {
    btn.addEventListener("click", () => {
      mobMenu.classList.remove("open");
      overlay.classList.remove("active");
    });
  });
} catch (error) {}

const tabItem = document.querySelectorAll(".tab-item");
tabItem.forEach((btn) => {
 
  btn.addEventListener("click", () => {
    tabItem.forEach(item => {
      item.classList.remove("active");
    });
    btn.classList.add("active");
  });
  
});