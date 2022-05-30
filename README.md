# Portfolio


Main 화면
1. gsap ScrollTrigger의 pin 속성을 이용하여 화면고정을 함.
position : fixed 속성을 적용하는 것과는 어떤 차이가 있는가?
=> position : fixed 속성을 사용한다면, 엘리먼트가 fixed로 변경되면서 DOM 구조가 붕괴(변경) 됨을 야기할 수 있다. 즉, fixed된 엘리먼트로 인해서 다른 엘리먼트들이 그 자리를 차지하게 되는 경우이다.

이러한 경우를 대비하여 gsap 에서는 fixed 된 엘리먼트와 같은 크기의 div 엘리먼트를 생성하여 프록시 요소로 활용한다.

더 자세한 사항은 https://greensock.com/docs/v3/Plugins/ScrollTrigger 에서
"How does pinning work under the hood?" 란에서 설명하고 있다.


scrollNavBar 를 두가지 방식으로 구현
1. scrollHeight 와 지금 viewport의 height 를 이용한 연산으로 height 속성을 변경.
2. gsap animation 라이브러리의 scrollTrigger.scrub 사용.

두가지 방식의 차이점은?


![image](https://user-images.githubusercontent.com/34260967/170683489-f1da3d12-b9c9-47e9-b1df-9efa9f2667be.png)

![image](https://user-images.githubusercontent.com/34260967/170683831-cf874efc-a048-44d8-9c18-a17aa7b92859.png)



1번은 현재 scroll의 위치를 가져와서 사용해야하고 그에 따라 state가 변경되고 스타일속성이 변경된다. 따라서 매 스크롤 마다 리랜더링하는 과정을 거쳐야 한다.

하지만 2번은 그렇지않다. 왜인가?

"나야 모르지 ㅎ.. 프론트 엔드 화이팅!"
