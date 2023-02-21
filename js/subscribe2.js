// ham
const $ham = document.querySelector(".ham");
const $hd = document.querySelector(".hd");
const $gnb = document.querySelector(".gnb");

$ham.addEventListener("click", function () {
  $gnb.classList.toggle("on");
  $hd.classList.toggle("on");
});

// 설문 1
const $red = document.querySelector(".red");
const $red_white = document.querySelector(".red_white");

$red.addEventListener("click", function () {
  if ($red.classList.contains("off") === false) {
    $red.classList.add("off", "on");
    $red_white.classList.add("off");
  } else if ($red.classList.contains("on") === false) {
    $red.classList.add("on");
    $red_white.classList.remove("on");
  }
});

$red_white.addEventListener("click", function () {
  if ($red_white.classList.contains("off") === false) {
    $red_white.classList.add("off", "on");
    $red.classList.add("off");
  } else if ($red_white.classList.contains("on") === false) {
    $red_white.classList.add("on");
    $red.classList.remove("on");
  }
});

// 설문 2
const $style1 = document.querySelector(".style1");
const $style2 = document.querySelector(".style2");
const $style3 = document.querySelector(".style3");

$style1.addEventListener("click", function () {
  if ($style1.classList.contains("off") === false) {
    $style1.classList.add("off", "on");
    $style2.classList.add("off");
    $style3.classList.add("off");
  } else if ($style1.classList.contains("on") === false) {
    $style1.classList.add("on");
    $style2.classList.remove("on");
    $style3.classList.remove("on");
  }
});

$style2.addEventListener("click", function () {
  if ($style2.classList.contains("off") === false) {
    $style2.classList.add("off", "on");
    $style1.classList.add("off");
    $style3.classList.add("off");
  } else if ($style2.classList.contains("on") === false) {
    $style2.classList.add("on");
    $style1.classList.remove("on");
    $style3.classList.remove("on");
  }
});

$style3.addEventListener("click", function () {
  if ($style3.classList.contains("off") === false) {
    $style3.classList.add("off", "on");
    $style1.classList.add("off");
    $style2.classList.add("off");
  } else if ($style3.classList.contains("on") === false) {
    $style3.classList.add("on");
    $style1.classList.remove("on");
    $style2.classList.remove("on");
  }
});

// 설문 3
const $sugar_c1 = document.querySelector(".sugar_c1");
const $sugar_c2 = document.querySelector(".sugar_c2");
const $sugar_c3 = document.querySelector(".sugar_c3");

$sugar_c1.addEventListener("click", function () {
  if ($sugar_c1.classList.contains("off") === false) {
    $sugar_c1.classList.add("off", "on");
    $sugar_c2.classList.add("off");
    $sugar_c3.classList.add("off");
  } else if ($sugar_c1.classList.contains("on") === false) {
    $sugar_c1.classList.add("on");
    $sugar_c2.classList.remove("on");
    $sugar_c3.classList.remove("on");
  }
});

$sugar_c2.addEventListener("click", function () {
  if ($sugar_c2.classList.contains("off") === false) {
    $sugar_c2.classList.add("off", "on");
    $sugar_c1.classList.add("off");
    $sugar_c3.classList.add("off");
  } else if ($sugar_c2.classList.contains("on") === false) {
    $sugar_c2.classList.add("on");
    $sugar_c1.classList.remove("on");
    $sugar_c3.classList.remove("on");
  }
});

$sugar_c3.addEventListener("click", function () {
  if ($sugar_c3.classList.contains("off") === false) {
    $sugar_c3.classList.add("off", "on");
    $sugar_c1.classList.add("off");
    $sugar_c2.classList.add("off");
  } else if ($sugar_c3.classList.contains("on") === false) {
    $sugar_c3.classList.add("on");
    $sugar_c1.classList.remove("on");
    $sugar_c2.classList.remove("on");
  }
});
