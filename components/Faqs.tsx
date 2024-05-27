import React from "react";
import { Accordion } from "@mantine/core";
import { faqs } from "@/utils/data";

const Faqs = () => {
  const items = faqs.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.value}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <section className="bg-award bg-cover bg-no-repeat bg-centerh-fit">
      <div className=" w-[90%] py-[100px] mx-[5%] flex flex-col justify-center items-center text-white">
        <h1 className="font-bold text-5xl ">Curious Minds, Clear Answers!</h1>
        <p className="my-3 sm:text-lg text-gray-500">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour.
        </p>
      </div>

      <div>
        <Accordion
          variant="separated"
          radius="md"
          disableChevronRotation
          defaultValue="Apples"
        >
          {items}
        </Accordion>
      </div>
    </section>
  );
};

export default Faqs;
