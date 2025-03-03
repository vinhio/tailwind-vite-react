import React, {memo} from 'react';
import {Fragment} from "@/components";

const SnippetComponent: React.FC = () => {
  return (
    <Fragment>
      {/* Snippet section */}
      <section id="snippet">
        <div className="section-container my-20 px-10">
          <h3>
            Keep track of your snippets
          </h3>
          <p className="paragraph-section text-xl leading-9 mb-25">
            Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.
          </p>
        </div>
      </section>
    </Fragment>
  );
};

SnippetComponent.displayName = "Clipboard";

export const Snippet = memo(SnippetComponent);
