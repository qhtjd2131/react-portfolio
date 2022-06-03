import gsap from "gsap";
import { useEffect, useState } from "react";
import { debounce } from "lodash";


export const usePageStartAnimation = (
  pageRef: React.RefObject<HTMLTableSectionElement>,
  ref: React.RefObject<HTMLDivElement>
) => {
  
  useEffect(() => {
    const t: any = ref.current?.clientWidth;
    
    // gsap
    //   .timeline({
    //     scrollTrigger: {
    //       trigger: pageRef.current,
    //       start: "50% bottom",
    //     //   toggleActions: "play pause reserve reset",
    //       markers: true,
    //     },
    //   })
    
    //   .to(ref.current, {
    //     width: "100%",
    //     height: "100%",
    //   });
    // gsap.from(ref.current, {
    //     scrollTrigger : {
    //         trigger  : pageRef.current,
    //         start : "50% bottom",
    //         toggleActions: "play pause reserve reset",
    //         markers : true,
    //     },

    // })
  }, []);
};
