import React, {memo} from 'react';
import {Fragment} from "@/components";
import imgAccess from "@/assets/fylo/icon-access-anywhere.svg";
import imgSecure from "@/assets/fylo/icon-security.svg";
import imgCollaboration from "@/assets/fylo/icon-collaboration.svg";
import imgAnyFile from "@/assets/fylo/icon-any-file.svg";


const FeatureComponent: React.FC = () => {
  return (
    <Fragment>
      {/* Feature section */}
      <section id="features" className="pt-12 bg-gray-50 dark:bg-dark-blue1">
        {/* Features Container */}
        <div className="container mx-auto px-6 pb-32">
          {/* First Row */}
          <div
            className="flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
            {/* Item 1 */}
            <div className="flex flex-col items-center space-y-2 md:w-1/2">
              <div className="flex items-center justify-center h-24 mb-6">
                <img src={imgAccess} alt=""/>
              </div>
              <h3 className="text-xl font-bold">Access your file from
                anywhere</h3>
              <p className="max-w-md">
                The ability to use a smartphone, tablet, or computer to access
                your account means your files follow you everywhere.
              </p>
            </div>
            {/* Item 2 */}
            <div className="flex flex-col items-center space-y-2 md:w-1/2">
              <div className="flex items-center justify-center h-24 mb-6">
                <img src={imgSecure} alt=""/>
              </div>
              <h3 className="text-xl font-bold">Security you can trust</h3>
              <p className="max-w-md">
                2-factor authentication and user-controlled encryption are just
                a
                couple of the security features we allow to help secure your
                files.
              </p>
            </div>
          </div>

          {/* Second Row */}
          <div
            className="flex flex-col space-y-24 mt-28 text-center md:flex-row md:space-y-0">
            {/* Item 3 */}
            <div className="flex flex-col items-center space-y-2 md:w-1/2">
              <div className="flex items-center justify-center h-24 mb-6">
                <img src={imgCollaboration} alt=""/>
              </div>
              <h3 className="text-xl font-bold">Access your file from
                anywhere</h3>
              <p className="max-w-md">
                The ability to use a smartphone, tablet, or computer to access
                your account means your files follow you everywhere.
              </p>
            </div>
            {/* Item 4 */}
            <div className="flex flex-col items-center space-y-2 md:w-1/2">
              <div className="flex items-center justify-center h-24 mb-6">
                <img src={imgAnyFile} alt=""/>
              </div>
              <h3 className="text-xl font-bold">Security you can trust</h3>
              <p className="max-w-md">
                2-factor authentication and user-controlled encryption are just
                a
                couple of the security features we allow to help secure your
                files.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

FeatureComponent.displayName = "Feature";

export const Feature = memo(FeatureComponent);
