import { useEffect } from "react";

export const useHeaderAnimation = (
  ref: React.RefObject<HTMLHeadingElement>
) => {
  useEffect(() => {
    //원래의 상태
    gsap.set(ref.current, {
      autoAlpha: 0,
    });
    //애니메이션으로 변경될 상태
    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: "bottom bottom",
        markers: true,
        toggleActions: "play pause reserve reset",
      },
      duration: 1,
      delay : 0.2,
      autoAlpha: 1,
    });
  }, []);
};

export const useDividerAnimation = (ref : React.RefObject<HTMLDivElement>) => {

    useEffect(()=>{ 
        gsap.to(ref.current, {
            scrollTrigger: {
                trigger: ref.current,
                start: "bottom bottom",
                markers: true,
                toggleActions: "play pause reserve reset",
              },
              duration: 1,
              delay : 0.2,
              autoAlpha: 1,
              width : "100%",
        })

    },[])
}
