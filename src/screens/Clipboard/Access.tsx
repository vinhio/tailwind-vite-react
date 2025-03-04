import React, {memo} from 'react';
import {Fragment} from "@/components";
import imgAccess from "@/assets/clipboard/image-devices.png";

const AccessComponent: React.FC = () => {
  return (
    <Fragment>
      {/* Access section */}
      <section id="access">
        <div className="section-container my-20">
          <h3>
            Access Clipboard Anywhere
          </h3>
          <p className="paragraph-section text-xl leading-9 mb-25">
            Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.
          </p>
          <img src={imgAccess} alt="Access" className="mx-auto" />
        </div>
      </section>
    </Fragment>
  );
};

AccessComponent.displayName = "Clipboard";

export const Access = memo(AccessComponent);
