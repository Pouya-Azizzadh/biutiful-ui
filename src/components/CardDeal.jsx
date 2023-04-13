import React from "react";
// style
import styles, { layout } from "../style";

// assets
import { card } from "../assets";

// cmponents
import Button from "./customize-tage/Button";
import Paragraph from "./customize-tage/Paragraph";
import Title from "./customize-tage/Title";

const CardDeal = () => {
  return (
    <section className={layout.sectionReverse}>
      <div>
        <Title>
          Find a better card deal
          <br className="sm:block hidden" /> in few easy steps.
        </Title>
        <Paragraph className={'max-w-[500px]'}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </Paragraph>
        <Button>Get Started</Button>
      </div>
      <div className={`max-w-[500px]`}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
    </section>
  );
};

export default CardDeal;
