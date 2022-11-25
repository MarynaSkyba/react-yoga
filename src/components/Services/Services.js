import React from "react";
import Icon1 from '../../images/img-1.svg';
import Icon2 from '../../images/img-2.svg';
import Icon3 from '../../images/img-7.svg';

import {ServicesContainer, ServicesHeading, ServicesWrapper, ServicesCard, ServicesDescription, ServicesIcon, ServicesText} from './ServicesElements';

function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesHeading> Our services </ServicesHeading>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesText>Get well</ServicesText>
          <ServicesDescription>Description</ServicesDescription>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesText>Find out more</ServicesText>
          <ServicesDescription>Description</ServicesDescription>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesText>Be safe</ServicesText>
          <ServicesDescription>Description</ServicesDescription>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;
