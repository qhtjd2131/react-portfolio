import { useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import gsap from "gsap";

export const useSetMainAnimation = (mainRef: HTMLDivElement | null) => {
  useEffect(() => {
    if (mainRef != null) {
      gsap.to(mainRef, {
        scrollTrigger: {
          id: "background",
          trigger: mainRef,
          scrub: true,
          start: "bottom bottom",
          pin: true,
          markers: false,
          pinSpacing: false,
        },
        autoAlpha: 0,

        onStart: () => {
          console.log("animation start");
        },
      });
    }
  }, [mainRef]);
};



export const useSetMainTextAnimation = (textRefs: HTMLDivElement[]) => {
  const [property, setProperty] = useState({
    fontSize: "0px",
    left: 0,
  });
  const { width } = useWindowDimensions();
  let timeline: gsap.core.Timeline = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "power3.inOut",
    },
  });

  //반응형 effect
  useEffect(() => {
    setProperty(() => {
      let fontSizeTemp: string = "24px";
      let rightSpace: number = 400;
      if (width >= 1600) {
        fontSizeTemp = "46px";
        rightSpace = 640;
      } else if (width >= 900) {
        fontSizeTemp = "36px";
        rightSpace = 480;
      } else {
        fontSizeTemp = "24px";
      }
      return {
        fontSize: fontSizeTemp,
        left: width - rightSpace,
      };
    });
  }, [width]);

  useEffect(() => {
    timeline.clear();
    
    const positionYArr = [450, 500, 600];
    textRefs.forEach((ref, index) => {
      const gsapSet = gsap.set(ref, {
        fontSize: property.fontSize,
        right: 0,
        y: positionYArr[index],
      });

      timeline.add(gsapSet);
    });

    textRefs.forEach((ref, index) => {
      const gsapTo = gsap.to(ref, {
        left: property.left,
        opacity: 1,
        duration: 1,
      });
      timeline.add(gsapTo, 0.1 * (index + 1));
    });
  }, [property]);

  useEffect(() => {
  }, [property]);
};
