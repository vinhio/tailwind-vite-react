import React, {memo} from 'react';
import {Fragment} from "@/components";

const EarlyAccessComponent: React.FC = () => {
  return (
    <Fragment>
      {/* EarlyAccess section */}
      <section id="early-access"
               className="relative px-6 dark:bg-dark-blue2 md:px-0">
        <div
          className="relative -top-40 max-w-4xl mx-auto p-10 px-6 space-y-6 text-center rounded-lg bg-gray-200 dark:bg-dark-blue1 md:px-16">
          <h5 className="text-2xl font-bold">Get early access today</h5>
          <p className="text-sm">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would
            be happy to help you.
          </p>
          {/* Input & Button Container */}
          <div
            className="flex flex-col items-start space-y-6 md:flex-row md:space-y-0 md:space-x-6">
            <div className="w-full md:flex-1">
              <input type="text"
                     className="w-full px-10 py-3 rounded-full focus:outline-none bg-white text-gray-700"
                     placeholder="email@example.com"/>
            </div>

            <button
              className="w-full p-3 px-6 rounded-full bg-accent-cyan md:w-56 hover:scale-95">
              Get Started For Free
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

EarlyAccessComponent.displayName = "EarlyAccess";

export const EarlyAccess = memo(EarlyAccessComponent);
