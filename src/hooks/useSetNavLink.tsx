import { useEffect } from "react";

const useSetNavLink = (refArr: React.RefObject<HTMLAnchorElement>[]) => {
  const [SectionLinkRef0, SectionLinkRef1, SectionLinkRef2, SectionLinkRef3] =
    refArr;
  useEffect(() => {
    const clickHandler0 = (e: MouseEvent) => {
      e.preventDefault();
      gsap.to(window, {
        scrollTo: 0,
        duration: 0.5,
        ease: "none",
        delay: 0,
      });
    };
    const clickHandler1 = (e: MouseEvent) => {
      e.preventDefault();
      gsap.to(window, {
        scrollTo: "#temp1",
        duration: 0.5,
        ease: "none",
        delay: 0,
      });
    };
    const clickHandler2 = (e: MouseEvent) => {
      e.preventDefault();
      gsap.to(window, {
        scrollTo: "#temp2",
        duration: 0.5,
        ease: "none",
        delay: 0,
      });
    };
    const clickHandler3 = (e: MouseEvent) => {
      e.preventDefault();
      gsap.to(window, {
        scrollTo: "#temp3",
        duration: 0.5,
        ease: "none",
        delay: 0,
      });
    };
    SectionLinkRef0.current?.addEventListener("click", clickHandler0);
    SectionLinkRef1.current?.addEventListener("click", clickHandler1);
    SectionLinkRef2.current?.addEventListener("click", clickHandler2);
    SectionLinkRef3.current?.addEventListener("click", clickHandler3);

    return () => {
      SectionLinkRef0.current?.removeEventListener("click", clickHandler0);
      SectionLinkRef1.current?.removeEventListener("click", clickHandler1);
      SectionLinkRef2.current?.removeEventListener("click", clickHandler2);
      SectionLinkRef3.current?.removeEventListener("click", clickHandler3);
    };
  }, []);
};

export default useSetNavLink;
