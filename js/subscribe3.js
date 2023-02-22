// ham
const $ham = document.querySelector(".ham");
const $hd = document.querySelector(".hd");
const $gnb = document.querySelector(".gnb");

$ham.addEventListener("click", function () {
  $gnb.classList.toggle("on");
  $hd.classList.toggle("on");
});

//tap meun - order route
const $menu = document.querySelectorAll(".tap_menu>li");
const $content = document.querySelectorAll(".tap_content>li");

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

//tap menu - spend day
const $menu2 = document.querySelectorAll(".tap_menu2>li");

$menu2.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    $menu2.forEach((a) => {
      a.classList.remove("on");
    });
    $menu2[i].classList.add("on");
  });
});
