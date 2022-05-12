import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
gsap.defaults({ease: "none"});


const Icon = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
})``;

const Svg = styled(Icon)`
  width: 100%;
  background-color : black;
  /* padding-bottom : calc(var(--vh) * 200); */
`;

const Path = styled.path`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
const Path2 = styled(Path)`
  stroke-width: 10px;
`;
const Text = styled.text`
  fill: white;
  stroke: white;
  font-size: 15px;
  visibility: hidden;
`;

const Circle = styled.circle`
  fill: white;
  visibility: hidden;
`;
const SvgTest = () => {
  const svgRef = useRef(null);
  const ball1Ref = useRef(null);
  const ball2Ref = useRef(null);
  const ball3Ref = useRef(null);
  const ball4Ref = useRef(null);

  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);

  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const line4Ref = useRef(null);
  const line5Ref = useRef(null);

  const path2Ref = useRef<SVGPathElement>(null); //TheLine

  useEffect(() => {
    const pulses = gsap
      .timeline({
        defaults: {
          duration: 0.05,
          autoAlpha: 1,
          scale: 1.4,
          transformOrigin: "center",
          ease: "elastic(2.5, 1)",
        },
      })
      .to([ball2Ref.current, text1Ref.current], {}, 0.2)
      .to([ball3Ref.current, text2Ref.current], {}, 0.33)
      .to([ball4Ref.current, text3Ref.current], {}, 0.46);

    gsap
      .timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: svgRef.current,
          scrub: true,
          start: "top center",
          end: "bottom center",
        },
      })
      .to(ball1Ref.current, { duration: 0.01, autoAlpha: 1 })
      .from(path2Ref.current, { drawSVG: 0 }, 0)
      .to(
        ball1Ref.current,
        {
          motionPath: {
            path: path2Ref.current!,
            align: path2Ref.current!,
            alignOrigin: [0.5, 0.5],
          },
        },
        0
      )
      .add(pulses, 0);
  }, []);

  return (
    <Svg ref={svgRef} viewBox="0 0 600 1200">
      <Path ref={line1Ref} d="M 10 200  600 200" />
      <Path ref={line2Ref} d="M 10 400  600 400" />
      <Path ref={line3Ref} d="M 10 600  600 600" />
      <Path ref={line4Ref} d="M 10 800  600 800" />
      <Path ref={line5Ref} d="M 10 1000  600 1000" />

      {/* <path className="line01 line" d="M 10 200  600 200"></path>
      <path className="line02 line" d="M 10 400  600 400"></path>
      <path className="line03 line" d="M 10 600  600 600"></path>
      <path className="line04 line" d="M 10 800  600 800"></path>
      <path className="line05 line" d="M 10 1000  600 1000"></path> */}

      <Text ref={text1Ref} x="30" y="190">
        2018
      </Text>
      <Text ref={text2Ref} x="30" y="390">
        2019
      </Text>
      <Text ref={text3Ref} x="30" y="590">
        2020
      </Text>

      <Path2
        // className="theLine"
        ref={path2Ref}
        d="M -5,0
           Q 450 230 300 450 
           T 130 750
           Q 100 850 300 1000
           T 150 1200"
        fill="none"
        stroke="black"
        stroke-width="10px"
      />
      <Circle ref={ball1Ref} r="20" cx="50" cy="100"></Circle>
      <Circle ref={ball2Ref} r="20" cx="278" cy="201"></Circle>
      <Circle ref={ball3Ref} r="20" cx="327" cy="401"></Circle>
      <Circle ref={ball4Ref} r="20" cx="203" cy="601"></Circle>

      {/* <circle className="ball ball01" r="20" cx="50" cy="100"></circle>
      <circle className="ball ball02" r="20" cx="278" cy="201"></circle>
      <circle className="ball ball03" r="20" cx="327" cy="401"></circle>
      <circle className="ball ball04" r="20" cx="203" cy="601"></circle> */}
    </Svg>
  );
};

export default SvgTest;
