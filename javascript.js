"use strict";

//// 스크롤 시 header 높이 줄이기
// - scroll이 32px 만큼 내려왔을 때
// - header 의 높이가 줄어든다. 얼만큼? 28px 정도?
// - with transition

//// 스크롤이 home 화면을 지나면 footer 생성 (누르면 화면이 한 페이지만큼 올라간다)
// - Scroll 위치(a), Viewport 높이(b)
// - a >= b 일 때 top button 생성

const body = document.body;
const home = document.getElementById("home");
const footer = document.querySelector(".footer");
const header = document.getElementById("header");
const topButton = document.querySelector(".top-button");

const SHRINK_CLASSNAME = "shrink";

window.addEventListener("scroll", handleScroll);

function handleScroll() {
  const scrollLocation = window.scrollY;
  const windowHeight = window.innerHeight;
  if (scrollLocation > 100) {
    header.classList.add(SHRINK_CLASSNAME);
  } else {
    header.classList.remove(SHRINK_CLASSNAME);
  }

  // if (scrollLocation >= windowHeight) {
  // } else {
  //   topButton.classList.add("hidden");
  // }

  home.style.left = `-${scrollLocation * 0.3}px`;
  // footer.style.bottom = `${scrollLocation * 0.2}%`;
}

topButton.addEventListener("click", goToTop);

function goToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

//// 스크롤 시 화면 스크롤 보다 늦게 홈 화면이 스크롤
// 현재 위치 scroll 값 구하기(a)
// home 화면 position=absolute , top=0(b)
// home.style.top = a * 1보다 작은 수
