const badgeE1 = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// scroll 이벤트를 할때 수십개의 이벤트가 발생하는데
// 이렇게 되면 프로젝트가 무거워지고 안좋음...
// 그래서 0.3초 단위로 부하를 줘서 이벤트 발생을 늦춤.
// lodash에서 제공하는 throttle라는 특정한 기능을 사용함.
window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500 ) {
        // 광고 배찌 요소를 숨기기 
        gsap.to(badgeE1, .6, {
            opacity: 0,
            display: 'none'
        });
        // gsap.to(요소, 지속시간, 옵션);

        // 스크롤을 내려도 클릭이 안되도록
        // display 를 none으로


        //to-top버튼 보이게 하기
        gsap.to(toTopEl, .2,{
            x : 0
        });

    } else{
        // 광고 배찌 보이기
        gsap.to(badgeE1, .6, {
            opacity: 1,
            display: 'block'
        });

        //to-top버튼 숨기기!
        gsap.to(toTopEl, .2,{
            x : 100
        });
    }
},300));
//_.throttle(함수, 시간);


toTopEl.addEventListener('click', function(){
    gsap.to(window, .7, {
        scrollTo: 0
    });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index+1) * .7,
        opacity: 1
    })
});

// SWIPER
// new Swiper ( 선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical', // 수직 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true // 반복 재생 여부
  });

new Swiper('.promotion .swiper-container',{
    slidesPerView: 3, // 한 화면에 보이는 슬라이드 갯수
    spaceBetween: 10, // 슬라이드 사이의 공간 값
    centeredSlides: true,
    loop:true,
    // autoplay : {
    //     delay:50
    // }
    pagination:{
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true // 사용자가 페이지 번호 요소 제어 가능
    },
    navigation:{
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});
new Swiper('.awards .swiper-container',{
    direction: 'horizontal',
    autoplay : true,
    loop:true,
    spaceBetween:30,
    slidesPerView: 5,

    navigation:{
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion) {
        // 숨김 처리!
        promotionEl.classList.add('hide');
    }else{
        // 나타내기!
        promotionEl.classList.remove('hide');
    }
});

function random(min, max){
    return parseFloat((Math.random()*(max-min)+min).toFixed(2))
}

function floatingObject (selector, delay, size) {
    gsap.to(selector, random(1.5, 2.5), {
        y : size,
        repeat:-1, // 무한 반복
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0, delay)
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, // 감시하려고 하는 하나의 요소를 지정함.
            triggerHook: .8        // 화면 맨위가 0, 맨아래가 1임.
                                   // .8 부분에 시작 지정점 정해주기
                                   // 그 부분에 걸리면 setClassToggle이 실행됨.
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());

});