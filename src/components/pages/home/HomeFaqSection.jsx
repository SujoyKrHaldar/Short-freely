/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { faqs } from "../../../utils/constants";
import {
  decoratorThree as decorator,
  questionImgUrl,
} from "../../../utils/imageUrls";

const HomeFaqSection = () => {
  return (
    <section className="pb-8 pt-16 bg-gray-100">
      <div className="container relative w-full h-full flex items-center justify-around">
        <div className="max-w-xl space-y-8">
          <div className="max-w-2xl space-y-4">
            <img src={decorator} className="w-10" />
            <p className="uppercase tracking-[0.5rem]">FAQ</p>
            <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
              Got Questions?
            </h2>
            <p className="max-w-lg mt-4">
              We’ve Got Answers! Some frequently asked questions.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-2">
            {faqs.map((item, id) => (
              <AccordionItem
                key={id}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>

          <p className="text-gray-600  mt-9">
            Didn’t find the answer you are looking for?{" "}
            <Link
              href="#"
              className="font-medium text-black transition-all duration-200 hover:underline"
            >
              Contact our support
            </Link>
          </p>
        </div>

        <div className="w-[450px]">
          <img src={questionImgUrl} alt="page not found" />
        </div>
      </div>
    </section>
  );
};

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`bg-white border duration-150 hover:scale-[1.02] cursor-auto z-10 hover:z-20 hover:shadow-sm ${
        isOpen
          ? " border-black hover:border-black"
          : "border-zinc-300 hover:border-zinc-500 "
      }`}
    >
      <button
        onClick={toggleAccordion}
        className={`w-full flex justify-between items-center py-4 px-6 text-lg border-b duration-200 ${
          isOpen ? "border-b-black" : "border-b-white"
        } `}
      >
        <p className={`${isOpen ? "font-bold" : "font-normal"}`}>{title}</p>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="ml-2">
          <ChevronDown />
        </motion.span>
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="px-6 py-4">{content}</p>
      </motion.div>
    </div>
  );
};

export default HomeFaqSection;
