import React from "react";
import {
  ReusableContainer,
  ReusableWrapper,
  FirstColmn,
  SecondColmn,
  ReusableRow,
  TextWraper,
  TopLine,
  Heading,
  BtnWrap,
  Img,
  ImgWrap,
  Subtitle,
} from "./ReusableSectionElements";

import { Button } from "../Button/ButtonElement";

const ReusableSection = (data) => {
  return (
    <>
      <ReusableContainer lightBg={data.lightBg} id={data.id}>
        <ReusableWrapper>
          <ReusableRow imgStart={data.imgStart}>
            <FirstColmn>
              <TextWraper>
                <TopLine>{data.topLine}</TopLine>
                <Heading lightText={data.lightText}>{data.headline}</Heading>
                <Subtitle darkText={data.darkText}>{data.description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    sry={true}
                    exact="true"
                    offset={-80}
                    primary={data.primary? 1 : 0}
                    dark={data.dark? 1:0}
                    // dakr2={dark2?1:0}
                  >
                    
                    {data.buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWraper>
            </FirstColmn>
            <SecondColmn>
              <ImgWrap>
                <Img src={data.img} alt={data.alt} />
              </ImgWrap>
            </SecondColmn>
          </ReusableRow>
        </ReusableWrapper>
      </ReusableContainer>
    </>
  );
};

export default ReusableSection;
