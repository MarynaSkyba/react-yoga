import React, { useState } from "react";
import video from "../../videos/video.mp4";
import { Button } from "../Button/ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroTitle,
  HeroText,
  HeroBtnWrapper,
  ArrowFoward,
  ArrowRight,
} from "./HeroElement";

function Hero() {
  const [hover, setHover] = useState(false);

  const isHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroTitle>Go inside your mindfulll</HeroTitle>
        <HeroText>
          Los seguidores de las distintas doctrinas de la India sostienen que
          los diversos caminos conducen al mismo fin. Generalmente el seguidor
          de un tipo de yoga cree que el único yoga (método de unión o
          acercamiento a Dios) es el propio, y desprecia a los practicantes de
          otros tipos de yoga.
        </HeroText>
        <HeroBtnWrapper></HeroBtnWrapper>
        <Button
          to='more'
          primary
          big
          dark
          fontBig
          onMouseEnter={isHover}
          onMouseLeave={isHover}
        >
          More info {hover ? <ArrowFoward /> : <ArrowRight />}
        </Button>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
