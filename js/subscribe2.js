// ham
const $ham = document.querySelector(".ham");
const $hd = document.querySelector(".hd");
const $gnb = document.querySelector(".gnb");

$ham.addEventListener("click", function () {
  $gnb.classList.toggle("on");
  $hd.classList.toggle("on");
});

// 설문 1
const $type = document.querySelectorAll(".con1 > li");

$type.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    $type.forEach((a) => {
      a.classList.remove("on");
      a.classList.add("off");
    });

    $type[i].classList.remove("off");
    $type[i].classList.add("on");
  });
});

// 설문 2
const $style = document.querySelectorAll(".con2 > li");

$style.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    $style.forEach((a) => {
      a.classList.remove("on");
      a.classList.add("off");
    });

    $style[i].classList.remove("off");
    $style[i].classList.add("on");
  });
});

// 설문 3
const $sugar = document.querySelectorAll(".con3 > li");

$sugar.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    $sugar.forEach((a) => {
      a.classList.remove("on");
      a.classList.add("off");
    });

    $sugar[i].classList.remove("off");
    $sugar[i].classList.add("on");
  });
});
