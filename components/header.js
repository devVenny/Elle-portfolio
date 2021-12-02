"use strict";

//// 스크롤 시 header 높이 줄이기
// scroll이 32px 만큼 내려왔을 때
// header 의 높이가 줄어든다. 얼만큼? 28px 정도?
// with transition

const header = document.getElementById("header");

window.addEventListener("scroll", handleHeaderH);
function handleHeaderH() {
  const scrollLocation = window.scrollY;
  if (scrollLocation > 32) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
}

// 스크롤이 최하단으로 이동 시 top button 생성
