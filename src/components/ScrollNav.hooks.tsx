import {  useEffect } from "react";
import * as constants from "../constants";

export const useSetNavLink = (refArr: HTMLAnchorElement[]) => {
  useEffect(() => {
    const clickHandlerArr = refArr.map((_, index) => {
      const str = "#temp" + index;
      return (e: MouseEvent) => {
        e.preventDefault();
        gsap.to(window, {
          scrollTo: index === 0 ? 0 : str,
          duration: 0.5,
          ease: "none",
          delay: 0,
        });
      };
    });

    refArr.forEach((ref, index) => {
      ref.addEventListener("click", clickHandlerArr[index]);
    });

    return () => {
      refArr.forEach((ref, index) => {
        ref.removeEventListener("click", clickHandlerArr[index]);
      });
    };
  }, []);
};

export const useSetLinkAnimation = (refArr: HTMLAnchorElement[]) => {
  useEffect(() => {
    const timeline = gsap.timeline();
    const refLen = refArr.length;
    refArr.forEach((ref, index) => {
      if (index != 0) {
        const startPosition = (1 / refLen) * 100 * index - 1 + "%";
        const gsapTo = gsap.to(ref, {
          scrollTrigger: {
            trigger: document.body,
            start: `${startPosition} top`,
            markers: true,
            toggleActions: "play pause reserve reset",
          },
          fontWeight: 600,
        });
        timeline.add(gsapTo);
      }
    });
  }, []);
};

export const useSetPathAnimaition = (pathRef: HTMLDivElement | null) => {
  useEffect(() => {
    if (pathRef != null) {
      const endPosition = 100 - (1 / constants.PAGE_COUNT) * 100 + "%";
      gsap.to(pathRef, {
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: `${endPosition} top`, // page가 4개라서 75%임. 5개면 80%
          markers: true,
          scrub: true,
        },
        ease: "none",
        height: "100%",
      });
    }
  }, [pathRef]);
};

//Refactoring 타임

// 반복되는 gsap 에니메이션 정의를 줄여보자

// side bar navigation 컴포넌트를 디자인하고 구현하자.

// 코드컨벤션에 맞춰서 구조를 짜보자.

//  페이지 수가 늘었을 때 변수 하나만 변경해도 적용되게 만들어 보자.
