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

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2023이 나옴

