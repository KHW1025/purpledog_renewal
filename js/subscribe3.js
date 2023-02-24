// ham
const $ham = document.querySelector(".ham");
const $hd = document.querySelector(".hd");
const $gnb = document.querySelector(".gnb");

$ham.addEventListener("click", function () {
  $gnb.classList.toggle("on");
  $hd.classList.toggle("on");
});

//tab menu - order route
const $menu = document.querySelectorAll(".tab_menu>li");
const $content = document.querySelectorAll(".tab_content>li");

$menu.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    $menu.forEach((a) => {
      a.classList.remove("on");
    });
    $menu[i].classList.add("on");

    $content.forEach((b) => {
      b.classList.remove("on");
    });
    $content[i].classList.add("on");
  });
});

//tab menu - spend day
const $menu2 = document.querySelectorAll(".tab_menu2>li");

$menu2.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    $menu2.forEach((a) => {
      a.classList.remove("on");
    });
    $menu2[i].classList.add("on");
  });
});
