const searchEl = document.querySelector(".search");
const searchinputEl = searchEl.querySelector("input");

searchEl.addEventListener('click', function () {
    searchinputEl.focus();
} );


// 검색창이 눌려지면 실행됨.
searchinputEl.addEventListener('focus', function(){
    // 해당 요소에 focused라는 클래스를 추가한다.
    searchEl.classList.add('focused');

    searchinputEl.setAttribute('placeholder','통합검색'); 
    // 해당 요소에 어떤 html attribute를 부여할때 쓰는 함수
    // 첫번째 인수 : 원하는 속성값 // 두번째 인수 : 해당 속성에 들어갈 값
});

// 검색창이 눌려지지 않았을때
searchinputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchinputEl.setAttribute('placeholder',''); 
});

const badgeE1 = document.querySelector('header .badges');


// scroll 이벤트를 할때 수십개의 이벤트가 발생하는데
// 이렇게 되면 프로젝트가 무거워지고 안좋음...
// 그래서 0.3초 단위로 부하를 줘서 이벤트 발생을 늦춤.
// lodash에서 제공하는 throttle라는 특정한 기능을 사용함.
window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        // 광고 배찌 요소를 숨기기 
        gsap.to(badgeE1, .6, {
            opacity: 0,
            display: 'none'
        });
        // gsap.to(요소, 지속시간, 옵션);

        // 스크롤을 내려도 클릭이 안되도록
        // display 를 none으로

    } else{
        // 광고 배찌 보이기
        gsap.to(badgeE1, .6, {
            opacity: 1,
            display: 'block'
        });
    }
},300));
//_.throttle(함수, 시간);

