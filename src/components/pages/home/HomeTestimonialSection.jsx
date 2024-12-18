/* eslint-disable react/prop-types */
import { BadgeCheck } from "lucide-react";
import { testimonials } from "../../../utils/constants";
import { decoratorThree as decorator } from "../../../utils/imageUrls";

function HomeTestimonialSection() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="container space-y-16">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <img
            src={decorator}
            className="w-10 mx-auto"
            draggable={false}
            alt="decorator"
          />
          <p className="uppercase tracking-[0.5rem]">Testimonials</p>
          <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Trusted by Thousands Worldwide
          </h2>
          <p className="max-w-lg mx-auto mt-4 italic">
            &quot;Using this URL shortener has completely transformed how I
            share links. The analytics tools are a game changer for my
            campaigns!&quot; –{" "}
            <span className="block font-bold not-italic">
              Alex J., Digital Marketer
            </span>
          </p>
        </div>

        <div className="px-12 grid grid-cols-1 gap-1 xl:grid-cols-4 sm:grid-cols-2">
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
      className="overflow-hidden bg-zinc-100 hover:bg-white border border-zinc-50 hover:border-zinc-500 duration-150 hover:scale-105 cursor-auto z-10 hover:z-30 hover:odd:rotate-2 hover:even:-rotate-2 hover:shadow-xl [&:nth-child(7)]:scale-105 [&:nth-child(7)]:bg-white [&:nth-child(7)]:shadow-md hover:[&:nth-child(7)]:shadow-xl [&:nth-child(7)]:border-zinc-500 [&:nth-child(7)]:z-20 [&:nth-child(7)]:-rotate-2 
      [&:nth-child(2)]:scale-105 [&:nth-child(2)]:bg-white [&:nth-child(2)]:shadow-md hover:[&:nth-child(2)]:shadow-xl [&:nth-child(2)]:border-zinc-500 [&:nth-child(2)]:z-20 [&:nth-child(2)]:rotate-2"
    >
      <div className="px-5 py-6">
        <div className="flex items-center justify-between">
          <img
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
          <p className="text-base text-gray-800">
            {testimonial.text}
            <span className="block text-sky-500">{testimonial.hashtag}</span>
          </p>
        </blockquote>
      </div>
    </div>
  );
};
