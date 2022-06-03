import gsap from "gsap";
import { useEffect, useState } from "react";

export const usePageStartAnimation = (
  pageRef: React.RefObject<HTMLTableSectionElement>,
  ref: React.RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    const t: any = ref.current?.clientWidth;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: pageRef.current,
          start: "50% bottom",
          markers: true,
        },
      })
      .from(ref.current, {
        rotate: 180,
      })
      .from(ref.current, {
        width: "1%",
      });

    
  }, []);
};
