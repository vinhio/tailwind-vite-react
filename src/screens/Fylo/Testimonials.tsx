import React, {memo} from 'react';
import {Fragment} from "@/components";
import bgQuotes from "@/assets/fylo/bg-quotes.png";
import imgProfile1 from "@/assets/fylo/profile-1.jpg";
import imgProfile2 from "@/assets/fylo/profile-2.jpg";
import imgProfile3 from "@/assets/fylo/profile-3.jpg";

const TestimonialsComponent: React.FC = () => {
  return (
    <Fragment>
      {/* Testimonials section */}
      <section id="testimonials" className="bg-gray-50 dark:bg-dark-blue">
        {/* Testimonials Container */}
        <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
          {/* Boxes Container */}
          <div
            className="relative flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12">
            {/* Quotes Image */}
            <img src={bgQuotes} alt=""
                 className="absolute left-1 -top-2 w-10 md:-top-16 md:w-20"/>

            {/* Box 1 */}
            <div
              className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-dark-blue3 md:w-1/3">
              <p className="text-sm leading-6 md:text-lg font-light">
                Fylo has improved our team productivity by an order of
                magnitude.
                Since making the switch our team has become a well-oiled
                collaboration machine.
              </p>
              {/* Customer Info */}
              <div className="flex space-x-4">
                <img src={imgProfile1} alt=""
                     className="w-10 h-10 rounded-full"/>
                <div>
                  <h5 className="text-sm font-semibold">Satish Patel</h5>
                  <p className="text-xs font-extralight">Founder &amp; CEO.
                    Huddle</p>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div
              className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-dark-blue3 md:w-1/3">
              <p className="text-sm leading-6 md:text-lg font-light">
                Fylo has improved our team productivity by an order of
                magnitude.
                Since making the switch our team has become a well-oiled
                collaboration machine.
              </p>
              {/* Customer Info */}
              <div className="flex space-x-4">
                <img src={imgProfile2} alt=""
                     className="w-10 h-10 rounded-full"/>
                <div>
                  <h5 className="text-sm font-semibold">Bruce McKenzie</h5>
                  <p className="text-xs font-extralight">Founder &amp; CEO.
                    Huddle 2</p>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div
              className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-dark-blue3 md:w-1/3">
              <p className="text-sm leading-6 md:text-lg font-light">
                Fylo has improved our team productivity by an order of
                magnitude.
                Since making the switch our team has become a well-oiled
                collaboration machine.
              </p>
              {/* Customer Info */}
              <div className="flex space-x-4">
                <img src={imgProfile3} alt=""
                     className="w-10 h-10 rounded-full"/>
                <div>
                  <h5 className="text-sm font-semibold">Eva Boyd</h5>
                  <p className="text-xs font-extralight">Founder &amp; CEO.
                    Huddle 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

TestimonialsComponent.displayName = "Testimonials";

export const Testimonials = memo(TestimonialsComponent);
