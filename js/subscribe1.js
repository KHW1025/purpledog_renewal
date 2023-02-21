// ham
const $ham = document.querySelector(".ham");
const $hd = document.querySelector(".hd");
const $gnb = document.querySelector(".gnb");

$ham.addEventListener("click", function () {
  $gnb.classList.toggle("on");
  $hd.classList.toggle("on");
});

// modal
const $product = document.querySelectorAll(".product_con .product_item");
const $modal = document.querySelector(".subscribe_modal");
const $close = document.querySelector(".close");

// checklist list
const list1 = document.querySelector(".list1"); //
const list2 = document.querySelector(".list2"); //
const list3 = document.querySelector(".list3"); //
const list4 = document.querySelector(".list4"); //
const list5 = document.querySelector(".list5"); //

const LMonth = document.querySelectorAll(".month"); //
const $month = document.querySelector(".product_month"); //

const $penalty = document.querySelector(".penalty");
const $penaltyPrice = document.querySelector(".penalty_price");

const LPenalty = [6000, 6000, 11000, 15000, 6000, 6000, 15000, 15000];
// 그린, 옐로싱글, 옐로더블, 옐로트리플, 블루, 크림슨, 바이올렛20, 바이올렛30
// 패널티 금액을 변경하려면 이곳에서 변경

const LPrice = document.querySelectorAll(".price"); //
const LName = document.querySelectorAll(".level_name"); //
const $price = document.querySelector(".product_price"); //
const $name = document.querySelector(".product_name"); //

$product.forEach((item, i) => {
  item.addEventListener("click", function () {
    $modal.classList.add("on");
    $price.innerText = LPrice[i].innerText; // 상품 가격
    $name.innerText = LName[i].innerText; // 상품이름
    $month.innerText = LMonth[i].innerText; // 개월
    $penaltyPrice.innerText = (
      Number(LPrice[i].innerText) + LPenalty[i]
    ).toLocaleString(); // 상품가격 + 패널티 금액
    $penalty.innerText = LPenalty[i].toLocaleString(); // 패널티 금액

    if (i == 0) {
      list1.style.display = "list-item";
      list2.style.display = "list-item";
      list3.style.display = "list-item";
      list4.style.display = "none";
      list5.style.display = "none";
    } else if (i > 0 && i < 8) {
      list1.style.display = "none";
      list2.style.display = "list-item";
      list3.style.display = "list-item";
      list4.style.display = "none";
      list5.style.display = "none";
    } else if (i > 7) {
      list1.style.display = "none";
      list2.style.display = "none";
      list3.style.display = "none";
      list4.style.display = "list-item";
      list5.style.display = "list-item";
    }
  });
});

// close 버튼
$close.addEventListener("click", function () {
  $modal.classList.remove("on");
});
