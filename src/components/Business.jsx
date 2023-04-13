import React from "react";

//style
import styles from "../style";

// component
import Title from "./customize-tage/Title";
import Paragraph from "./customize-tage/Paragraph";
import Button from "./customize-tage/Button";

// features
import { features } from "../constants";

const FeatureCard = ({ icon, title, content, id }) => (
  <div className="flex justify-between items-center feature-card  p-3 rounded-[20px] hover:cursor-pointer">
    <div
      className={`md:w-[64px] w-[100px] h-[64px] p-2 circle ${styles.flexCenter} bg-dimBlue mr-4`}
    >
      <img src={icon} alt={title} className="w-[50%] h-[50%]" />
    </div>
    <div className={`ml-4`}>
      <span className="text-white font-semibold text-[18px]">{title}</span>
      <Paragraph>{content}</Paragraph>
    </div>
  </div>
);

const Business = () => {
  return (
    <div className="flex w-full md:justify-between justify-center md:flex-row flex-col  ">
      <section className={`${styles.flexStart} flex-col`}>
        <Title>
          You do the business, <br className="sm:block hidden" />
          we’ll handle the money.
        </Title>
        <Paragraph className='md:max-w-[470px]'>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </Paragraph>
        <Button styles={`mt-10`}>Get Started</Button>
      </section>
      <section className={`${styles.flexStart} md:w-[800px] w-full md:mt-0 mt-8 mr-8 flex-col`}>
        {features.map((item) => (
          <FeatureCard key={item.id} {...item} />
        ))}
      </section>
    </div>
  );
};

export default Business;
