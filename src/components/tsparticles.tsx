import React from "react";
import styled from "styled-components";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Container, Engine } from "tsparticles-engine";



const ParticlesBox  = styled(Particles)`
    position : static !important;
`;


const Tsparticles = () => {
  const particlesInit = async (main: Engine): Promise<void> => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  const particlesLoaded = async (container: Container): Promise<void> => {
    console.log(container);
  };
  return (
    <Particles
      init={particlesInit}
      loaded={particlesLoaded}
      params={{
        fpsLimit: 60,
        particles: {
          color: {
            value: "#e5e5e5",
          },
          links: {
            enable: true,
            color: "#e5e5e5",
            distance: 200,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          opacity: {
            value: 0.5,
          },
          
        }, detectRetina : true
      }}
      style={{
        width: "100%",
        position : "absolute",
      }}
    />
  );
};

export default Tsparticles;
