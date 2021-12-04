"use strict";

//// 스크롤 시 header 높이 줄이기
// - scroll이 32px 만큼 내려왔을 때
// - header 의 높이가 줄어든다. 얼만큼? 28px 정도?
// - with transition

//// 스크롤이 home 화면을 지나면 footer 생성 (누르면 화면이 한 페이지만큼 올라간다)
// - Scroll 위치(a), Viewport 높이(b)
// - a >= b 일 때 top button 생성

//// 스크롤 시 home 화면 왼쪽으로 이동

const body = document.body;

const home = document.getElementById("home");
const header = document.getElementById("header");
const about = document.getElementById("about");

const footer = document.getElementById("footer");
const topButton = document.querySelector(".top-button");
const headerH = header.offsetHeight;

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

//// nav바 메뉴 클릭 시 해당 화면으로 이동
// 각 섹션의 y좌표 구하기
// 조건문과 section에 설정한 data-set을 이용해 해당 화면의 좌표로 이동(scrollTo)

const navMenu = document.querySelectorAll(".navbar__menu__item");

navMenu.forEach((item) => {
  item.addEventListener("click", handleClickItem);

  function handleClickItem(e) {
    const itemName = e.target.dataset.itemname; // click 한  아이
    // const homeTop = document.querySelector(
    //   'section[data-sectionName="home"]'
    // ).offsetTop;

    const sectionTop = document.querySelector(
      `section[data-sectionName="${itemName}"]`
    ).offsetTop; // 해당 section의 top 높이

    window.scrollTo({ top: `${sectionTop}`, behavior: "smooth" });
    // if (
    //   itemName ===
    //   document.querySelector(`section[data-sectionName="${itemName}"]`).dataset.sectionname
    // ) {
    //   window.scrollTo(top:"")
    // }
    const aboutLoc = about.offsetTop;
    // window.scrollTo({ top: `${aboutLoc - headerH}`, behavior: "smooth" });
  }
});
// function getPosition(el) {
//   let yPos = 0;
//   let yScroll = el.offsetTop;
// }

// getPosition(about);

// console.dir(document.querySelector('section[data-sectionName="home"]'));
// console.log(document.querySelector('section[data-sectionName="about"]'));
// console.log(document.querySelector('section[data-sectionName="work"]'));
// console.log(document.querySelector('section[data-sectionName="exp"]'));
