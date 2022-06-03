import { useEffect, useState } from "react";
import * as constants from "../../constants";
import gsap from "gsap";
import { debounce } from "lodash";
import theme from "../../style/theme";

export const useSetNavLink = (
  refArr: React.MutableRefObject<HTMLAnchorElement[]>,
  pageRefs: React.MutableRefObject<HTMLTableSectionElement[]>
) => {
  useEffect(() => {
    const clickHandlerArr = refArr.current.map((_, index) => {
      return (e: MouseEvent) => {
        e.preventDefault();
        gsap.to(window, {
          scrollTo: index === 0 ? 0 : pageRefs.current[index - 1],
          duration: 0.5,
          ease: "power3.out",
          delay: 0,
        });
      };
    });

    refArr.current.forEach((ref, index) => {
      ref.addEventListener("click", clickHandlerArr[index]);
    });

    return () => {
      refArr.current.forEach((ref, index) => {
        ref.removeEventListener("click", clickHandlerArr[index]);
      });
    };
  }, []);
};

export const useSetLinkAnimation = (
  refArr: React.MutableRefObject<HTMLAnchorElement[]>
) => {
  useEffect(() => {
    // const timeline = gsap.timeline();
    const refLen = refArr.current.length;
    refArr.current.forEach((ref, index) => {
      if (index != 0) {
        const startPosition = (1 / refLen) * 100 * index - 1 + "%";
        gsap.to(ref, {
          scrollTrigger: {
            trigger: document.body,
            start: `${startPosition} top`,
            toggleActions: "play pause reserve reset",
            // markers : true,
          },
          fontWeight: 600,
          color: theme.side_text_color,
          
        });
        // timeline.add(gsapTo);
      }
    });
  }, []);
};

export const useSetPathAnimaition = (
  pathRef: React.RefObject<HTMLDivElement>
) => {
  // scroll에 따라서 scrub이 변화해야함
  // 하지만 window 객체가 resize 되면 scrub이 정상적으로 동작하지않음.
  // 왜인가?
  // readme에도 작성해보자
  // markers도 이상하게 나오는거같음
  useEffect(() => {
    if (pathRef != null) {
      console.log("resize hook");

      const endPosition = 100 - (1 / constants.PAGE_COUNT) * 100 + "%";
      gsap.to(pathRef.current, {
        scrollTrigger: {
          id: "pathRef-controll",
          trigger: document.body,
          // start: () => "top top",
          // end: () => `${endPosition} top`, // page가 4개라서 75%임. 5개면 80%
          start: "top top",
          end: `${endPosition} top`, // page가 4개라서 75%임. 5개면 80%
          scrub: true,
          // invalidateOnRefresh: true,
          markers: true,
        },
        ease: "none",
        height: "100%",
      });
    }
  }, []);
};

//Refactoring 타임

// 반복되는 gsap 에니메이션 정의를 줄여보자

// side bar navigation 컴포넌트를 디자인하고 구현하자.

// 코드컨벤션에 맞춰서 구조를 짜보자.

//  페이지 수가 늘었을 때 변수 하나만 변경해도 적용되게 만들어 보자.

// ++ 추가적으로 muterial ui 보고 컴포넌트 디자인하기
