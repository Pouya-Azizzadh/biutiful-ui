import React from "react";
// components
import Title from "./customize-tage/Title";
import Paragraph from "./customize-tage/Paragraph";
import Button from "./customize-tage/Button";

// style
import styles from "../style";

const CTA = () => {
  return (
    <section
      className={`flex p-12 justify-between md:flex-row flex-col w-full bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
    
      <div className="flex flex-col">
        <Title>Let’s try our service now!</Title>
        <Paragraph className="max-w-[400px]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </Paragraph>
      </div>
      <div className="h-full flex items-end justify-end">
       <div className="mb-[200px] md:block hidden"></div>
        <Button>Get Started</Button>
      </div>
    </section>
  );
};

export default CTA;
