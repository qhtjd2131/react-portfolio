import { useEffect } from "react";

export const useSetNavLink = (refArr: React.RefObject<HTMLAnchorElement>[]) => {

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
      ref.current?.addEventListener("click", clickHandlerArr[index]);
    });

    return () => {
      refArr.forEach((ref, index) => {
        ref.current?.removeEventListener("click", clickHandlerArr[index]);
      });

    };
  }, []);
};

export const useSetLinkAnimation = (
  refArr: React.RefObject<HTMLAnchorElement>[]
) => {
  const [SectionLinkRef0, SectionLinkRef1, SectionLinkRef2, SectionLinkRef3] =
    refArr;
  useEffect(() => {
    gsap
      .timeline()
      .to(SectionLinkRef1.current, {
        scrollTrigger: {
          trigger: document.body,
          start: `24% top`,
          markers: true,
          toggleActions: "play pause reserve reset",
        },
        fontWeight: 600,
      })
      .to(SectionLinkRef2.current, {
        scrollTrigger: {
          trigger: document.body,
          start: `49% top`,
          markers: true,
          toggleActions: "play pause reserve reset",
        },
        fontWeight: 600,
      })
      .to(SectionLinkRef3.current, {
        scrollTrigger: {
          trigger: document.body,
          start: `74% top`,
          markers: true,
          toggleActions: "play pause reserve reset",
        },
        fontWeight: 600,
      });
  }, []);
};



//Refactoring 타임

// 반복되는 gsap 에니메이션 정의를 줄여보자

// side bar navigation 컴포넌트를 디자인하고 구현하자.

// 코드컨벤션에 맞춰서 구조를 짜보자.