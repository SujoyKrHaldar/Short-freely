/* eslint-disable react/prop-types */
import { BadgeCheck } from "lucide-react";
import { testimonials } from "../../../utils/constants";
import { decoratorThree as decorator } from "../../../utils/imageUrls";

function HomeTestimonialSection() {
  return (
    <section className=" bg-white py-16 mobile:py-24">
      <div className="container space-y-8 laptop:space-y-16">
        <div className="max-w-3xl mx-auto text-center space-y-4 pb-8 laptop:pb-0">
          <img
            loading="lazy"
            src={decorator}
            className="w-10 mx-auto"
            draggable={false}
            alt="decorator"
          />
          <p className="p-tag">Testimonials</p>
          <h2 className="h2-bold">Trusted by Thousands Worldwide</h2>
          <p className="max-w-xl mx-auto p-main italic">
            &quot;Using this URL shortener has completely transformed how I
            share links. The analytics tools are a game changer for my
            campaigns!&quot; –{" "}
            <span className="block font-bold not-italic mobile:mt-0 mt-4">
              Alex J., Digital Marketer
            </span>
          </p>
        </div>

        <div className="tablet:px-10 grid grid-cols-1 gap-1 desktop:grid-cols-4 mobile:grid-cols-2">
          {testimonials.map((testimonial, id) => (
            <TestimonialCard key={id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeTestimonialSection;

const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      className="overflow-hidden bg-zinc-100 laptop:hover:bg-white border border-zinc-400 laptop:border-zinc-50 laptop:hover:border-zinc-500 duration-150 laptop:hover:scale-105 cursor-auto z-10 laptop:hover:z-30 laptop:hover:odd:rotate-2 laptop:hover:even:-rotate-2 laptop:hover:shadow-xl [&:nth-child(7)]:scale-105 [&:nth-child(7)]:bg-white [&:nth-child(7)]:shadow-md laptop:hover:[&:nth-child(7)]:shadow-xl [&:nth-child(7)]:border-zinc-500 [&:nth-child(7)]:z-20 [&:nth-child(7)]:-rotate-2 
      [&:nth-child(2)]:scale-105 [&:nth-child(2)]:bg-white [&:nth-child(2)]:shadow-md laptop:hover:[&:nth-child(2)]:shadow-xl [&:nth-child(2)]:border-zinc-500 [&:nth-child(2)]:z-20 [&:nth-child(2)]:rotate-2"
    >
      <div className="px-5 py-6">
        <div className="flex items-center justify-between">
          <img
            loading="lazy"
            draggable={false}
            className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
            src={testimonial.avatar}
            alt={testimonial.name}
          />
          <div className="min-w-0 ml-3 mr-auto">
            <p className="text-base font-semibold text-black truncate">
              {testimonial.name}
            </p>
            <p className="text-sm text-gray-600 truncate">
              {testimonial.username}
            </p>
          </div>
          <a
            draggable={false}
            href="#"
            title=""
            className="inline-block text-sky-500"
          >
            <BadgeCheck />
          </a>
        </div>
        <blockquote className="mt-5">
          <p className="text-sm mobile:text-base text-gray-800">
            {testimonial.text}
            <span className="block text-sky-500">{testimonial.hashtag}</span>
          </p>
        </blockquote>
      </div>
    </div>
  );
};
