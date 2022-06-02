import { useEffect } from "react";

export const useSetAppAnimation = (
  refArr: React.MutableRefObject<HTMLTableSectionElement[]>
) => {
  useEffect(() => {
    // refArr.current.forEach((ref, index) => {
    //   ScrollTrigger.create({
    //     trigger: ref,
    //     start: "top top",
    //     pin: true,
    //     scrub : 1,
    //     // snap: 1,
    //     // pinSpacing : "20%",
    //     pinSpacing: false,
    //   });
    // });

    refArr.current.forEach((ref,index)=>{
        gsap.to(ref, {
            scrollTrigger : {
                trigger: ref,
                start: "top top",
                pin: true,
                scrub : 1,
                pinSpacing: false,
            },
            xPercent : 100 * ( 3 - 1 ),
        })
    })
  }, []);
};
