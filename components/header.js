"use strict";

//// 스크롤 시 header 높이 줄이기
// - scroll이 32px 만큼 내려왔을 때
// - header 의 높이가 줄어든다. 얼만큼? 28px 정도?
// - with transition

//// 스크롤이 home 화면을 지나면 footer에 top button 생성(누르면 화면이 한 페이지만큼 올라간다)
// - Scroll 위치(a), Viewport 높이(b)
// - a >= b 일 때 top button 생성

const topButton = document.querySelector(".top-button");

window.addEventListener("scroll", handleHeaderH);

function handleHeaderH() {
  const body = document.body;
  const header = document.getElementById("header");
  const scrollLocation = window.scrollY;
  const windowHeight = window.innerHeight;
  const bodyHeight = body.scrollHeight;
  if (scrollLocation > 100) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }

  if (scrollLocation >= windowHeight) {
    topButton.classList.remove("hidden");
  } else {
    topButton.classList.add("hidden");
  }
}

topButton.addEventListener("click", goToTop);

function goToTop() {
  window.scrollTo(0, 0);
}
