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
    <section className="pb-16 mobile:pb-0 laptop:pb-8 pt-16 bg-gray-100">
      <div className="container relative w-full h-full flex flex-col laptop:flex-row items-center justify-around">
        <div className="max-w-xl space-y-8">
          <div className=" text-center laptop:text-left space-y-4">
            <img
              loading="lazy"
              src={decorator}
              draggable={false}
              alt="decorator"
              className="w-10 mx-auto laptop:mx-0"
            />
            <p className="p-tag">FAQ</p>
            <h2 className="h2-bold">Got Questions?</h2>
            <p className="p-main">
              We’ve Got Answers! Some frequently asked questions.
            </p>
          </div>

          <div className="space-y-2">
            {faqs.map((item, id) => (
              <AccordionItem
                key={id}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>

          <p className="text-gray-600 text-center laptop:text-left">
            Didn’t find the answer you are looking for?{" "}
            <Link
              href="#"
              className="font-medium text-black transition-all duration-200 hover:underline"
            >
              Contact our support
            </Link>
          </p>
        </div>

        <div className="w-1/2 laptop:w-[450px]">
          <img
            loading="lazy"
            draggable={false}
            src={questionImgUrl}
            alt="question mark"
          />
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
      className={`bg-white border duration-150 laptop:hover:scale-[1.02] cursor-auto z-10 hover:z-20 hover:shadow-sm ${
        isOpen
          ? " border-black laptop:hover:border-black"
          : "border-zinc-300 laptop:hover:border-zinc-500 "
      }`}
    >
      <button
        onClick={toggleAccordion}
        className={`w-full flex justify-between items-center py-3 mobile:py-4 px-4 mobile:px-6 border-b duration-200 ${
          isOpen ? "border-b-black" : "border-b-white"
        } `}
      >
        <p
          className={`text-left text-sm mobile:text-lg ${
            isOpen ? "font-bold" : "font-normal"
          } `}
        >
          {title}
        </p>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
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
        <p className="px-4 mobile:px-6 py-4 text-sm mobile:text-lg">
          {content}
        </p>
      </motion.div>
    </div>
  );
};

export default HomeFaqSection;
