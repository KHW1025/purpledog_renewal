// ham
const $ham = document.querySelector(".ham");
const $hd = document.querySelector(".hd");
const $gnb = document.querySelector(".gnb");

$ham.addEventListener("click", function () {
  $gnb.classList.toggle("on");
  $hd.classList.toggle("on");
});

// modal x_button
const $product1 = document.querySelector(".item1");
const $product2 = document.querySelector(".item2");
const $product3 = document.querySelector(".item3");
const $product4 = document.querySelector(".item4");
const $product5 = document.querySelector(".item5");
const $product6 = document.querySelector(".item6");
const $product7 = document.querySelector(".item7");
const $product8 = document.querySelector(".item8");
const $product9 = document.querySelector(".item9");
const $product10 = document.querySelector(".item10");
const $modal = document.querySelector(".subscribe_modal");
const $x = document.querySelector(".x_button");

$product1.addEventListener("click", function () {
  $modal.classList.add("on");
});
$product2.addEventListener("click", function () {
  $modal.classList.add("on");
});
$product3.addEventListener("click", function () {
  $modal.classList.add("on");
});
$product4.addEventListener("click", function () {
  $modal.classList.add("on");
});
$product5.addEventListener("click", function () {
  $modal.classList.add("on");
});
$product6.addEventListener("click", function () {
  $modal.classList.add("on");
});
$product7.addEventListener("click", function () {
  $modal.classList.add("on");
});
$product8.addEventListener("click", function () {
  $modal.classList.add("on");
});
$product9.addEventListener("click", function () {
  $modal.classList.add("on");
});
$product10.addEventListener("click", function () {
  $modal.classList.add("on");
});

$x.addEventListener("click", function () {
  $modal.classList.remove("on");
});
